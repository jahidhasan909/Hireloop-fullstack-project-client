"use client";

import { useMemo, useState } from "react";
import JobCard from "@/Components/JobCard/JobCard";
import JobFilterBar from "@/Components/JobCard/JobFillterBar";

export default function JobsContainer({ jobs }) {
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("");
  const [category, setCategory] = useState("");
  const [remote, setRemote] = useState(null);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchSearch =
        !search ||
        job.jobTitle?.toLowerCase().includes(search.toLowerCase()) ||
        job.companyName?.toLowerCase().includes(search.toLowerCase());

      const matchJobType =
        !jobType || job.jobType === jobType;

      const matchCategory =
        !category || job.jobCategory === category;

      const matchRemote =
        remote === null || job.isRemote === remote;

      return (
        matchSearch &&
        matchJobType &&
        matchCategory &&
        matchRemote
      );
    });
  }, [jobs, search, jobType, category, remote]);

  return (
    <>
      <JobFilterBar
        search={search}
        setSearch={setSearch}
        jobType={jobType}
        setJobType={setJobType}
        category={category}
        setCategory={setCategory}
        remote={remote}
        setRemote={setRemote}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-10 mt-6">
        {filteredJobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
          />
        ))}
      </div>
    </>
  );
}