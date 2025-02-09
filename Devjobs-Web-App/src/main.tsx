import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import Header from "./components/Header/index.tsx";
import AnimatedRoutes from "./components/AnimatedRoutes/index.tsx";


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Header />
            <AnimatedRoutes />
        </BrowserRouter>
    </StrictMode>
);