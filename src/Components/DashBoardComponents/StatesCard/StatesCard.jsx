"use client";

import React from "react";
import { Card } from "@heroui/react";

export default function StatesCard({ title, value, icon: IconComponent, iconColor = "text-neutral-400" }) {
  return (
    <Card 
      variant="default" 
      className="w-full bg-[#121212] border border-neutral-800 rounded-xl p-6 shadow-sm flex flex-col justify-between min-h-[160px]"
    >
      {/* Top Section: Icon Wrapper matching documentation's style container approach */}
      <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center border border-neutral-800 self-start">
        {IconComponent && (
          <IconComponent className={`w-5 h-5 ${iconColor}`} />
        )}
      </div>

      {/* Bottom Section: Title and Content utilizing HeroUI v3 sub-components */}
      <Card.Content className="p-0 flex flex-col gap-1 mt-6">
        <Card.Description className="text-sm font-medium text-neutral-400 p-0 m-0">
          {title}
        </Card.Description>
        <Card.Title className="text-3xl font-semibold text-white tracking-tight p-0 m-0 leading-none">
          {value.toLocaleString()}
        </Card.Title>
      </Card.Content>
    </Card>
  );
}