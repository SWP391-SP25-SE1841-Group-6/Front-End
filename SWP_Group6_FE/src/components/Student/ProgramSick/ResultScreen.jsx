import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import axios from 'axios';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ResultScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [testResults, setTestResults] = useState(null);

  useEffect(() => {
    fetchTestResults();
    createChartData();
  }, []);

  const fetchTestResults = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5121/api/TestResult', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      const testResultsArray = response.data.data || [];
      
      if (testResultsArray.length === 0) {
        setError('Không tìm thấy kết quả bài test nào.');
        setLoading(false);
        return;
      }

      const latestResult = testResultsArray.reduce((latest, current) => {
        return (current.testResultId > latest.testResultId) ? current : latest;
      }, testResultsArray[0]);

      console.log('Latest result:', latestResult);
      
      // Log the detailed structure of resTestResultDetailDTO
      if (latestResult?.resTestResultDetailDTO) {
        console.log('ResTestResultDetailDTO structure:', {
          fullObject: latestResult.resTestResultDetailDTO,
          properties: Object.keys(latestResult.resTestResultDetailDTO)
        });
        
        // Map and log all qtype properties
        const qtypeArray = latestResult.resTestResultDetailDTO;
        console.log('Qtype Array:', qtypeArray);
        
        if (Array.isArray(qtypeArray)) {
          const qtypeMapping = qtypeArray.map(item => ({
            qtype: item.qtype,
            scoreType: item.scoreType
          }));
          console.log('Mapped Qtype Data:', qtypeMapping);
        }
      }

      setTestResults(latestResult);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching test results:', err);
      setError('Không thể tải kết quả bài test. Vui lòng thử lại sau.');
      setLoading(false);
    }
  };

  const createChartData = () => {
    console.log('Creating chart data with testResults:', testResults);

    if (!testResults?.resTestResultDetailDTO) {
      console.log('No test results or qtype data available');
      return {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 1
        }]
      };
    }

    // Get qtype array and log its structure
    const qtypeData = testResults.resTestResultDetailDTO;
    console.log('Raw qtype data structure:', {
      data: qtypeData,
      isArray: Array.isArray(qtypeData),
      type: typeof qtypeData,
      keys: Object.keys(qtypeData)
    });

    // Map all properties to see the structure
    const mappedData = Array.isArray(qtypeData) 
      ? qtypeData.map(item => ({
          qtype: item.qtype,
          scoreType: item.scoreType
        }))
      : [];

    console.log('Mapped qtype data:', mappedData);

    // Extract labels and scores
    const labels = mappedData.map(item => item.qtype);
    const scores = mappedData.map(item => item.scoreType);

    console.log('Chart Data Details:', {
      labels: labels,
      scores: scores,
      numberOfBars: labels.length,
      qtypeValues: mappedData
    });

    // Use the same red color for all bars
    const colors = Array(labels.length).fill('rgba(255, 99, 132, 0.7)');
    const borderColors = Array(labels.length).fill('rgba(255, 99, 132, 1)');

    const chartData = {
      labels,
      datasets: [{
        label: 'Điểm số theo loại',
        data: scores,
        backgroundColor: colors,
        borderColor: borderColors,
        borderWidth: 2,
        borderRadius: 5
      }]
    };

    console.log('Final chart data structure:', chartData);
    return chartData;
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Kết quả đánh giá theo loại câu hỏi',
        font: {
          size: 16,
          weight: 'bold'
        },
        padding: 20
      },
      tooltip: {
        callbacks: {
          label: (context) => `Điểm số: ${context.raw.toFixed(1)}`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        ticks: {
          stepSize: 1,
          font: {
            size: 12
          }
        },
        title: {
          display: true,
          text: 'Điểm số',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: 12
          }
        },
        title: {
          display: true,
          text: 'Loại câu hỏi',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
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

  const chartData = createChartData();

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Kết quả đánh giá tâm lý học đường
          </h1>
        </div>

        {/* Overall Score Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Điểm số tổng quát
            </h2>
            <div className="text-5xl font-bold text-red-500 mb-2">
              {testResults?.score?.toFixed(1) || "0.0"}
            </div>
            <p className="text-gray-600">trên thang điểm 5.0</p>
          </div>
        </div>

        {/* Chart Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="h-[400px] w-full">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Recommendations Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Nhận xét và đề xuất
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 text-lg">
                Dựa trên kết quả đánh giá, bạn có xu hướng tích cực trong các khía cạnh tâm lý và giao tiếp.
                Tuy nhiên, có một số điểm cần lưu ý:
              </p>
              <ul className="space-y-4 text-gray-700 list-disc list-inside">
                <li className="text-lg">Cần tăng cường khả năng học tập và tập trung</li>
                <li className="text-lg">Phát triển thêm kỹ năng xã hội và làm việc nhóm</li>
                <li className="text-lg">Duy trì sự ổn định trong cảm xúc và tình cảm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

