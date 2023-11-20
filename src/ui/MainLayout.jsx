import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function MainLayout() {
    return (
        <div className="min-h-[100dvh] bg-[#fafafa] p-2 md:p-0">
            <Navbar />
            <Outlet />
        </div>
    );
}
