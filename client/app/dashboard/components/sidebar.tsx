"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { BarChart3, Car, ChevronRight, Cpu, FireExtinguisher, Leaf, Menu, Sparkles, SpeakerIcon } from "lucide-react"

const features = [
  { name: "Demographic Analysis", icon: BarChart3, id: "demographic" },
  { name: "Traffic Analysis", icon: Car, id: "traffic" },
  { name: "Energy Consumption", icon: Cpu, id: "energy" },
  { name: "Overall Comparison", icon: Leaf, id: "environmental" },
  { name: "AI Insights", icon: Sparkles, id: "ai" },
  { name: "News", icon: FireExtinguisher, id: "news" },
  { name: "Feedback", icon: SpeakerIcon, id: "feedback" }
]

interface SidebarProps {
  setSelectedFeature: (featureId: string) => void;
}

export function Sidebar({ setSelectedFeature }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "hidden md:flex flex-col bg-gray-800 bg-opacity-50 backdrop-blur-lg text-white transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <h2 className="text-xl font-bold">Menu</h2>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white hover:bg-gray-700"
        >
          {isCollapsed ? <ChevronRight /> : <Menu />}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="space-y-2 p-2">
          {features.map((feature) => (
            <Button
              key={feature.id}
              variant="ghost"
              className={cn(
                "w-full justify-start text-white hover:bg-gray-700 hover:text-blue-400 transition-colors",
                isCollapsed ? "px-2" : "px-4",
              )}
              onClick={() => setSelectedFeature(feature.id)}
            >
              <feature.icon className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-2")} />
              {!isCollapsed && <span>{feature.name}</span>}
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}

