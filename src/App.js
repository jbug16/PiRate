import './styles/App.css';

// Components
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Citations from "./pages/Citations";
import Customers from "./pages/People";
import Appeals from "./pages/Appeals";
import ScanMode from "./pages/ScanMode";
import Settings from "./pages/Settings";

function App() {
    const location = useLocation();
    
    // Determine current page for navbar highlighting
    const getCurrentPage = () => {
        const path = location.pathname;
        if (path === '/') return 'home';
        if (path === '/people') return 'people';
        if (path === '/citations') return 'citations';
        if (path === '/appeals') return 'appeals';
        if (path === '/settings') return 'settings';
        if (path === '/scanmode') return 'scanmode';
        return 'home';
    };

    return (
        <div>
            <Navbar currentPage={getCurrentPage()} />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/citations" element={<Citations />} />
                <Route path="/people" element={<Customers />} />
                <Route path="/appeals" element={<Appeals />} />
                <Route path="/scanmode" element={<ScanMode />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    );
}

export default App;