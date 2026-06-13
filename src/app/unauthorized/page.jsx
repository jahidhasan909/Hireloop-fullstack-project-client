"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

const UnauthorizedPage = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6">
            <div className="max-w-md w-full text-center bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                
                {/* Shield / Lock Icon */}
                <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-red-50 text-red-500 mb-6 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </div>

                {/* Error Code & Title */}
                <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Error 404</span>
                <h1 className="text-3xl font-extrabold text-gray-900 mt-2 mb-3">
                    Access Denied
                </h1>
                
                {/* Description */}
                <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                    Oops! You don t have permission to access this page. It looks like you re trying to view a restricted area. 
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button 
                        onClick={() => router.back()}
                        className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-sm"
                    >
                        Go Back
                    </button>
                    
                    <Link 
                        href="/"
                        className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-sm text-center"
                    >
                        Return Home
                    </Link>
                </div>
            </div>

            {/* Subtle Footer Help text */}
            <p className="mt-8 text-xs text-gray-400">
                Think this is a mistake? Please contact your administrator.
            </p>
        </div>
    );
};

export default UnauthorizedPage;