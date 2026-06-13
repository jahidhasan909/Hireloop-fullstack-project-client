

import { getSession } from "@/lib/core/sassion";
import { LayoutSideContentLeft, Bell, Envelope, Gear, House, Magnifier, Person, Briefcase, Bookmark, FileText, CreditCard } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { IconLayoutGrid } from "@tabler/icons-react";
import { Building2, LayoutDashboard, Users } from "lucide-react";
import Link from "next/link";

export async function SideBar() {

    const user = await getSession()

    const seekerNavItems = [
        { icon: IconLayoutGrid, href: "/Dashboard/seeker", label: "Dashboard" },
        { icon: Magnifier, href: "/Dashboard/seeker/jobs", label: "Jobs" },
        { icon: Bookmark, href: "/Dashboard/seeker/saved-jobs", label: "Saved Jobs" },
        { icon: FileText, href: "/Dashboard/seeker/application", label: "Applications" },
        { icon: CreditCard, href: "/Dashboard/seeker/billing", label: "Billing" },
        { icon: Gear, href: "/settings", label: "Settings" },
    ];


    const recruiterNavItems = [
        { icon: House, href: "/Dashboard/recruiter", label: "Home" },
        { icon: Magnifier, href: "/Dashboard/recruiter/job", label: "Jobs" },
        { icon: Bell, href: "/Dashboard/recruiter/job/new", label: "Post A Job" },
        { icon: Briefcase, href: "/Dashboard/recruiter/company", label: "Company Profile" },
        { icon: Envelope, href: "/messages", label: "Messages" },
        { icon: Person, href: "/profile", label: "Profile" },
        { icon: Gear, href: "/settings", label: "Settings" },
    ]
    const adminNavItems = [
        { icon: LayoutDashboard, href: "/Dashboard/admin", label: "Dashboard" },
        { icon: Users, href: "/Dashboard/admin/users", label: "Users" },
        { icon: Building2, href: "/Dashboard/admin/companies", label: "Companies" },
        { icon: Briefcase, href: "/Dashboard/admin/jobs", label: "Jobs" },
        { icon: CreditCard, href: "/Dashboard/admin/payments", label: "Payments" },
        { icon: Gear, href: "/Dashboard/admin/settings", label: "Settings" },
    ];

    const roleBaseNavItem = {
        seeker: seekerNavItems,
        recruiter: recruiterNavItems,
        admin:adminNavItems
    }

    const navItems = roleBaseNavItem[user?.role || "seeker"];

    const navContent = <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
            <Link
                href={item.href}
                key={item.label}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                type="button"
            >
                <item.icon className="size-5 text-muted" />
                {item.label}
            </Link>
        ))}
    </nav>

    return (
        <div>
            <aside className="hidden w-64  lg:block  shrink-0 h-screen border-r border-default px-4">
                {navContent}
            </aside>
            <Drawer >
                <Button variant="secondary" className={'lg:hidden'}>
                    <LayoutSideContentLeft />
                    Menu
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </div>
    );
}