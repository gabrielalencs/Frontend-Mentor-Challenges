import React, { useEffect, useState } from "react";

import JobCard from "../JobCard";

import { getListJobs } from "../../utils/getListJobs";

import { useFilterJobStore } from "../../stores/useFilterJobStore";


export interface Job {
    id: number;
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements: {
        content: string;
        items: string[];
    };
    role: {
        content: string;
        items: string[];
    };
};

const JobList: React.FC = () => {
    const [listJobs, setListJobs] = useState<Job[]>([]);
    const { filteredCards, isFormSubmitted } = useFilterJobStore();

    useEffect(() => {
        async function resgateJobList() {
            const jobList = await getListJobs();
            setListJobs(jobList);
        };

        resgateJobList();
    }, []);

    return (
        <section className="mt-20 mb-46 grid gap-x-7 gap-y-[70px] md:grid-cols-2 lg:grid-cols-3">
            {(isFormSubmitted ? filteredCards : listJobs).map(job => (
                <JobCard
                    key={job.id}
                    jobData={job}
                />
            ))}

            {filteredCards.length === 0 && (
                <h1 className="text-[#19202D] text-2xl dark:text-white">No results found</h1>
            )}
        </section>
    )
};

export default JobList