import { Avatar, Menu, MenuItem } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
// Đường dẫn tương đối phù hợp với Vite
import { useState } from "react";
import { useAuth } from "../Auth/AuthContext";


export default function Hg() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
    navigate("/");
  };

  const handleNavigate = (path) => {
    navigate(path);
    setAnchorEl(null);
  };
  console.log("role: " + localStorage.getItem("role"));
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md py-4 px-6 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
            <Link 
              to="/studenthome" 
              className="text-lg font-bold text-black hover:text-blue-600 transition-colors"
            >
              Trang chủ
            </Link>

            <Link 
              to="/studenthome/tailieu" 
              className="text-lg font-bold text-black hover:text-blue-600 transition-colors"
            >
              Lịch sử
            </Link>

            <Link 
              to="/studenthome/tailieu" 
              className="text-lg font-bold text-black hover:text-blue-600 transition-colors"
            >
              Tài liệu
            </Link>

            <Link 
              to="/studenthome/tailieu" 
              className="px-6 py-2 border-2 border-blue-900 text-black font-bold hover:bg-blue-900 hover:text-white transition-all rounded-md"
            >
              Hướng dẫn sử dụng
            </Link>
          </nav>

          {/* User Menu */}
          <div className="relative">
            <Avatar
              alt="User Avatar"
              src="https://via.placeholder.com/40"
              onClick={handleAvatarClick}
              sx={{ 
                cursor: "pointer", 
                bgcolor: "grey",
                '&:hover': {
                  opacity: 0.8
                }
              }}
            />
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                elevation: 3,
                sx: {
                  mt: 1,
                  '& .MuiMenuItem-root': {
                    fontSize: '1rem',
                    padding: '8px 20px',
                  }
                }
              }}
            >
              <MenuItem onClick={() => handleNavigate("/profile")}>
                Hồ Sơ
              </MenuItem>
              <MenuItem onClick={() => handleNavigate("/timetable")}>
                Thời Khóa Biểu
              </MenuItem>
              <MenuItem onClick={() => handleNavigate("/program")}>
                Chương Trình
              </MenuItem>
              <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
            </Menu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mt-20 p-6">
        <Outlet />
      </main>
    </div>
  );
}
