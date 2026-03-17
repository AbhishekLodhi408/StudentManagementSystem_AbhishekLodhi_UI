import { useNavigate } from 'react-router-dom';
//import './Master.css';



export default function Master() {
    const navigate = useNavigate();

    const handleStudents = () => navigate('/students');
    const handleClasses = () => navigate('/classes');
    const handleLogout = () => {
        localStorage.removeItem('auth');
        navigate('/login');
    };

    return (
        <div>
            <h1>Master</h1>
            <button onClick={handleStudents}>Students</button>
            <button onClick={handleClasses}>Classes</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}