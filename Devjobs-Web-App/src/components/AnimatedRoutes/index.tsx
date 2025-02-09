import React, { useRef } from "react";
import { Routes, Route, useLocation } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import App from "../../App.tsx";
import JobInfo from "../../page/JobInfo/index.tsx";

const AnimatedRoutes: React.FC = () => {
    const location = useLocation();
    const nodeRef = useRef(null);

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={350}
                nodeRef={nodeRef}
            >
                <div ref={nodeRef}>
                    <Routes location={location}>
                        <Route path="/" element={<App />} />
                        <Route path="jobinfo/:company" element={<JobInfo />} />
                    </Routes>
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default AnimatedRoutes;