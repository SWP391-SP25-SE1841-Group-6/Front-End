import { AppBar, Box, Button, Toolbar, Typography, Avatar, Menu, MenuItem } from "@mui/material";
import { Outlet, Link, useNavigate } from "react-router-dom";
// Relative path appropriate for Vite
import { useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import logo from '../../assets/images/logofinal.png';
export default function Hg() {
  const { isAuthenticated, logout } = useAuth(); // Get state and logout function
  const navigate = useNavigate();

  // State for dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout(); // Call logout function from AuthContext
    setAnchorEl(null); // Close menu when logging out
    navigate("/"); // Navigate to login page after logout
  };

  const handleNavigate = (path) => {
    navigate(path);
    setAnchorEl(null); // Close menu after navigation
  };

  return (
    <div>
      <AppBar
        component="nav"
        position="static"
        style={{
          height: 80, // Reduced from 90
          padding: 16, // Reduced from 20
          margin: 1,
          backgroundColor: "#006699",
        }}
      >
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}> {/* Changed from h3 */}
            <img 
              src={logo} 
              alt="School Psychology Logo" 
              className="w-22 h-22 object-contain rounded-full " // Reduced from w-26 h-26
            />
          </Typography>

          <Box>
            <div className="flex justify-between pr-90 gap-6"> {/* Reduced gap from 8 */}         
              <Button
                component={Link}
                to="/home"
                sx={{ color: "#fff" }}
                style={{ fontSize: 18 }} // Reduced from 25
              >
                Home
              </Button>

              <Button
                component={Link}
                to="/studenthome/tailieu"
                sx={{ color: "#fff" }}
                style={{ fontSize: 18 }} // Reduced from 25
              >
                Resources & Mental Health
              </Button>
           
              {isAuthenticated ? (
                <div>
                  <Avatar
                    alt="User Avatar"
                    src="https://via.placeholder.com/32" // Reduced from 40
                    onClick={handleAvatarClick}
                    sx={{ 
                      cursor: "pointer", 
                      bgcolor: "grey",
                      width: 32, // Added explicit size
                      height: 32 // Added explicit size
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
                      style: {
                        fontSize: '14px' // Added smaller font size for menu items
                      }
                    }}
                  >
                    <MenuItem onClick={() => handleNavigate("/profile")} style={{ fontSize: '14px' }}>Profile</MenuItem>
                    <MenuItem onClick={() => handleNavigate("/timetable")} style={{ fontSize: '14px' }}>Schedule</MenuItem>
                    <MenuItem onClick={() => handleNavigate("/program")} style={{ fontSize: '14px' }}>Program</MenuItem>
                    <MenuItem onClick={handleLogout} style={{ fontSize: '14px' }}>Logout</MenuItem>
                  </Menu>
                </div>
              ) : (
                <Button
                  component={Link}
                  to="/login"
                  sx={{ color: "#fff" }}
                  style={{ fontSize: 18 }} // Reduced from 25
                >
                  Login
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