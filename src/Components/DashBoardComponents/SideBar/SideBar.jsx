

import { LayoutSideContentLeft, Bell, Envelope, Gear, House, Magnifier, Person, Briefcase } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function SideBar() {
    const navItems = [
        { icon: House, href: "/Dashboard/recruiter", label: "Home" },
        { icon: Magnifier, href: "/Dashboard/recruiter/job", label: "Jobs" },
        { icon: Bell, href: "/Dashboard/recruiter/job/new", label: "Post A Job" },
        { icon: Briefcase, href: "/Dashboard/recruiter/company", label: "Company Profile" },
        { icon: Envelope, href: "/messages", label: "Messages" },
        { icon: Person, href: "/profile", label: "Profile" },
        { icon: Gear, href: "/settings", label: "Settings" },
    ];

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