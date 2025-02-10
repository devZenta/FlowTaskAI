"use client";

import React, { useState } from 'react';
import { Sun, Moon, ChevronDown } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Navbar ({ theme, toggleTheme }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: 'Home', position: 'start' },
    { name: 'Features', position: 'middle', hasDropdown: true },
    { name: 'Pricing', position: 'middle' },
    { name: 'Dashboard', position: 'end' }
  ];
  
  const featuresDropdown = [
    { name: 'Introduction', description: 'Get started with our platform' },
    { name: 'Installation', description: 'Step-by-step setup guide' },
    { name: 'Typography', description: 'Text styles and formatting' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#030014] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              TaskFlow AI.
            </span>
          </div>

          {/* Centered Navigation */}
          <div className="flex-1 flex justify-center space-x-8 mt-1">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown('features')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    className="px-4 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1 group"
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </button>
                  
                  {activeDropdown === 'features' && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <div className="w-72 rounded-lg bg-[#030014] border border-white/10 shadow-lg overflow-hidden p-1">
                        {featuresDropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href="#"
                            className="flex flex-col space-y-1 rounded-md px-4 py-3 text-sm text-gray-300 hover:bg-white/5 transition-colors"
                          >
                            <span className="font-medium text-white">{subItem.name}</span>
                            <span className="text-xs text-gray-400">{subItem.description}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.name}
                  className="px-4 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item.name}
                </button>
              )
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};