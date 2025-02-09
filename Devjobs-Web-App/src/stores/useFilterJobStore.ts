import { create } from "zustand";
import { Job } from "../components/JobList";

interface FilterJobStore {
    allJobs: Job[];
    filteredCards: Job[];
    isFormSubmitted: boolean; 
    setJobs: (jobs: Job[]) => void;
    filterJobs: (titleFilter: string, locationFilter: string, fullTimeOnlyFilter: boolean) => void;
    setIsFormSubmitted: (isFormSubmitted: boolean) => void;
};

export const useFilterJobStore = create<FilterJobStore>((set) => ({
    allJobs: [],
    filteredCards: [],
    isFormSubmitted: false, 
    setJobs: (jobs) => set(() => ({
        allJobs: jobs,
        filteredCards: jobs,
    })),
    filterJobs: (titleFilter, locationFilter, fullTimeOnlyFilter) => set((state) => ({
        filteredCards: state.allJobs.filter((job) =>  {
            const matchesTitle = titleFilter ? job.position.toLowerCase().includes(titleFilter.toLowerCase()) : true;
            const matchesLocation = locationFilter ? job.location.toLowerCase().includes(locationFilter.toLowerCase()) : true;
            const matchesContract = fullTimeOnlyFilter ? job.contract === "Full Time" : true;

            return matchesTitle && matchesLocation && matchesContract; 
        })
    })),
    setIsFormSubmitted: (isFormSubmitted) => set(() => ({ isFormSubmitted }))
}));