import { toast } from 'react-toastify';

export const handleLogout = (navigate) => {
  try {
    // Clear all localStorage data
    localStorage.clear();

    // Show success toast
    toast.info('Logged out successfully', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Navigate to login page
    navigate('/login');

  } catch (error) {
    console.error('Logout error:', error);
    
    toast.error('Error during logout. Please try again.', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};