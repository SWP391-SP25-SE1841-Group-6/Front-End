import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Box,
  CircularProgress
} from "@mui/material";
import instance from "../../config/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faClock, faPhone } from "@fortawesome/free-solid-svg-icons";

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="transition-opacity duration-300"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} className="bg-white rounded-lg">
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

const QUESTIONS = [
  "Bạn có thường xuyên lo lắng quá mức không?",
  "Bạn có cảm thấy buồn bã hoặc mất hứng thú với các hoạt động hàng ngày không?",
  "Bạn có cảm thấy khó tập trung hoặc dễ bị phân tâm không?",
  "Bạn có thường xuyên cảm thấy mệt mỏi hoặc không có năng lượng không?",
  "Bạn có gặp khó khăn trong giấc ngủ (khó ngủ hoặc ngủ quá nhiều) không?",
  "Bạn có cảm thấy áp lực từ công việc hoặc học tập quá lớn không?",
  "Bạn có cảm thấy bị cô lập hoặc xa cách với mọi người không?",
  "Bạn có suy nghĩ tiêu cực về bản thân hoặc cảm thấy vô dụng không?",
];

const EMOJIS = [
  { value: 1, label: "Quá tệ", icon: "😞" },
  { value: 2, label: "Không ổn lắm", icon: "🙁" },
  { value: 3, label: "Bình thường", icon: "😐" },
  { value: 4, label: "Ổn", icon: "🙂" },
  { value: 5, label: "Tuyệt vời", icon: "😍" },
];

