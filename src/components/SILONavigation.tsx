'use client';

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface SILONavigationProps {
  breadcrumbs: BreadcrumbItem[];
  currentPage: string;
}

const SILONavigation: React.FC<SILONavigationProps> = ({ breadcrumbs, currentPage }) => {
  return (
    <nav className="bg-secondary/20 py-4 mb-8">
      <div className="container mx-auto px-6">
        <div className="flex items-center space-x-2 text-sm">
          <Link 
            href="/" 
            className="flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <Home className="h-4 w-4 mr-1" />
            Home
          </Link>
          
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />
              {item.current ? (
                <span className="text-primary font-medium">{item.label}</span>
              ) : (
                <Link 
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          
          {currentPage && (
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />
              <span className="text-primary font-medium">{currentPage}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SILONavigation;