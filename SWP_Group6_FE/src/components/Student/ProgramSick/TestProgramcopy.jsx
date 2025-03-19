import { useState, useEffect } from "react";
import instance from "../../config/axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TestProgramcp = () => {
  const [questions, setQuestions] = useState([]);
  const [testName, setTestName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [chartData, setChartData] = useState(null); // Thêm state cho dữ liệu biểu đồ

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionData = await fetchQuestions();
        const questionTypeData = await fetchQuestionTypes();

        // Kết nối câu hỏi với loại câu hỏi
        const combinedData = questionData.map((question) => {
          const qtype = questionTypeData.find(
            (type) => type.qtypeId === question.qtypeId
          );
          return {
            questionId: question.questionId,
            qtypeId: question.qtypeId,
            questionText: question.question1,
            qtype: qtype ? qtype.qtype : "", // Lấy tên loại câu hỏi
            rating: 0, // Mức độ đánh giá ban đầu
          };
        });

        setQuestions(combinedData);
        setTestName(`Bài kiểm tra tâm lý học đường - ${new Date().toLocaleString()}`);

      } catch (err) {
        console.error("Lỗi khi tải dữ liệu:", err.message);
      }
    };

    fetchData();
  }, []);

  const fetchQuestions = async () => {
    const response = await instance.get("/api/Question");
    return response.data.data; // Giả sử dữ liệu trả về nằm trong response.data.data
  };

  const fetchQuestionTypes = async () => {
    const response = await instance.get("/api/QuestionType");
    return response.data.data; // Giả sử dữ liệu trả về nằm trong response.data.data
  };

  const calculateScores = () => {
    // Tính toán điểm số cho từng khía cạnh
    const cwiQuestions = questions.filter(q => q.qtype === "Sức khỏe nhận thức");
    const swiQuestions = questions.filter(q => q.qtype === "Sức khỏe xã hội");
    const ewiQuestions = questions.filter(q => q.qtype === "Sức khỏe cảm xúc");
    const pwiQuestions = questions.filter(q => q.qtype === "Sức khỏe thể chất");

    const cwiScore = cwiQuestions.length > 0 ? cwiQuestions.reduce((sum, q) => sum + q.rating, 0) / cwiQuestions.length : 0;
    const swiScore = swiQuestions.length > 0 ? swiQuestions.reduce((sum, q) => sum + q.rating, 0) / swiQuestions.length : 0;
    const ewiScore = ewiQuestions.length > 0 ? ewiQuestions.reduce((sum, q) => sum + q.rating, 0) / ewiQuestions.length : 0;
    const pwiScore = pwiQuestions.length > 0 ? pwiQuestions.reduce((sum, q) => sum + q.rating, 0) / pwiQuestions.length : 0;

    const csepScore = (cwiScore + swiScore + ewiScore + pwiScore) / 4;

    // Tạo dữ liệu cho biểu đồ
    const chartData = {
      labels: ['CWI', 'SWI', 'EWI', 'PWI'],
      datasets: [
        {
          label: 'Điểm số',
          data: [cwiScore, swiScore, ewiScore, pwiScore],
          backgroundColor: ['#FFC107', '#29B6F6', '#3F51B5', '#03A9F4'],
        },
      ],
    };

    setChartData(chartData);
  };

  const handleSubmit = async () => {
    // Kiểm tra xem tất cả các câu hỏi đã được đánh giá chưa
    if (questions.some((q) => q.rating === 0)) {
      setError("Vui lòng đánh giá tất cả các câu hỏi!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Tạo bài test
      const testResponse = await instance.post("/api/Test", {
        testName: testName,
      });
      console.log("testResponse:", testResponse); // Log toàn bộ response

      if (
        testResponse &&
        testResponse.data &&
        testResponse.data.data &&
        testResponse.data.data.testId
      ) {
        const newTestId = testResponse.data.data.testId;
        console.log("newTestId (sau khi tạo test):", newTestId); // Log testId

        // Tạo mảng answers
        const answers = questions.map((question) => ({
          testQuestionId: question.questionId,
          answer: question.rating,
        }));

        // Tạo request body
        const testResult = {
          testId: newTestId,
          answers: answers,
        };

        console.log("testResult:", testResult);

        // Gửi request đến /api/TestResult
        const resultResponse = await instance.post("/api/TestResult", testResult);
        console.log("resultResponse:", resultResponse);

        alert("Đánh giá đã được gửi thành công!");

        // Tính toán điểm số và tạo biểu đồ sau khi gửi thành công
        calculateScores();
      } else {
        setError("Không thể tạo bài kiểm tra. Vui lòng kiểm tra backend.");
      }
    } catch (err) {
      setError("Có lỗi xảy ra khi gửi khảo sát: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Ẩn chú thích
      },
      title: {
        display: false, // Ẩn tiêu đề
      },
    },
    scales: {
      y: {
        min: 0,
        max: 5, // Đặt giới hạn trục y từ 0 đến 5
      },
    },
  };

  return (
    <div className="w-full h-100 text-sm">
      <h1>{testName}</h1>
      {questions.map((question) => (
        <div key={question.questionId}>
          <h3>{question.questionText} ({question.qtype})</h3>
          <div>
            {Array.from({ length: 5 }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => {
                  const updatedQuestions = questions.map((q) =>
                    q.questionId === question.questionId
                      ? { ...q, rating: i + 1 }
                      : q
                  );
                  setQuestions(updatedQuestions);
                }}
                style={{
                  padding: "10px",
                  backgroundColor: question.rating === i + 1 ? "blue" : "lightgray",
                  color: question.rating === i + 1 ? "white" : "black",
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Đang gửi..." : "Gửi đánh giá"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Hiển thị biểu đồ */}
      {chartData && (
        <div>
          <Bar options={chartOptions} data={chartData} />
        </div>
      )}
    </div>
  );
};

export default TestProgramcp;


// import { useState, useEffect } from "react";
// import instance from "../../config/axios";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const TestProgramcp = () => {
//   const [questions, setQuestions] = useState([]);
//   const [testName, setTestName] = useState("");
//   const [testId, setTestId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [chartData, setChartData] = useState(null);
//   const [scoreDetails, setScoreDetails] = useState({
//     cwi: 0,
//     swi: 0,
//     ewi: 0,
//     pwi: 0
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const questionData = await fetchQuestions();
//         const questionTypeData = await fetchQuestionTypes();
//         const testData = await fetchTest(); // Lấy dữ liệu test (ID bài kiểm tra)

//         // Lưu ID bài test
//         setTestId(testData.id);

//         // Kết nối câu hỏi với loại câu hỏi
//         const combinedData = questionData.map((question) => {
//           const qtype = questionTypeData.find(
//             (type) => type.qtypeId === question.qtypeId
//           );
//           return {
//             questionId: question.questionId,
//             qtypeId: question.qtypeId,
//             questionText: question.question1,
//             qtype: qtype ? qtype.qtype : "", // Lấy tên loại câu hỏi
//             rating: 0, // Mức độ đánh giá ban đầu
//           };
//         });

//         setQuestions(combinedData);
//         setTestName(`Bài kiểm tra tâm lý học đường - ${new Date().toLocaleString()}`);

//       } catch (err) {
//         console.error("Lỗi khi tải dữ liệu:", err.message);
//       }
//     };

//     fetchData();
//   }, []);

//   const fetchQuestions = async () => {
//     const response = await instance.get("/api/Question");
//     return response.data.data; // Giả sử dữ liệu trả về nằm trong response.data.data
//   };

//   const fetchQuestionTypes = async () => {
//     const response = await instance.get("/api/QuestionType");
//     return response.data.data; // Giả sử dữ liệu trả về nằm trong response.data.data
//   };

//   const fetchTest = async () => {
//     const response = await instance.get("/api/test");
//     return response.data.data; // Giả sử dữ liệu trả về nằm trong response.data.data
//   };

//   const calculateScores = () => {
//     const cwiQuestions = questions.filter(q => q.qtype === "Sức khỏe nhận thức");
//     const swiQuestions = questions.filter(q => q.qtype === "Sức khỏe xã hội");
//     const ewiQuestions = questions.filter(q => q.qtype === "Sức khỏe cảm xúc");
//     const pwiQuestions = questions.filter(q => q.qtype === "Sức khỏe thể chất");

//     const cwiScore = cwiQuestions.length > 0 ? cwiQuestions.reduce((sum, q) => sum + q.rating, 0) / cwiQuestions.length : 0;
//     const swiScore = swiQuestions.length > 0 ? swiQuestions.reduce((sum, q) => sum + q.rating, 0) / swiQuestions.length : 0;
//     const ewiScore = ewiQuestions.length > 0 ? ewiQuestions.reduce((sum, q) => sum + q.rating, 0) / ewiQuestions.length : 0;
//     const pwiScore = pwiQuestions.length > 0 ? pwiQuestions.reduce((sum, q) => sum + q.rating, 0) / pwiQuestions.length : 0;

//     const csepScore = (cwiScore + swiScore + ewiScore + pwiScore) / 4;

//     setScoreDetails({
//       cwi: cwiScore.toFixed(2),
//       swi: swiScore.toFixed(2),
//       ewi: ewiScore.toFixed(2),
//       pwi: pwiScore.toFixed(2),
//     });

//     const chartData = {
//       labels: ['CWI', 'SWI', 'EWI', 'PWI'],
//       datasets: [
//         {
//           label: 'Điểm số',
//           data: [cwiScore, swiScore, ewiScore, pwiScore],
//           backgroundColor: ['#FFC107', '#29B6F6', '#3F51B5', '#03A9F4'],
//         },
//       ],
//     };

//     setChartData(chartData);
//   };

//   const handleSubmit = async () => {
//     if (questions.some((q) => q.rating === 0)) {
//       setError("Vui lòng đánh giá tất cả các câu hỏi!");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       calculateScores();
//       alert("Đánh giá đã được gửi thành công!");
//     } catch (err) {
//       setError("Có lỗi xảy ra khi gửi khảo sát: " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       title: {
//         display: false,
//       },
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             const label = tooltipItem.dataset.label || '';
//             const value = tooltipItem.raw.toFixed(2); // Lấy giá trị với 2 chữ số thập phân
//             return `${label}: ${value}`;
//           },
//         },
//       },
//     },
//     scales: {
//       y: {
//         min: 0,
//         max: 5,
//       },
//     },
//   };

//   return (
//     <div className="w-full h-200 text-5xl text-center gap-10 ">
//       <h1>{testName}</h1>
//       {questions.map((question) => (
//         <div  key={question.questionId}>
//           <h3>{question.questionText} ({question.qtype})</h3>
//           <div style={{ display: "flex", gap: "20px",justifyContent:"center" }}>
//             {Array.from({ length: 5 }, (_, i) => (
//               <button 
//                 key={i + 1}
//                 onClick={() => {
//                   const updatedQuestions = questions.map((q) =>
//                     q.questionId === question.questionId
//                       ? { ...q, rating: i + 1 }
//                       : q
//                   );
//                   setQuestions(updatedQuestions);
//                 }}
//                 style={{
//                   padding: "10px", gap: "10px",
//                   backgroundColor: question.rating === i + 1 ? "blue" : "lightgray",
//                   color: question.rating === i + 1 ? "white" : "black",
//                 }}
//               >
//                 {i + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       ))}
// <div style={{
//   marginTop:'20px'
// }}>
// <button onClick={handleSubmit} disabled={loading} className="border bg-sky-300 w-100">
//         {loading ? "Đang gửi..." : "Gửi đánh giá"}
//       </button>
// </div>


//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {chartData && (
//         <div>
//           <Bar options={chartOptions} data={chartData} />
//           <div className="score-details">
//             <p>Sức khỏe nhận thức (CWI): {scoreDetails.cwi}</p>
//             <p>Sức khỏe xã hội (SWI): {scoreDetails.swi}</p>
//             <p>Sức khỏe cảm xúc (EWI): {scoreDetails.ewi}</p>
//             <p>Sức khỏe thể chất (PWI): {scoreDetails.pwi}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TestProgramcp;
