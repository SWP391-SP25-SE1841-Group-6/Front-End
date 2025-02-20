// src/components/Dashboard.jsx


const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user ? user.email : 'Guest'}!</p>
        </div>
    );
};

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user ? user.email : 'Guest'}!</p>
        </div>
    );
};

export default Dashboard;