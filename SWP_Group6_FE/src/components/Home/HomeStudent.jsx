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

  return (
    <div>
      <div className="header-homepagesyudent">
        <div className="row flex  ">
          <div className="col-6 m-15 flex  w-200 ml-80 justify-between h-10  text-2xl ">
            <Link to="/studenthome" className="text-2xl !text-black !font-bold">Trang chủ</Link>

            <Link to="/studenthome/tailieu"  className="text-2xl !text-black !font-bold">
             Lịch sử
            </Link>

            <Link to="/studenthome/tailieu"  className="text-2xl !text-black !font-bold">
              Tài liệu 
            </Link>

            <Link to="/studenthome/tailieu" className=" border-blue-900 border-4 !text-black w-70 !pl-6 h-12">
             Hướng dẫn sử dụng
            </Link>
          </div>

          <div className="col-6 m-15 flex ml-auto w-100 justify-between h-10  text-2xl ">
            <Avatar
              alt="User Avatar"
              src="https://via.placeholder.com/40"
              onClick={handleAvatarClick}
              sx={{ cursor: "pointer", bgcolor: "grey" }}
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
      </div>

      <Outlet />
    </div>
  );
}
