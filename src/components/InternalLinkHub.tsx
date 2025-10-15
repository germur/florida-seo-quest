'use client';

import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

interface LinkGroup {
  title: string;
  links: {
    name: string;
    href: string;
    description?: string;
    isExternal?: boolean;
  }[];
}

interface InternalLinkHubProps {
  groups: LinkGroup[];
  title?: string;
  className?: string;
}

const InternalLinkHub = ({ groups, title = "Explore More", className = "" }: InternalLinkHubProps) => {
  return (
    <div className={`bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 border border-border/50 ${className}`}>
      <h3 className="text-xl font-semibold text-primary mb-6 font-space-grotesk">
        {title}
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-3">
            <h4 className="font-medium text-foreground text-sm uppercase tracking-wide border-b border-border/30 pb-2">
              {group.title}
            </h4>
            <ul className="space-y-2">
              {group.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="ml-1 h-3 w-3 opacity-50 group-hover:opacity-100" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="group flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  )}
                  {link.description && (
                    <p className="text-xs text-muted-foreground/70 mt-1 leading-tight">
                      {link.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternalLinkHub;