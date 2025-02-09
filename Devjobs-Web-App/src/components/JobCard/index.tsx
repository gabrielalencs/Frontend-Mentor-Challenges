import React from "react";


import { Job } from "../JobList";
import { Link } from "react-router";

interface JobCardProps {
    jobData: Job;
}

const JobCard: React.FC<JobCardProps> = ({ jobData }) => {
    return (
        <div className="bg-white rounded-lg p-8 pt-0 duration-300 dark:bg-[#19202D]">
            <div
                className="h-12 w-12 rounded-2xl flex justify-center items-center relative bottom-6"
                style={{ backgroundColor: jobData.logoBackground }}
            >
                <img src={jobData.logo} alt={`Logo ${jobData.company}`} />
            </div>

            <div className="flex items-center gap-3">
                <span className="text-[#6e8098]">{jobData.postedAt}</span>
                <span className="inline-block h-1 w-1 rounded-full bg-[#6e8098] relative top-1"></span>
                <span className="text-[#6e8098]">{jobData.contract}</span>
            </div>

            <Link
                to={`/jobinfo/${jobData.company.toLowerCase()}`}
                state={{ jobInfo: jobData }}
                className="mt-3 text-xl block font-bold cursor-pointer duration-300 hover:text-[#6e8098] dark:text-white dark:hover:text-[#91a5be]"
            >
                {jobData.position}
            </Link>
            <span className="text-[#6e8098] block mt-3">{jobData.company}</span>

            <span className="block mt-10 text-[#5964e0] font-bold text-sm">{jobData.location}</span>
        </div>
    )
};

export default JobCard