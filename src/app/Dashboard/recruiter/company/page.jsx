'use client';

import React, { useState } from 'react';
import {
    Form, Fieldset, TextField, Input, Label, Select, ListBox, TextArea, Button, FieldError
} from '@heroui/react'; // Hero UI v3 setup
import { ArrowUpToLine, Globe, Pin, ChevronDown } from '@gravity-ui/icons';
import { Newcompany } from '@/lib/action/company';
import toast from 'react-hot-toast';

// Define layout and styling utility strings matching your design tokens
const textInputClass = "w-full bg-[#121212] border border-zinc-800 focus:border-zinc-700 text-white rounded-lg h-12 px-4 outline-none placeholder:text-zinc-600 transition-colors";
const textAreaClass = "w-full bg-[#121212] border border-zinc-800 focus:border-zinc-700 text-white rounded-lg p-4 outline-none placeholder:text-zinc-600 transition-colors resize-none";
const triggerClasses = "w-full bg-[#121212] border border-zinc-800 text-white rounded-lg h-12 px-4 flex items-center justify-between outline-none cursor-pointer";
const popoverClasses = "bg-[#121212] border border-zinc-800 rounded-lg p-1 shadow-xl";
const listItemClasses = "text-zinc-300 hover:bg-zinc-900 px-3 py-2 rounded-md cursor-pointer outline-none transition-colors text-sm data-[selected=true]:bg-zinc-800 data-[selected=true]:text-white";

