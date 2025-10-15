'use client';

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

interface RelatedLink {
  title: string;
  href: string;
  description: string;
  category: string;
}

interface RelatedLinksProps {
  title?: string;
  links: RelatedLink[];
  className?: string;
}

const RelatedLinks = ({ title = "Related Resources", links, className = "" }: RelatedLinksProps) => {
  return (
    <section className={`py-12 bg-card/30 rounded-2xl border border-border/50 ${className}`}>
      <div className="px-8">
        <h3 className="text-2xl font-semibold text-primary mb-6 font-space-grotesk">
          {title}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="group p-4 rounded-lg bg-background/50 border border-border/30 hover:border-electric-blue/30 hover:bg-background/80 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                  {link.category}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-electric-blue group-hover:translate-x-1 transition-all" />
              </div>
              <h4 className="font-semibold text-primary mb-1 group-hover:text-electric-blue transition-colors">
                {link.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;