"use client"
import React from 'react';
import {
    Table,
    Chip,
    Button,
    Avatar,
} from "@heroui/react";
import { UpdatedCompanyStatus } from '@/lib/action/company';
const CompanyTable = ({ companies }) => {



    const handleApproved = async (id) => {
        const result = await UpdatedCompanyStatus(id, { status: 'Approved' })
    }

    const handleRejected = async (id) => {
        const result = await UpdatedCompanyStatus(id, { status: 'Rejected' })
    }

    return (
        <div>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Companies Table">
                        <Table.Header>
                            <Table.Column>COMPANY</Table.Column>
                            <Table.Column>WEBSITE</Table.Column>
                            <Table.Column>INDUSTRY</Table.Column>
                            <Table.Column>LOCATION</Table.Column>
                            <Table.Column>STATUS</Table.Column>
                            <Table.Column>DATE</Table.Column>
                            <Table.Column>ACTIONS</Table.Column>
                        </Table.Header>

                        <Table.Body>
                            {companies?.map((company) => (
                                <Table.Row key={company._id}>
                                    <Table.Cell>
                                        <div className="flex items-center gap-3">
                                            <Avatar
                                                src={company.logo}
                                                name={company.name}
                                                radius="sm"
                                            />

                                            <div>
                                                <p className="font-medium">
                                                    {company.name}
                                                </p>
                                                <p className="text-xs text-default-500">
                                                    {company.employeeRange} Employees
                                                </p>
                                            </div>
                                        </div>
                                    </Table.Cell>

                                    <Table.Cell>
                                        <a
                                            href={company.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            Visit Website
                                        </a>
                                    </Table.Cell>

                                    <Table.Cell>
                                        <Chip size="sm" variant="flat">
                                            {company.industry}
                                        </Chip>
                                    </Table.Cell>

                                    <Table.Cell>
                                        {company.location}
                                    </Table.Cell>

                                    <Table.Cell>
                                        <Chip
                                            size="sm"
                                            variant="dot"
                                            color={
                                                company.status === "Approved"
                                                    ? "success"
                                                    : company.status === "Rejected"
                                                        ? "danger"
                                                        : "warning"
                                            }
                                        >
                                            {company.status}
                                        </Chip>
                                    </Table.Cell>

                                    <Table.Cell>
                                        {new Date(
                                            company.createdAt
                                        ).toLocaleDateString()}
                                    </Table.Cell>

                                    <Table.Cell>
                                        <div className="flex gap-2">
                                            <Button
                                                size="sm"
                                                className={'bg-green-500'}
                                                variant="outline"
                                                onClick={() => handleApproved(company._id)}
                                            >
                                                Approve
                                            </Button>

                                            <Button
                                                size="sm"
                                                variant="danger"
                                                onClick={() => handleRejected(company._id)}

                                            >
                                                Reject
                                            </Button>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default CompanyTable;