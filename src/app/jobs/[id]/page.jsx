import { getJobssingle } from "@/lib/api/jobs";
import Image from "next/image";
import Link from "next/link";

const ApplyPage = async ({ params }) => {
  const { id } = await params;

  const job = await getJobssingle(id);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 mt-20">
      <div className="bg-content1 border border-divider rounded-3xl p-8">
        {/* Company */}
        <div className="flex items-center gap-4 mb-8">
          <Image
            src={job.companyLogo}
            alt={job.companyName}
            width={70}
            height={70}
            className="rounded-xl"
          />

          <div>
            <h3 className="text-lg text-default-500">
              {job.companyName}
            </h3>

            <h1 className="text-4xl font-bold">
              {job.jobTitle}
            </h1>
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="border rounded-xl p-4">
            <p className="text-sm text-default-500">
              Job Type
            </p>
            <p className="font-semibold capitalize">
              {job.jobType}
            </p>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-sm text-default-500">
              Category
            </p>
            <p className="font-semibold capitalize">
              {job.jobCategory}
            </p>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-sm text-default-500">
              Salary
            </p>
            <p className="font-semibold">
              {job.minSalary} - {job.maxSalary} {job.currency}
            </p>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-sm text-default-500">
              Work Mode
            </p>
            <p className="font-semibold">
              {job.isRemote ? "Remote" : "On Site"}
            </p>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-3">
            Responsibilities
          </h2>

          <p className="text-default-600 leading-8">
            {job.responsibilities}
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-3">
            Requirements
          </h2>

          <p className="text-default-600 leading-8">
            {job.requirements}
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-3">
            Benefits
          </h2>

          <p className="text-default-600 leading-8">
            {job.benefits}
          </p>
        </div>

        {/* Deadline */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold">
            Application Deadline
          </h2>

          <p className="text-danger mt-2">
            {job.deadline}
          </p>
        </div>

        {/* Apply Button */}
        <div className="flex gap-4">
          <Link
            href={`/apply/${job._id}`}
            className="bg-primary text-white border px-8 py-3 rounded-xl bg-blue-600 font-medium"
          >
            Apply Now
          </Link>

          <Link
            href="/jobs"
            className="border px-8 py-3 rounded-xl"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;