import { Job } from "../components/JobList"

export async function getListJobs(): Promise<Job[]> {
    const data = await fetch("./data.json")
    const dataJson: Job[] = await data.json()

    return dataJson;
}