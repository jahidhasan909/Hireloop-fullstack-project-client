import { getApplicationbyApplicantId } from '@/lib/action/application';
import { getSession } from '@/lib/core/sassion';
import Image from 'next/image';
import React from 'react';

const Applicationpage = async () => {
    const user = await getSession();
    
    // Fetch applications safely
    const rawApplications = await getApplicationbyApplicantId(user.id);
   
    
    const applications = Array.isArray(rawApplications) ? rawApplications : [rawApplications].filter(Boolean);

    // Calculate dynamic dashboard stats
    const totalApplied = applications.length;
    const pendingCount = applications.filter(app => app.status === 'pending').length;
    const approvedCount = applications.filter(app => app.status === 'approved').length;

    return (
        <div className="min-h-screen bg-[#111a22] text-gray-100 p-4 sm:p-8 font-sans selection:bg-cyan-500/30">
            <div className="max-w-7xl mx-auto space-y-10">
                
                {/* Upper Premium Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-800/60 pb-6">
                    <div>
                        <h1 className="text-3xl font-black tracking-tight text-white bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            My Applications
                        </h1>
                        <p className="text-sm text-gray-400 mt-1">
                            Track your sent resumes, interview pipelines, and application status history.
                        </p>
                    </div>
                    <div className="text-xs font-mono bg-gray-800/40 text-cyan-400 border border-cyan-500/20 px-3 py-1.5 rounded-md backdrop-blur-md">
                        Seeker Console • Live
                    </div>
                </div>

                {/* Top Metrics Cards Array */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    
                    {/* Card: Total Applications */}
                    <div className="relative group overflow-hidden bg-gradient-to-b from-[#1b2833] to-[#15202b] p-6 rounded-2xl border border-gray-800 shadow-xl transition-all duration-300 hover:border-gray-700/80">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-300" />
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Jobs Applied</p>
                                <h3 className="text-4xl font-black text-white mt-2 tracking-tight">{totalApplied}</h3>
                            </div>
                            <div className="p-3.5 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20 shadow-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75H4.5a.75.75 0 0 1-.75-.75v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H4.5A2.25 2.25 0 0 0 2.25 14.15m16.5 0V10.5A2.25 2.25 0 0 0 18 8.25h-2.25m-9 0H4.5A2.25 2.25 0 0 0 2.25 10.5v3.65m13.5-5.85V6.75A2.25 2.25 0 0 0 13.5 4.5h-3a2.25 2.25 0 0 0-2.25 2.25v1.5m9 0h-9M12 14v3m-3-3h6" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-4 text-xs text-gray-500">
                            Total submissions across all job types
                        </div>
                    </div>

                    {/* Card: Pending Pipeline */}
                    <div className="relative group overflow-hidden bg-gradient-to-b from-[#1b2833] to-[#15202b] p-6 rounded-2xl border border-gray-800 shadow-xl transition-all duration-300 hover:border-gray-700/80">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all duration-300" />
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Under Review</p>
                                <h3 className="text-4xl font-black text-white mt-2 tracking-tight">{pendingCount}</h3>
                            </div>
                            <div className="p-3.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 shadow-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-4 text-xs text-gray-500">
                            Applications pending recruiter interaction
                        </div>
                    </div>

                    {/* Card: Interviews / Approved */}
                    <div className="relative group overflow-hidden bg-gradient-to-b from-[#1b2833] to-[#15202b] p-6 rounded-2xl border border-gray-800 shadow-xl transition-all duration-300 hover:border-gray-700/80">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all duration-300" />
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Approved / Offers</p>
                                <h3 className="text-4xl font-black text-white mt-2 tracking-tight">{approvedCount}</h3>
                            </div>
                            <div className="p-3.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20 shadow-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-4 text-xs text-gray-500">
                            Successful loops and approved positions
                        </div>
                    </div>
                </div>

                {/* Primary Data Grid Section */}
                <div className="bg-[#1b2833] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden backdrop-blur-xl">
                    
                    <div className="p-5 border-b border-gray-800 bg-[#16222d] flex justify-between items-center">
                        <h2 className="text-lg font-bold text-white tracking-wide">Submission Log</h2>
                        <span className="text-xs text-gray-400 bg-gray-800 px-2.5 py-1 rounded-full border border-gray-700">
                            {applications.length} Position{applications.length !== 1 ? 's' : ''} Tracked
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#15202b]/60 border-b border-gray-800 text-xs font-bold uppercase tracking-widest text-gray-400">
                                    <th className="py-4.5 px-6">Target Role</th>
                                    <th className="py-4.5 px-6">Company Information</th>
                                    <th className="py-4.5 px-6">Date Sent</th>
                                    <th className="py-4.5 px-6">Current Status</th>
                                    <th className="py-4.5 px-6 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800/60 text-sm text-gray-300">
                                {applications.map((app) => (
                                    <tr key={app._id} className="hover:bg-gray-800/20 transition-all duration-150 group">
                                        
                                        {/* Target Job Segment */}
                                        <td className="py-5 px-6">
                                            <div className="font-bold text-white group-hover:text-cyan-400 transition-colors text-base">
                                                {app.jobTitle}
                                            </div>
                                            <div className="text-xs text-gray-400 mt-1 font-mono">
                                                ID: {app.jobId?.slice(-6)}
                                            </div>
                                        </td>
                                        
                                        {/* Company Focus Segment */}
                                        <td className="py-5 px-6">
                                            <div className="flex items-center gap-3">
                                                {/* Modern Placeholder Company Banner Icon */}
                                                <Image height={70} width={70} alt='logocompany' className="">
                                                    {app.companyImage}
                                                </Image>
                                                <div>
                                                    <div className="font-semibold text-white text-sm tracking-wide">
                                                        {app.companyName}
                                                    </div>
                                                    <div className="text-xs text-gray-400 mt-0.5">
                                                        Corp Ref: {app.companyId?.slice(-6)}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        
                                        {/* Format Datetime String */}
                                        <td className="py-5 px-6 text-gray-400 font-mono text-xs">
                                            {new Date(app.appliedAt).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: '2-digit',
                                                year: 'numeric'
                                            })}
                                        </td>
                                        
                                        {/* Context-Aware Color Badges */}
                                        <td className="py-5 px-6">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border
                                                ${app.status === 'pending' ? 'bg-amber-500/5 text-amber-400 border-amber-500/20' : ''}
                                                ${app.status === 'rejected' ? 'bg-rose-500/5 text-rose-400 border-rose-500/20' : ''}
                                                ${app.status === 'approved' ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/20' : ''}
                                            `}>
                                                <span className={`w-1.5 h-1.5 rounded-full mr-2 animate-pulse
                                                    ${app.status === 'pending' ? 'bg-amber-400' : ''}
                                                    ${app.status === 'rejected' ? 'bg-rose-400' : ''}
                                                    ${app.status === 'approved' ? 'bg-emerald-400' : ''}
                                                `} />
                                                {app.status}
                                            </span>
                                        </td>

                                        {/* Action Button: Details Link */}
                                        <td className="py-5 px-6 text-right">
                                            <a 
                                                href={`/applications/${app._id}`}
                                                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800/50 text-gray-300 rounded-xl hover:from-cyan-500 hover:to-cyan-400 hover:text-black border border-gray-700/80 hover:border-transparent shadow-md transition-all font-semibold text-xs tracking-wide"
                                            >
                                                Details
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Empty State Interface fallback */}
                    {applications.length === 0 && (
                        <div className="text-center py-16 bg-[#16222d]/40">
                            <p className="text-gray-500 text-sm font-medium tracking-wide">You haven t submitted any job applications yet.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Applicationpage;