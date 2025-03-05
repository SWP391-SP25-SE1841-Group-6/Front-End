

function ProtectedRoute({ children }) {
  //check xem người dùng có đăng nhập chưa hoặc là check xem có đúng role

  const token = localStorage.getItem("token");

  if (!token) return <h1>You do not have permission!!!</h1>;

  return children;
}

export default ProtectedRoute;