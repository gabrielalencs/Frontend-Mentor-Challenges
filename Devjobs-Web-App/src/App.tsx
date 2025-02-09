import React from "react";

import "./App.css";

import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";

const App: React.FC  = () => {
    return (
        <>
            <main className="px-[5%] xl:px-[10%] max-w-[1920px] mx-auto">
                <SearchBar />
                <JobList />
            </main>
        </>
    )
}

export default App;