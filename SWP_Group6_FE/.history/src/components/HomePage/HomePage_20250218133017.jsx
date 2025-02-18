import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { Outlet, Link, useNavigate } from "react-router-dom";
const HomePage =()=> {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GROUP6
          </Typography>
          <Box>
            <Button component={Link} to="/home" sx={{ color: "#fff" }}>
              Trang chủ
            </Button>
            
            <Button component={Link} to="/dashboard" sx={{ color: "#fff" }}
            onClick={() => {
              navigate("dashboard");
            }}>
              Thống kê
            </Button>
            <Button component={Link} to="/contact" sx={{ color: "#fff" }}>
              Liên hệ
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet /> {/* Để hiển thị route con */}
    </div>
  );
};
export default HomePage;