import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './pages/Home';
import Todolist from './pages/Todolist';

export default function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/todolist/" Component={Todolist} />
            </Routes>
        </Router>
    )
}