const TestProgram = () => {
  const [ratings, setRatings] = useState(Array(QUESTIONS.length).fill(0));
  const [result, setResult] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRating = (index, value) => {
    setRatings(prev => {
      const newRatings = [...prev];
      newRatings[index] = value;
      return newRatings;
    });

    if (tabValue < QUESTIONS.length - 1) {
      setTimeout(() => setTabValue(tabValue + 1), 300);
    }
  };

  const submitAnswers = async () => {
    setLoading(true);
    setError("");
    try {
      // Tạo một mảng chứa tất cả câu trả lời
      const answers = QUESTIONS.map((question, i) => {
        const emoji = EMOJIS.find(e => e.value === ratings[i]);
        if (!emoji) {
          throw new Error("Vui lòng đánh giá tất cả các câu hỏi");
        }
        return {
          qtypeId: 0,
          question: `${question} - Đánh giá: ${emoji.label} (${emoji.icon})`
        };
      });
  
      // Kiểm tra xem có câu trả lời nào bị null không
      if (answers.some(answer => !answer.question)) {
        throw new Error("Vui lòng điền đầy đủ tất cả các câu hỏi");
      }
  
      // Gửi từng câu hỏi một và đợi hoàn thành trước khi gửi câu tiếp theo
      for (const answer of answers) {
        await instance.post('/Question', answer);
        console.log('Sent answer:', answer);
      }
  
      setResult("Khảo sát đã được gửi thành công!");
    } catch (err) {
      console.error('Error:', err);
      if (err.response?.data?.message) {
        // Xử lý lỗi từ server
        setError(err.response.data.message);
      } else if (err.message.includes("duplicate")) {
        // Xử lý lỗi trùng lặp
        setError("Câu trả lời đã tồn tại trong hệ thống");
      } else {
        // Xử lý các lỗi khác
        setError(err.message || "Có lỗi xảy ra khi gửi khảo sát. Vui lòng thử lại!");
      }
    } finally {
      setLoading(false);
    }
  };
  
  // Sửa lại hàm handleSubmit
  const handleSubmit = async () => {
    // Kiểm tra xem đã đánh giá hết các câu hỏi chưa
    if (ratings.includes(0)) {
      setError("Vui lòng đánh giá tất cả các câu hỏi!");
      return;
    }
  
    try {
      // Tính điểm và hiển thị kết quả
      const totalScore = ratings.reduce((acc, score) => acc + score, 0);
      let resultMessage = "";
  
      if (totalScore < 16) {
        resultMessage = "Bạn có tâm lý ổn định.";
      } else if (totalScore <= 24) {
        resultMessage = "Bạn có dấu hiệu lo âu nhẹ.";
      } else {
        resultMessage = "Bạn có dấu hiệu tâm lý cần quan tâm.";
      }
  
      setResult(resultMessage);
      
      // Gửi câu trả lời
      await submitAnswers();
    } catch (error) {
      console.error('Submit error:', error);
      setError(error.message);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Typography variant="h4" align="center" className="font-bold text-gray-800 mb-6">
        TUẦN NÀY VỚI EM THẾ NÀO?
      </Typography>

      <div className=" grid grid-cols-5 gap-4 mb-6  p-6 rounded-xl shadow-md">
        {EMOJIS.map((emoji) => (
          <div
            key={emoji.value}
            className=" flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-white/30 transition-all duration-300"
          >
            <span className="text-6xl cursor-pointer transform hover:scale-110 transition-transform">
              {emoji.icon}
            </span>
            <span className="text-3xl font-medium text-gray-700">{emoji.label}</span>
          </div>
        ))}
      </div>

      <Card className="max-w-6xl mx-auto h-150 bg-white shadow-xl rounded-xl overflow-hidden">
        <CardContent className="p-6">
          <Tabs
            value={tabValue}
            onChange={(_, newValue) => setTabValue(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="câu hỏi tâm lý"
            className="mb-6"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#3B82F6',
              },
            }}
          >
            {QUESTIONS.map((_, index) => (
              <Tab
                key={index}
                label={`Câu ${index + 1}`}
                className={`text-6xl font-medium ${
                  ratings[index] > 0 ? 'text-blue-600 text-6xl' : ''
                }`}
              />
            ))}
          </Tabs>

          {QUESTIONS.map((question, index) => (
            <TabPanel key={index} value={tabValue} index={index}>
              <Typography className="text-xl h-20 font-medium text-gray-700 mb-6">
                {index + 1}. {question}
              </Typography>
              <div className="flex justify-center gap-6 mt-4 text-2xl">
                {EMOJIS.map((emoji) => (
                  <button
                    key={emoji.value}
                    onClick={() => handleRating(index, emoji.value)}
                    className={`p-4 rounded-xl transition-all transform hover:scale-110 ${
                      ratings[index] === emoji.value
                        ? 'bg-blue-500 text-white shadow-lg scale-105'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-8xl block mb-2">{emoji.icon}</span>
                    <p className="text-2xl font-medium ">{emoji.label}</p>
                  </button>
                ))}
              </div>
            </TabPanel>
          ))}
        </CardContent>
      </Card>

      {result && (
        <div className="mt-6 p-4 bg-blue-100 border border-blue-200 text-blue-900 font-semibold rounded-xl text-center animate-fade-in">
          {result}
        </div>
      )}
      
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 font-semibold rounded-xl text-center animate-fade-in">
          {error}
        </div>
      )}

      <div className="  flex justify-between mt-6 max-w-3xl mx-auto gap-4">
        <Button
          variant="contained"
          component={Link}
          to="/studenthome"
          className="w-1/3 bg-gray-500 hover:bg-gray-600 !text-3xl "
        >
          Quay lại
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
          className="w-1/3 bg-blue-600 hover:bg-blue-700 !text-3xl"
        >
          {loading ? (
            <div className="flex items-center " >
              <CircularProgress size={20} color="inherit" className="mr-2 text-3xl" />
              Đang gửi...
            </div>
          ) : (
            "Xác nhận "
          )}
        </Button>
        <Button
         component={Link}
          to="/studenthome/khaosat"
          variant="contained"
          className="w-1/3 bg-gray-400 hover:bg-gray-500 !text-2xl !text-center"
        >
          Không muốn trả lời
        </Button>
      </div>

      <div className="mt-6 text-center">
    <div className="flex mt-5 justify-center gap-10 text-xl text-blue-950 font-bold cursor-pointer underline">
             <Link to="/studenthome/khaosat" className="!text-blue-900" >
                 <FontAwesomeIcon icon={faClock} className="!text-blue-900"/>  Bỏ qua khảo sát
               </Link>
               <Link to="/studenthome/hengap" className="!text-blue-900" >
               <FontAwesomeIcon icon={faCircleXmark}  className="!text-blue-900"/> Hẹn gặp
               </Link>
               
               <Link to="/studenthome/khancap" className="!text-blue-900" >
               <FontAwesomeIcon icon={faPhone}  className="!text-blue-900"/> Khần cấp
               </Link>
          
   
             </div>
      </div>
    </div>
  );
};

export default TestProgram;
