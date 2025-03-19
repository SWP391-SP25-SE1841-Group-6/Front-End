import { useState, useEffect } from "react";
import instance from "../../config/axios";

const TestProgramcp = () => {
  const [questions, setQuestions] = useState([]);
  const [testName, setTestName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionData = await fetchQuestions();
        const questionTypeData = await fetchQuestionTypes();
        
        // Kết nối câu hỏi với loại câu hỏi
        const combinedData = questionData.map((question) => {
          const qtype = questionTypeData.find(type => type.qtypeId === question.qtypeId);
          return {
            questionId: question.questionId,
            qtypeId: question.qtypeId,
            questionText: question.question1,
            qtype: qtype ? qtype.qtype : "", // Lấy tên loại câu hỏi
            rating: 0 // Mức độ đánh giá ban đầu
          };
        });

        setQuestions(combinedData);
        setTestName(`Bài test tâm lý học đường - ${new Date().toISOString()}`);
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

  const handleSubmit = async () => {
    // Kiểm tra xem tất cả các câu hỏi đã được đánh giá chưa
    if (questions.some(q => q.rating === 0)) {
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
        const newTestId = testResponse.data.id;

        // Gửi đánh giá cho từng câu hỏi
        for (const question of questions) {
            const response = await instance.post("/api/TestQuestion", {
                testId: newTestId,
                questionId: question.questionId,
                rating: question.rating,
            });
            console.log(`Response for questionId ${question.questionId}:`, response.data);
        }

        alert("Đánh giá đã được gửi thành công!");
    } catch (err) {
        setError("Có lỗi xảy ra khi gửi khảo sát: " + err.message);
    } finally {
        setLoading(false);
    }
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
                  const updatedQuestions = questions.map(q => 
                    q.questionId === question.questionId ? { ...q, rating: i + 1 } : q
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
    </div>
  );
};

export default TestProgramcp;