import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import General from './General';
import Homepage from '../Weather-app/Weather';
import Profile from '../Profile/Profile';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<General />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}