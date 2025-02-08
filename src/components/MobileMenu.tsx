import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const MobileMenu = () => {
  const menuItems = [
    {
      title: "Courses",
      items: [
        { label: "Popular Courses", href: "#" },
        { label: "New Releases", href: "#" },
      ],
    },
    {
      title: "Mock Tests",
      items: [
        { label: "Practice Tests", href: "#" },
        { label: "Mock Exams", href: "#" },
      ],
    },
    {
      title: "Notes",
      items: [
        { label: "My Notes", href: "#" },
        { label: "Shared Notes", href: "#" },
      ],
    },
    {
      title: "Jobs",
      items: [
        { label: "Job Board", href: "#" },
        { label: "Career Resources", href: "#" },
      ],
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">
            <span className="text-xl font-bold bg-gradient-to-r from-[#2A3B7C] to-[#6B4CE6] bg-clip-text text-transparent">
              Sigma Edify
            </span>
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-6 mt-6">
          {menuItems.map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="font-semibold text-foreground/80">
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.href}
                    className="block px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-4 space-y-2">
            <Button className="w-full" variant="outline">
              Sign In
            </Button>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
