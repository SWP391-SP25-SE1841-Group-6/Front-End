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
        setError('No test results found.');
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
      setError('Unable to load test results. Please try again later.');
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
        label: 'Scores by Type',
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

  const getQtypeComment = (qtype, score) => {
    const comments = {
      Depression: {
        low: "You show signs of depression, please talk to your parents/friends ",
        good: "You really enjoy life !"
      },
      Antisocial: {
        low: "Your social interaction skills need development. Try to engage more in group activities.",
        good: "You demonstrate healthy social awareness and interpersonal skills."
      },
      Mental: {
        low: "Your emotional management needs attention. Consider practicing mindfulness and emotional awareness.",
        good: "You show good emotional balance and self-awareness."
      },
      Anxiety: {
        low: "You show signs of anxiety",
        good: "You're carefree "
      }
    };
  
    return comments[qtype]?.[score < 3 ? 'low' : 'good'] || "No specific assessment available.";
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
        text: 'Assessment Results by Question Type',
        font: {
          size: 16,
          weight: 'bold'
        },
        padding: 20
      },
      tooltip: {
        callbacks: {
          label: (context) => `Score: ${context.raw.toFixed(1)}`
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
          text: 'Score',
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
          text: 'Question Type',
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
            Try Again
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
            School Psychology Assessment Results
          </h1>
        </div>

        {/* Overall Score Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Overall Score
            </h2>
            <div className="text-5xl font-bold text-red-500 mb-2">
              {testResults?.score?.toFixed(1) || "0.0"}
            </div>
            <p className="text-gray-600">out of 5.0</p>
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
              Detailed Analysis and Recommendations
            </h2>
            <div className="space-y-6">
              {testResults?.resTestResultDetailDTO?.map((result, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {result.qtype}
                    <span className={result.scoreType < 3 ? 'text-red-500' : 'text-green-600'}>
                      ({result.scoreType.toFixed(1)}/5.0)
                    </span>
                  </h3>
                  <p className={`text-lg ${result.scoreType < 3 ? 'text-red-500' : 'text-gray-700'}`}>
                    {getQtypeComment(result.qtype, result.scoreType)}
                  </p>
                </div>
              ))}
              
              <div className="mt-6 pt-4 border-t">
                <h3 className="text-xl font-semibold mb-4">Overall Recommendations:</h3>
                <ul className="space-y-4 text-gray-700 list-disc list-inside">
                  {testResults?.resTestResultDetailDTO?.some(r => r.scoreType < 3) ? (
                    <li className="text-lg text-red-500">
                      Some areas require immediate attention. Consider consulting with a school counselor.
                    </li>
                  ) : (
                    <li className="text-lg text-green-600">
                      Overall performance is satisfactory. Continue maintaining good practices.
                    </li>
                  )}
                  <li className="text-lg">Regular check-ins with mentors are recommended</li>
                  <li className="text-lg">Participate in school support programs when available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

