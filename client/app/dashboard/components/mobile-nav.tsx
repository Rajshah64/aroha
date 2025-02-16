"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BarChart3, Car, Cpu, Leaf, Menu, Sparkles } from "lucide-react"

const features = [
  { name: "Demographic Analysis", icon: BarChart3, id: "demographic" },
  { name: "Traffic Analysis", icon: Car, id: "traffic" },
  { name: "Energy Consumption", icon: Cpu, id: "energy" },
  { name: "Environmental Impact", icon: Leaf, id: "environmental" },
  { name: "AI Insights", icon: Sparkles, id: "ai" },
]

export function MobileNav({ setSelectedFeature }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 bg-gray-800 text-white p-0">
        <nav className="space-y-2 p-4">
          {features.map((feature) => (
            <Button
              key={feature.id}
              variant="ghost"
              className="w-full justify-start text-white hover:bg-gray-700 hover:text-blue-400 transition-colors"
              onClick={() => {
                setSelectedFeature(feature.id)
                setOpen(false)
              }}
            >
              <feature.icon className="h-5 w-5 mr-2" />
              <span>{feature.name}</span>
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

