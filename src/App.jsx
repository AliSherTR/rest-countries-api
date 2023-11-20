import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./ui/MainLayout";
import Home from "./pages/Home";
import { CountryProvider } from "./context/countryContext";

export default function App() {
    return (
        <CountryProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/country/:id" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CountryProvider>
    );
}
