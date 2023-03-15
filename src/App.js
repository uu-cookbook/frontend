import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./sites/Home";
import NotFound from "./sites/NotFound";
import LoginPage from "./sites/Login";
import RegisterPage from "./sites/Register";
import User from "./sites/User";
import AddRecipe from "./sites/AddRecipe";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/account" element={<User />} />
                <Route path="/add" element={<AddRecipe />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