export default function CompanyProfile() {
    // Core states
    const [company, setCompany] = useState(null); // null means Unregistered
    const [isEditing, setIsEditing] = useState(false);
    const [errors, setErrors] = useState({});

    // Logo Upload states
    const [logoUrl, setLogoUrl] = useState('');
    const [isUploading, setIsUploading] = useState(false);

    // Form inputs that aren't native text/textarea types
    const [selectedIndustry, setSelectedIndustry] = useState('technology');
    const [selectedEmployeeRange, setSelectedEmployeeRange] = useState('1-10');

    // ImgBB Upload Handler 
    const handleLogoUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setIsUploading(true);
        const formData = new FormData();
        formData.append('image', file);

        try {
            // Replace with your runtime environment variable route or direct client-key configuration
            const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                setLogoUrl(data.data.url);
            } else {
                alert('Upload failed. Please verify API configuration key.');
            }
        } catch (error) {
            console.error('Error uploading logo:', error);
        } finally {
            setIsUploading(false);
        }
    };

    // Form Submission Code
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const companyName = formData.get('companyName');
        const websiteUrl = formData.get('websiteUrl');
        const location = formData.get('location');
        const description = formData.get('description');

        // Simple validation rule checks
        let validationErrors = {};
        if (!companyName) validationErrors.companyName = "Company name is required";
        if (!websiteUrl) validationErrors.websiteUrl = "Website URL is required";
        if (!location) validationErrors.location = "Location is required";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});

        // Save payload 
        const updatedCompany = {
            name: companyName,
            websiteUrl: `https://${websiteUrl}`,
            logo: logoUrl || 'https://placehold.co/150x150?text=No+Logo',
            industry: selectedIndustry,
            location: location,
            employeeRange: selectedEmployeeRange,
            description: description,
            status: company?.status || 'Pending' // Initial admin fallback defaults to Pending
        };

        setCompany(updatedCompany);

        const payload = await Newcompany(updatedCompany)

        if (payload) {
            toast.success('company added successfully')
        }

        setIsEditing(false);
    };

    // Badge styling helpers based on Admin configurations
    const getBadgeStyles = (status) => {
        switch (status) {
            case 'Approved': return 'bg-emerald-950 text-emerald-400 border-emerald-800';
            case 'Rejected': return 'bg-rose-950 text-rose-400 border-rose-800';
            default: return 'bg-amber-950 text-amber-400 border-amber-800';
        }
    };

    // --- STATE 1: UNREGISTERED STATE ---
    if (!company && !isEditing) {
        return (
            <div className="max-w-4xl mx-auto my-12 p-8 bg-[#09090b] border border-zinc-900 rounded-xl text-center space-y-6">
                <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto border border-zinc-800">
                    <Globe size={24} className="text-zinc-400" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-white">No Company Registered</h2>
                    <p className="text-zinc-400 text-sm max-w-sm mx-auto">
                        To post jobs or setup team workspaces, setup your primary corporate operational details first.
                    </p>
                </div>
                <Button
                    onClick={() => setIsEditing(true)}
                    className="bg-white text-black font-semibold hover:bg-zinc-200 rounded-lg px-6 transition-colors h-11"
                >
                    Register Company
                </Button>
            </div>
        );
    }

    // --- STATE 2: VISUALIZATION / VIEW MODE ---
    if (company && !isEditing) {
        return (
            <div className="max-w-4xl mx-auto my-12 p-8 bg-[#09090b] border border-zinc-900 rounded-xl text-white space-y-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-zinc-900">
                    <div className="flex items-center gap-4">
                        <img
                            src={company.logo}
                            alt={`${company.name} Logo`}
                            className="w-16 h-16 rounded-xl border border-zinc-800 object-cover bg-zinc-900"
                        />
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-2xl font-bold">{company.name}</h1>
                                <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${getBadgeStyles(company.status)}`}>
                                    {company.status}
                                </span>
                            </div>
                            <p className="text-zinc-400 text-sm mt-0.5 capitalize">{company.industry} • {company.employeeRange} employees</p>
                        </div>
                    </div>
                    <Button
                        onClick={() => {
                            setLogoUrl(company.logo);
                            setSelectedIndustry(company.industry);
                            setSelectedEmployeeRange(company.employeeRange);
                            setIsEditing(true);
                        }}
                        className="bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium hover:bg-zinc-800 rounded-lg px-5 transition-colors h-10"
                    >
                        Edit Details
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div className="space-y-1">
                        <span className="text-zinc-500 font-medium block">Website URL</span>
                        <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center gap-1.5 font-medium">
                            {company.websiteUrl}
                        </a>
                    </div>
                    <div className="space-y-1">
                        <span className="text-zinc-500 font-medium block">Corporate Location</span>
                        <span className="text-white flex items-center gap-1.5 font-medium">
                            <Pin size={14} className="text-zinc-400" /> {company.location}
                        </span>
                    </div>
                </div>

                {company.description && (
                    <div className="space-y-2 pt-4 border-t border-zinc-900">
                        <span className="text-zinc-500 text-sm font-medium block">Brief Description</span>
                        <p className="text-zinc-300 leading-relaxed text-sm whitespace-pre-wrap">{company.description}</p>
                    </div>
                )}
            </div>
        );
    }

    // --- STATE 3: FORM CREATION & EDIT STATE (MATCHING DESIGN) ---
    return (
        <div className="max-w-4xl mx-auto my-12 p-8 bg-[#09090b] border border-zinc-900 rounded-xl">
            <Form onSubmit={handleSubmit} className="space-y-8" validationErrors={errors} validationBehavior="aria">
                <Fieldset className="space-y-6 w-full">

                    {/* Row 1: Company Name & Industry Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextField name="companyName" defaultValue={company?.name} isInvalid={!!errors.companyName} className="flex flex-col gap-1.5 w-full">
                            <Label className="text-zinc-400 font-medium text-sm">Company Name</Label>
                            <Input placeholder="e.g. Acme Corp" className={textInputClass} />
                            {errors.companyName && <FieldError className="text-xs text-danger mt-1">{errors.companyName}</FieldError>}
                        </TextField>

                        <Select
                            className="w-full flex flex-col gap-1.5"
                            name="industry"
                            selectedKeys={[selectedIndustry]}
                            onSelectionChange={(keys) => setSelectedIndustry(Array.from(keys)[0])}
                        >
                            <Label className="text-zinc-400 font-medium text-sm">Industry / Category</Label>
                            <Select.Trigger className={triggerClasses}>
                                <Select.Value className="text-white capitalize" />
                                <ChevronDown className="text-zinc-500" size={16} />
                            </Select.Trigger>
                            <Select.Popover className={popoverClasses}>
                                <ListBox className="outline-none">
                                    <ListBox.Item id="technology" className={listItemClasses} textValue="Technology">Technology</ListBox.Item>
                                    <ListBox.Item id="design" className={listItemClasses} textValue="Design">Design</ListBox.Item>
                                    <ListBox.Item id="marketing" className={listItemClasses} textValue="Marketing">Marketing</ListBox.Item>
                                    <ListBox.Item id="finance" className={listItemClasses} textValue="Finance">Finance</ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    {/* Row 2: Website URL & Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextField
                            name="websiteUrl"
                            defaultValue={company?.websiteUrl ? company.websiteUrl.replace('https://', '') : ''}
                            isInvalid={!!errors.websiteUrl}
                            className="flex flex-col gap-1.5 w-full"
                        >
                            <Label className="text-zinc-400 font-medium text-sm">Website URL</Label>
                            <div className="flex rounded-lg overflow-hidden border border-zinc-800 focus-within:border-zinc-700 transition-colors h-12">
                                <div className="bg-[#1a1a1a] text-zinc-500 flex items-center justify-center px-4 border-r border-zinc-800 text-sm font-medium select-none">
                                    https://
                                </div>
                                <Input placeholder="www.company.com" className="w-full bg-[#121212] text-white px-4 outline-none placeholder:text-zinc-600 text-sm" />
                            </div>
                            {errors.websiteUrl && <FieldError className="text-xs text-danger mt-1">{errors.websiteUrl}</FieldError>}
                        </TextField>

                        <TextField name="location" defaultValue={company?.location} isInvalid={!!errors.location} className="flex flex-col gap-1.5 w-full">
                            <Label className="text-zinc-400 font-medium text-sm">Location</Label>
                            <div className="relative flex items-center">
                                <Pin size={16} className="absolute left-4 text-zinc-600 pointer-events-none z-10" />
                                <Input placeholder="City, Country" className={`${textInputClass} pl-11`} />
                            </div>
                            {errors.location && <FieldError className="text-xs text-danger mt-1">{errors.location}</FieldError>}
                        </TextField>
                    </div>

                    {/* Row 3: Employee Count Range & Company Logo */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <Select
                            className="w-full flex flex-col gap-1.5"
                            name="employeeRange"
                            selectedKeys={[selectedEmployeeRange]}
                            onSelectionChange={(keys) => setSelectedEmployeeRange(Array.from(keys)[0])}
                        >
                            <Label className="text-zinc-400 font-medium text-sm">Employee Count Range</Label>
                            <Select.Trigger className={triggerClasses}>
                                <Select.Value className="text-white" />
                                <ChevronDown className="text-zinc-500" size={16} />
                            </Select.Trigger>
                            <Select.Popover className={popoverClasses}>
                                <ListBox className="outline-none">
                                    <ListBox.Item id="1-10" className={listItemClasses} textValue="1-10 employees">1-10 employees</ListBox.Item>
                                    <ListBox.Item id="11-50" className={listItemClasses} textValue="11-50 employees">11-50 employees</ListBox.Item>
                                    <ListBox.Item id="51-200" className={listItemClasses} textValue="51-200 employees">51-200 employees</ListBox.Item>
                                    <ListBox.Item id="201+" className={listItemClasses} textValue="201+ employees">201+ employees</ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        <div className="flex flex-col gap-1.5 w-full">
                            <span className="text-zinc-400 font-medium text-sm">Company Logo</span>
                            <div className="flex items-center gap-4">
                                <label className="w-14 h-14 border border-dashed border-zinc-700 hover:border-zinc-500 rounded-xl flex flex-col items-center justify-center cursor-pointer bg-[#121212] transition-colors group relative overflow-hidden">
                                    <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                                    {logoUrl ? (
                                        <img src={logoUrl} alt="Preview" className="w-full h-full object-cover" />
                                    ) : (
                                        <ArrowUpToLine size={18} className="text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                                    )}
                                </label>
                                <div className="flex flex-col">
                                    <span className="text-white text-sm font-medium">{isUploading ? "Uploading..." : "Upload image"}</span>
                                    <span className="text-zinc-600 text-xs mt-0.5">PNG, JPG up to 5MB</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 4: Brief Description */}
                    <TextField name="description" defaultValue={company?.description} className="flex flex-col gap-1.5 w-full">
                        <Label className="text-zinc-400 font-medium text-sm">Brief Description</Label>
                        <TextArea
                            placeholder="Tell us about your company's mission and culture..."
                            rows={4}
                            className={textAreaClass}
                        />
                    </TextField>
                </Fieldset>

                {/* Form Action Adjustments */}
                <div className="flex justify-end gap-3 pt-4 border-t border-zinc-900 w-full">
                    {company && (
                        <Button
                            type="button"
                            onClick={() => setIsEditing(false)}
                            className="bg-transparent border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg px-6 font-medium h-11 transition-colors"
                        >
                            Cancel
                        </Button>
                    )}
                    <Button
                        type="submit"
                        className="bg-white text-black font-semibold hover:bg-zinc-200 rounded-lg px-6 transition-colors h-11"
                    >
                        {company ? 'Save Profile' : 'Register Company'}
                    </Button>
                </div>
            </Form>
        </div>
    );
}