import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../PublicComponents/Components/HomePage';

const PublicRoutes =(props) => {
    return(
        <div>
            <Routes>
            {/* Public Routes */}
        
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        
        </div>
    )
}

export default PublicRoutes;