import "./Home.css";
import { Link } from "react-router-dom";
import { TodoWrapper } from "../Todo/TodoWrapper";
const Home = () => {
    return (
        <div className="banner">
            <TodoWrapper />
            <div className="main-content">
                <div className="layout">
                </div>
            </div>
        </div>
    );
};

export default Home;