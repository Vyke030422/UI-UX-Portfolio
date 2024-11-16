import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from '../import_bundles/_Bundles.jsx';

export function RootRouter() {
    return (
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}