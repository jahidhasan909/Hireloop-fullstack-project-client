"use client";

import React, { useRef } from "react";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import { AddApplication } from "@/lib/action/application";
import toast from "react-hot-toast";

const ApplyJobForm = ({ job, user }) => {

    const formRef = useRef(null);
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData.entries());

        const applicationData = {
            jobId: job?._id,
            jobTitle: job?.jobTitle,
            companyId: job?.companyId,
            companyName: job?.companyName,
            companyLogo: job?.companyLogo,

            applicantId: user?.id,
            applicantName: user?.name,
            applicantEmail: user?.email,
            applicantImage: user?.image,

            phone: data.phone,
            resume: data.resume,
            portfolio: data.portfolio,
            github: data.github,
            linkedin: data.linkedin,
            coverLetter: data.coverLetter,

            status: "pending",
            appliedAt: new Date(),
        };

        const applydata = await AddApplication(applicationData)
        if (applydata.insertedId) {
            toast.success('Information submit successfully !')
            e.target.reset();
        }
    };




    return (
        <Form
            ref={formRef}
            className="w-full max-w-2xl border p-4 rounded-2xl mt-7 flex flex-col gap-4 mx-auto"
            onSubmit={handleSubmit}
        >
            <TextField
                isRequired
                name="name"
                defaultValue={user?.name}
            >
                <Label>Full Name</Label>
                <Input />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="email"
                type="email"
                defaultValue={user?.email}
            >
                <Label>Email</Label>
                <Input />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="phone"
            >
                <Label>Phone Number</Label>
                <Input placeholder="+8801XXXXXXXXX" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="resume"
            >
                <Label>Resume URL</Label>
                <Input placeholder="https://drive.google.com/..." />
                <Description>
                    Share your Google Drive resume link
                </Description>
                <FieldError />
            </TextField>

            <TextField name="portfolio">
                <Label>Portfolio URL</Label>
                <Input placeholder="https://yourportfolio.com" />
                <FieldError />
            </TextField>

            <TextField name="coverLetter">
                <Label>Cover Letter</Label>
                <TextArea
                    minRows={4}
                    placeholder="Write a short cover letter..."
                />
                <FieldError />
            </TextField>

            <Button className={'w-full'} color="primary" type="submit">
                Apply Now
            </Button>
        </Form>
    );
};

export default ApplyJobForm;