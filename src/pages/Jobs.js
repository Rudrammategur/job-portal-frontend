import { useEffect, useState } from "react";
import { getJobs } from "../api/api";
import JobCard from "../components/JobCard";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(({ data }) => setJobs(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Job Listings</h2>
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
}
