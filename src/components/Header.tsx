import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Search } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (location.pathname !== path.split("?")[0]) {
      navigate(path);
    }
  };

  return (
    <header className="sticky top-0 z-20 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4 py-2">
          {/* Left section with menu and logo */}
          <div className="flex items-center justify-between gap-15 md:gap-2 ml-[-10px]">
            <MobileMenu />
            <Link to="/" className="flex items-center ml-2">
              <span className="text-xl font-bold bg-gradient-to-r from-[#2A3B7C] to-[#6B4CE6] bg-clip-text text-transparent">
                Sigma Edify
              </span>
            </Link>
          </div>

          {/* Center section with search */}
          <div className="flex-1 flex justify-center px-4">
            <div className="relative w-full max-w-[300px] hidden sm:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-full"
              />
            </div>
          </div>

          {/* Right section with navigation and buttons */}
          <div className="flex items-center gap-4">
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => handleNavigation("/courses")}
                          className="w-full text-left group space-y-1 rounded-md p-3 hover:bg-accent"
                        >
                          <div className="font-medium">Popular Courses</div>
                          <div className="text-sm text-muted-foreground">
                            Browse our top-rated courses
                          </div>
                        </button>
                        <button
                          onClick={() => handleNavigation("/courses?sort=new")}
                          className="w-full text-left group space-y-1 rounded-md p-3 hover:bg-accent"
                        >
                          <div className="font-medium">New Releases</div>
                          <div className="text-sm text-muted-foreground">
                            Check out our latest courses
                          </div>
                        </button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Rest of the navigation menu items remain unchanged */}
                {/* ... */}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button variant="outline" className="hidden sm:flex">
              Sign In
            </Button>
            <Button className="hidden sm:flex bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showMobileSearch && (
          <div className="sm:hidden px-4 pb-4">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-full"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
