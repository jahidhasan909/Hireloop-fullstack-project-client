"use client";

import { ArrowDown, BroomMotion, ChevronDown } from "@gravity-ui/icons";
import { Button, Dropdown, Label, SearchField } from "@heroui/react";

export default function JobFilterBar({
  search,
  setSearch,
  jobType,
  setJobType,
  category,
  setCategory,
  remote,
  setRemote,
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between bg-content1 border border-divider rounded-2xl p-4">
      {/* Search */}
      <SearchField
        value={search}
        onChange={setSearch}
        className="w-full lg:max-w-md"
      >
        <Label>Search Jobs</Label>

        <SearchField.Group>
          <SearchField.SearchIcon />

          <SearchField.Input
            placeholder="Job title, company name..."
          />

          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      <div className="flex flex-wrap gap-3">
        {/* Job Type */}
        <Dropdown className="">
          <Dropdown.Trigger>
            <Button variant="outline">
              {jobType || "Job Type"}
              <ChevronDown></ChevronDown>
            </Button>
          </Dropdown.Trigger>

          <Dropdown.Popover>
            <Dropdown.Menu>
              <Dropdown.Item
                onAction={() => setJobType("")}
              >
                All Types
              </Dropdown.Item>

              <Dropdown.Item
                onAction={() => setJobType("full-time")}
              >
                Full Time
              </Dropdown.Item>

              <Dropdown.Item
                onAction={() => setJobType("part-time")}
              >
                Part Time
              </Dropdown.Item>

              <Dropdown.Item
                onAction={() => setJobType("contract")}
              >
                Contract
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>

        {/* Category */}
        <Dropdown>
          <Dropdown.Trigger>
            <Button variant="outline">
              {category || "Category"}
               <ChevronDown></ChevronDown>
            </Button>
          </Dropdown.Trigger>

          <Dropdown.Popover>
            <Dropdown.Menu>
              <Dropdown.Item
                onAction={() => setCategory("")}
              >
                All Categories
              </Dropdown.Item>

              <Dropdown.Item
                onAction={() => setCategory("development")}
              >
                Development
              </Dropdown.Item>

              <Dropdown.Item
                onAction={() => setCategory("marketing")}
              >
                Marketing
              </Dropdown.Item>

              <Dropdown.Item
                onAction={() => setCategory("design")}
              >
                Design
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>

        {/* Remote */}
        <Dropdown>
          <Dropdown.Trigger>
            <Button variant="outline">
              {remote === null
                ? "Work Mode"
                : remote
                ? "Remote"
                : "On Site"}
                 <ChevronDown></ChevronDown>
            </Button>
          </Dropdown.Trigger>

          <Dropdown.Popover>
            <Dropdown.Menu>
              <Dropdown.Item
                onAction={() => setRemote(null)}
              >
                All
              </Dropdown.Item>

              <Dropdown.Item
                onAction={() => setRemote(true)}
              >
                Remote
              </Dropdown.Item>

              <Dropdown.Item
                onAction={() => setRemote(false)}
              >
                On Site
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>

        {/* Clear */}
        <Button
          color=""
          variant="outline"
          onPress={() => {
            setSearch("");
            setJobType("");
            setCategory("");
            setRemote(null);
          }}
        >
          Clear
          <BroomMotion></BroomMotion>
        </Button>
      </div>
    </div>
  );
}