import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">GROUP6 SCHOOL PSYCHOLOGY ADVICE</h1>
        <div className="flex items-center justify-center gap-2 mt-2">
          <h3>
            <Link to="/studenthome" className="text-blue-600 hover:underline">Home</Link>
          </h3>
          <span>|</span>
          <h3 className="underline">Điều trị Tâm lý Học đường</h3>
        </div>
      </div>
      
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://images.unsplash.com/photo-1680970520758-ead877f6a4af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhciUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
          alt="Student Avatar"
          className="w-40 h-40 rounded-2xl mb-4"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-6 m-auto">
        <div className="border p-4 rounded-lg shadow m-auto">
          <h2 className="font-semibold mb-2">Điều trị Tâm lý Học đường</h2>
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              {[
                ["Họ và Tên", "Trần Minh Anh"],
                ["Ngày sinh", "09/02/2008"],
                ["Giới tính", "Nam"],
                ["Tình trạng tâm lý", "Căng thẳng học đường nhẹ"],
                ["Ngày bắt đầu điều trị", "15/01/2025"],
                ["Chuyên gia hỗ trợ", "Dr. Emily Carter"],
                ["Email liên hệ", "anhmt@psychology.edu"],
                ["Trường học", "FPT University"],
              ].map(([label, value], index) => (
                <tr key={index} className="border">
                  <td className="border p-2 font-semibold">{label}</td>
                  <td className="border p-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      
        
        <div className="border p-4 rounded-lg shadow w-[50%]">
          <h2 className="font-semibold">Thông tin khác</h2>
          <p className="text-gray-600 mt-2">Chưa có dữ liệu.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;