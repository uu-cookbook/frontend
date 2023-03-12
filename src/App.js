import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./sites/Home";
import NotFound from "./sites/NotFound";
import LoginPage from "./sites/Login";
import RegisterPage from "./sites/Register";
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
