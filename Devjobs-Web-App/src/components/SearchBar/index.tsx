import React, { useEffect, useRef, useState } from "react";

import IconSearchButton from "@images/mobile/icon-search.svg";
import IconSearchInput from "@images/desktop/icon-search.svg";
import IconFilter from "@images/mobile/icon-filter.svg";
import IconLocation from "@images/desktop/icon-location.svg";
import { getListJobs } from "../../utils/getListJobs";
import { useFilterJobStore } from "../../stores/useFilterJobStore";


const SearchBar: React.FC = () => {
    const { filterJobs, setJobs, setIsFormSubmitted } = useFilterJobStore();

    const containerFilter = useRef<HTMLDivElement>(null);
    const buttonFilter = useRef<HTMLButtonElement>(null);

    const [jobTitleFilter, setJobTitleFilter] = useState<string>("");
    const [jobLocationFilter, setJobLocationFilter] = useState<string>("");
    const [fullTimeOnlyFilter, setFullTimeOnlyFilter] = useState<boolean>(false);
    const [isToggleContainerFilter, setIsToggleContainerFilter] = useState<boolean>(false);

    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        filterJobs(jobTitleFilter, jobLocationFilter, fullTimeOnlyFilter);
        setIsFormSubmitted(true);
    };

    const toggleContainerFilter = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsToggleContainerFilter(!isToggleContainerFilter);
    };

    useEffect(() => {
        async function resgateJobList() {
            const jobList = await getListJobs();
            setJobs(jobList);
        };

        resgateJobList();
    }, [setJobs]);


    return (
        <form
            className="bg-white duration-300 py-4 px-5 rounded-lg divide-solid flex items-center justify-between relative bottom-10 lg:p-0 dark:bg-[#19202D]"
            onSubmit={handleSubmit}
        >
            <label className="flex items-center gap-5 lg:flex-1 lg:flex lg:items-center lg:gap-5 lg:p-7 lg:border-1 lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:border-r-gray-200 2xl:flex-[1.5]">
                <img
                    src={IconSearchInput}
                    alt="Icon Search"
                    className="hidden lg:block"
                />
                <input
                    type="text"
                    placeholder="Filter by title..."
                    className="duration-300 focus:outline-0 dark:text-white placeholder-zinc-400"
                    value={jobTitleFilter}
                    onChange={(e) => setJobTitleFilter(e.target.value)}
                />
            </label>

            <label className="hidden lg:flex lg:items-center lg:gap-5 lg:p-7 lg:border-1 lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:border-r-gray-200 lg:flex-1">
                <img
                    src={IconLocation}
                    alt="Icon Search"
                    className="hidden lg:block"
                />
                <input
                    type="text"
                    placeholder="Filter by location..."
                    className="duration-300 focus:outline-0 dark:text-white placeholder-zinc-400"
                    value={jobLocationFilter}
                    onChange={(e) => setJobLocationFilter(e.target.value)}
                />
            </label>

            <div className="hidden lg:flex lg:items-center lg:gap-7 lg:px-7">
                <div className="checkbox-wrapper">
                    <input
                        type="checkbox"
                        id="fullTimeOnlyFilter"
                        className="inp-cbx"
                        checked={fullTimeOnlyFilter}
                        onChange={(e) => setFullTimeOnlyFilter(e.target.checked)}
                    />
                    <label htmlFor="fullTimeOnlyFilter" className="cbx">
                        <span>
                            <svg viewBox="0 0 12 10" height="10px" width="12px">
                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                        </span>
                        <span className="dark:text-white">Full Time</span>
                    </label>
                </div>


                <div>
                    <button
                        type="submit"
                        className="bg-[#5964E0] px-10 py-3 text-white rounded-md font-medium cursor-pointer duration-200 hover:opacity-85"
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-7 lg:hidden">
                <button
                    className="cursor-pointer"
                    onClick={toggleContainerFilter}
                    ref={buttonFilter}
                >
                    <img src={IconFilter} alt="Icon Filter" />
                </button>

                <button
                    type="submit"
                    className="bg-[#5964E0] p-4 rounded-lg cursor-pointer duration-200 hover:opacity-85"
                >
                    <img
                        src={IconSearchButton}
                        alt="Icon Search"
                    />
                </button>
            </div>


            <div
                className={`h-screen w-screen flex items-center justify-center bg-[#00000077] fixed top-0 left-0 duration-200 pl-[5%] pr-[8%] lg:!hidden ${isToggleContainerFilter ? "show" : "hide"}`}
                onClick={() => setIsToggleContainerFilter(false)}
            >
                <div
                    className="bg-white rounded-lg w-full flex flex-col gap-7 duration-300 dark:bg-[#19202d]"
                    ref={containerFilter}
                    onClick={(e) => e.stopPropagation()}
                >

                    <label className="flex items-center gap-5 p-7 border-b-[1px] border-gray-200">
                        <img src={IconLocation} alt="Icon Search" />
                        <input
                            type="text"
                            placeholder="Filter by location..."
                            className="duration-300 focus:outline-0 dark:text-white placeholder-zinc-400"
                            value={jobLocationFilter}
                            onChange={(e) => setJobLocationFilter(e.target.value)}
                        />
                    </label>

                    <div className="px-6 pb-6">
                        <div className="checkbox-wrapper mb-8">
                            <input
                                type="checkbox"
                                id="fullTimeOnlyFilterContainerFilter"
                                className="inp-cbx"
                                checked={fullTimeOnlyFilter}
                                onChange={(e) => setFullTimeOnlyFilter(e.target.checked)}
                                onClick={(e) => e.stopPropagation()}
                            />
                            <label htmlFor="fullTimeOnlyFilterContainerFilter" className="cbx">
                                <span>
                                    <svg viewBox="0 0 12 10" height="10px" width="12px">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg>
                                </span>
                                <span className="dark:text-white">Full Time</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#5964E0] px-10 py-3 text-white w-full rounded-md font-semibold cursor-pointer duration-200 hover:opacity-85"
                            onClick={() => setIsToggleContainerFilter(false)}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
};

export default SearchBar