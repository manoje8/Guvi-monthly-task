import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import Error404 from "./components/pages/Error404";
import Favorite from "./components/pages/Favorite";
import Details from "./components/pages/Details";

const AppRouter = () => (
    <App>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/details/:id" element={<Details />}/>
            <Route path="/favorite" element={<Favorite />}/>
            <Route path="*" element={<Error404 />}/>
        </Routes>
    </App>
)

export default AppRouter