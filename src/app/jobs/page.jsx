
import { getJobs } from "@/lib/api/jobs";
import JobsContainer from "./JobsContainer";

const Jobs = async () => {
    const jobs = await getJobs();

    return (
        <div className="max-w-11/13 mx-auto mt-35">
            <JobsContainer jobs={jobs} />
        </div>
    );
};

export default Jobs;