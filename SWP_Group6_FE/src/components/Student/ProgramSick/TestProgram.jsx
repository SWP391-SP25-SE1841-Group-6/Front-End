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
  const [results, setResults] = useState(null); // State lưu trữ kết quả

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

    // Tạo kết quả và lưu vào state
    setResults({
      CWI: cwiScore,
      SWI: swiScore,
      EWI: ewiScore,
      PWI: pwiScore,
      CSEP: csepScore
    });
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
      // Tính toán điểm số và tạo biểu đồ sau khi nhấn gửi
      calculateScores();
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
    <div className="w-full h-200 text-4xl gap-10 text-center ">
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
                  padding: "20px",
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

      <button onClick={handleSubmit} disabled={loading} className="text-2xl border mt-10">
        {loading ? "Đang gửi..." : "Gửi đánh giá"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Hiển thị biểu đồ */}
      {/* {chartData && (
        <div>
          <Bar options={chartOptions} data={chartData} />
        </div>
      )} */}

      {/* Hiển thị kết quả */}
      {results && (
        <div >
          <h3>Kết quả đánh giá:</h3>
          <div className="flex justify-center gap-20">
          <p >CWI: {results.CWI.toFixed(2)}</p>
          <p>SWI: {results.SWI.toFixed(2)}</p>
          <p>EWI: {results.EWI.toFixed(2)}</p>
          <p>PWI: {results.PWI.toFixed(2)}</p>
          <p>CSEP: {results.CSEP.toFixed(2)}</p>
          </div>
     
        </div>
      )}
    </div>
  );
};

export default TestProgramcp;
