import { AppBar, Box, Button, Toolbar, Typography, Avatar, Menu, MenuItem } from "@mui/material";
import { Outlet, Link, useNavigate } from "react-router-dom";
 // Đường dẫn tương đối phù hợp với Vite
import { useState } from "react";
import { useAuth } from "../Auth/AuthContext";
export default function Hg() {
  const { isAuthenticated, logout } = useAuth(); // Lấy trạng thái và hàm logout
  const navigate = useNavigate();

  // State cho menu dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout(); // Gọi hàm logout từ AuthContext
    setAnchorEl(null); // Đóng menu khi logout
    navigate("/"); // Điều hướng về trang login sau khi đăng xuất
  };

  const handleNavigate = (path) => {
    navigate(path);
    setAnchorEl(null); // Đóng menu sau khi điều hướng
  };

  return (
    <div>
      <AppBar
        component="nav"
        position="static"
        style={{
          height: 90,
          padding: 20,
          margin: 1,
          backgroundColor: "#006699",
        }}
      >
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            <img
              src="https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-modern-vector-logo-of-psychology-letter-psi-in-creative-style-png-image_4850550.png"
              alt="Logo"
              className="w-40 h-40 object-cover p-5 rounded-full"
            />
          </Typography>

          <Box>
            <div className="flex justify-between pr-90 gap-8">         
              {/* <Button
                component={Link}
                to="/home"
                sx={{ color: "#fff" }}
                style={{ fontSize: 25 }}
              >
                Trang chủ
              </Button> */}

              {/* <Button
                component={Link}
                to="/studenthome/tailieu"
                sx={{ color: "#fff" }}
                style={{ fontSize: 25 }}
              >
                Tài liệu & Sức khỏe tâm lí
              </Button> */}
           

             
              {isAuthenticated ? (
                <div>
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
                    <MenuItem onClick={() => handleNavigate("/profile")}>Hồ Sơ</MenuItem>
                    <MenuItem onClick={() => handleNavigate("/timetable")}>Thời Khóa Biểu</MenuItem>
                    <MenuItem onClick={() => handleNavigate("/program")}>Chương Trình</MenuItem>
                    <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                  </Menu>
                </div>
              ) : (
                <Button
                  component={Link}
                  to="/login"
                  sx={{ color: "#fff" }}
                  style={{ fontSize: 25 }}
                >
                  Đăng nhập
                </Button>
              )}
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet /> 
    </div>
  );
}