import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@heroui/react";

import {
    MapPin,
    BriefcaseBusiness,
    Calendar,
    Euro,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function JobCard({ job }) {
    return (
        <Card className="bg-[#111111] border  text-white rounded-3xl p-6 hover:border-primary transition-all duration-300">
            <CardHeader className="space-y-4">
                {/* Company */}
                <div className="flex items-center gap-3">
                    <img
                        src={job?.companyLogo}
                        alt={job?.companyName}
                        className="w-10 h-10 rounded-xl object-cover"
                    />

                    <div>
                        <CardDescription className="text-xs">
                            Company
                        </CardDescription>

                        <CardTitle className="text-md">
                            {job?.companyName}
                        </CardTitle>
                    </div>
                </div>

                {/* Job Title */}
                <div>
                    <CardTitle className="text-2xl font-bold truncate">
                        {job?.jobTitle}
                    </CardTitle>

                    <div className="flex  items-center justify-between my-3 px-1 gap-3">
                        <CardDescription className=" text-sm line-clamp-2 truncate">
                            {job?.responsibilities}
                        </CardDescription>
                        {/* Benefits */}
                        <div className="">
                            <p className=" text-zinc-400 text-xs truncate">
                                {job?.benefits}
                            </p>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                        <MapPin size={16} />
                        <span className="text-xs">Location</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                        <BriefcaseBusiness size={16} />
                        <span className="text-xs">{job?.jobType}</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                        <Euro size={16} />
                        <span className="text-xs">
                            {job?.minSalary}-{job?.maxSalary} {job?.currency}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                        <Calendar size={16} />
                        <span className="text-xs">{job?.deadline}</span>
                    </div>
                </div>


            </CardContent>

            <CardFooter className="pt-8">
                <Link href={`/jobs/${job?._id}`} className="flex items-center gap-2 text-lg font-medium hover:translate-x-1 transition-all">
                    Apply Now
                    <ArrowRight size={20} />
                </Link>
            </CardFooter>
        </Card>
    );
}