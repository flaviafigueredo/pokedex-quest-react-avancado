import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./home"
import { Details } from "./details"

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/details/:id" element={<Details />} />
        </Routes>        
    </BrowserRouter>
)