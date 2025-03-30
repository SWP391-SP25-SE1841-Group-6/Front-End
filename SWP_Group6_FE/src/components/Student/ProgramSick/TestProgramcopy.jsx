import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TestProgramcp = () => {
  const navigate = useNavigate();
  const [activeTestId, setActiveTestId] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [testName, setTestName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  {/*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionData = await fetchQuestions();
        const questionTypeData = await fetchQuestionTypes();
        
        // Combine questions with their types
        const combinedData = questionData.map((question) => {
          const qtype = questionTypeData.find(type => type.qtypeId === question.qtypeId);
          return {
            questionId: question.questionId,
            qtypeId: question.qtypeId,
            questionText: question.question1,
            qtype: qtype ? qtype.qtype : "",
            rating: 0
          };
        });

        setQuestions(combinedData);
        setTestName(`Bài test tâm lý học đường - ${new Date().toLocaleDateString()}`);
        setLoading(false);
      } catch (err) {
        console.error("Lỗi khi tải dữ liệu:", err.message);
        setError("Không thể tải câu hỏi. Vui lòng thử lại sau.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  const fetchQuestions = async () => {
    const response = await instance.get("/api/Question");
    return response.data.data;
  };

  const fetchQuestionTypes = async () => {
    const response = await instance.get("/api/QuestionType");
    return response.data.data;
  };*/}
  
  const fetchTestQuestions = async (testId) => {
    try {
      const response = await axios.get(`http://localhost:5121/api/Test/id?id=${testId}`);
      console.log('Raw API response:', response.data);
      
      // Extract listQuestions from the response data
      const listQuestions = response.data.data?.listQuestions || [];
      console.log('Extracted questions array:', listQuestions);
      
      // Add ratings to each question in the array and sort by questionId
      const questionsWithRatings = listQuestions
        .map(q => ({
          ...q,
          rating: 0
        }))
        .sort((a, b) => a.testQuestionId - b.testQuestionId); // Sort by questionId
      
      console.log('Questions with ratings (sorted):', questionsWithRatings);
      return questionsWithRatings;
    } catch (error) {
      console.error("Error fetching test questions:", error);
      return [];
    }
  };

  const fetchTest = async () => {
    try {
      const response = await axios.get("http://localhost:5121/api/Test");
      console.log('Test data received:', response.data.data);
      
      if (response.data.data && response.data.data.length > 0) {
        const latestTest = response.data.data[0]; // Get the first test
        console.log('Latest test:', latestTest);
        
        setActiveTestId(latestTest.testId);
        console.log('Setting active test ID to:', latestTest.testId);
      
        // Fetch questions for this test
        const testQuestions = await fetchTestQuestions(latestTest.testId);
        console.log('Processed questions:', testQuestions);
        
        if (testQuestions.length > 0) {
          setQuestions(testQuestions);
          setTestName(latestTest.testName || `Bài test tâm lý học đường - ${new Date().toLocaleDateString()}`);
        } else {
          setQuestions([]);
          setError("Không tìm thấy câu hỏi nào cho bài test này.");
        }
        
        setLoading(false);
      } else {
        throw new Error("No tests found");
      }
    } catch (error) {
      console.error("Error fetching test:", error);
      setError("Không thể tải thông tin bài test. Vui lòng thử lại.");
      setLoading(false);
    }
  };
  
  const handleRatingClick = (testQuestionId, rating) => {
    const updatedQuestions = questions.map(q => 
      q.testQuestionId === testQuestionId ? { ...q, rating } : q
    );
    setQuestions(updatedQuestions);
    console.log(`Rating updated for testQuestionId ${testQuestionId}: ${rating}`);
  };

  const handleSubmit = async () => {
    if (questions.some(q => q.rating === 0)) {
      setError("Vui lòng đánh giá tất cả các câu hỏi!");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      console.log("Starting test submission process...");
      console.log("Active Test ID:", activeTestId);
      console.log("Raw questions data:", questions);

      // Validate testId
      if (!activeTestId || activeTestId <= 0) {
        throw new Error("Invalid Test ID");
      }

      // Get token from localStorage
      const token = localStorage.getItem('token');
      console.log("Token from localStorage:", token);
      if (!token) {
        throw new Error("No authentication token found");
      }

      // Validate and transform questions with null checks
      const validQuestions = questions.filter(q => {
        if (!q) return false;
        if (!q.testQuestionId) {
          console.warn("Question missing testQuestionId:", q);
          return false;
        }
        if (!q.rating || q.rating <= 0) {
          console.warn("Question missing valid rating:", q);
          return false;
        }
        return true;
      });

      console.log("Valid questions after null check:", validQuestions);

      if (validQuestions.length === 0) {
        throw new Error("No valid questions to submit");
      }

      if (validQuestions.length !== questions.length) {
        console.warn("Some questions were filtered out due to invalid data");
      }

      // Create array of answers with strict type checking
      const answers = validQuestions.map(question => {
        const testQuestionId = parseInt(question.testQuestionId);
        const answer = parseInt(question.rating);

        if (isNaN(testQuestionId) || isNaN(answer)) {
          console.error("Invalid numeric conversion:", { question, testQuestionId, answer });
          throw new Error("Invalid numeric data in questions");
        }

        return {
          testQuestionId,
          answer
        };
      });

      console.log("Final answers array:", answers);

      // Create and validate request body
      const requestBody = {
        testId: parseInt(activeTestId),
        answers: answers
      };

      // Final validation of request body
      if (!requestBody.testId || isNaN(requestBody.testId)) {
        throw new Error("Invalid testId in request body");
      }

      if (!Array.isArray(requestBody.answers) || requestBody.answers.length === 0) {
        throw new Error("Invalid answers array in request body");
      }

      // Validate each answer object
      requestBody.answers.forEach((answer, index) => {
        if (!answer.testQuestionId || !answer.answer) {
          throw new Error(`Invalid answer object at index ${index}`);
        }
      });
      
      console.log("Final validated request body:", JSON.stringify(requestBody, null, 2));
      console.log("Request headers:", {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });

      // Make API call
      const response = await axios.post(
        "http://localhost:5121/api/TestResult", 
        requestBody,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log("TestResult API Response:", {
        status: response.status,
        data: response.data
      });

      alert("Bài test đã được lưu thành công!");
      
      // Reset form and navigate
      setQuestions(questions.map(q => ({ ...q, rating: 0 })));
      setTestName(`Bài test tâm lý học đường - ${new Date().toLocaleDateString()}`);
      
      // Navigate to the test history page
      navigate('/studenthome/test-history');
      
    } catch (err) {
      console.error("Error during TestResult submission:", {
        message: err.message,
        status: err.response?.status,
        statusText: err.response?.statusText,
        data: err.response?.data,
        headers: err.response?.headers,
        requestBody: err.config?.data
      });

      if (err.response?.status === 401) {
        setError("Lỗi xác thực. Vui lòng đăng nhập lại.");
      } else if (err.message.includes("Invalid")) {
        setError(err.message);
      } else {
        setError(
          err.response?.data?.message || 
          err.message || 
          "Có lỗi xảy ra khi lưu bài test. Vui lòng thử lại."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    //fetchData();
    fetchTest();
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('role'));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error && !questions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <p className="text-xl font-semibold">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">{testName}</h1>
      
      {questions.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Không có câu hỏi nào cho bài test này.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {questions.map((question) => (
            <div 
              key={question.testQuestionId}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {question.questionText || question.question1}
                <span className="ml-2 text-sm text-gray-500">
                  ({question.qtype || 'No Type'})
                </span>
              </h3>
              
              <div className="flex gap-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handleRatingClick(question.testQuestionId, i + 1)}
                    className={`
                      w-12 h-12 rounded-full font-semibold
                      transition-all duration-200
                      ${question.rating === i + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }
                    `}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`
            px-6 py-3 rounded-md text-white font-semibold
            ${loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 transition-colors'
            }
          `}
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Đang gửi...
            </span>
          ) : (
            'Gửi đánh giá'
          )}
        </button>
      </div>
    </div>
  );
};

export default TestProgramcp;