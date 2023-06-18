import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ArchivePage from "../Pages/ArchivePage/ArchivePage";

const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<ArchivePage />} />
    </Routes>
}

export default AllRoutes;