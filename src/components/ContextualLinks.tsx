import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";

interface ContextualLink {
  title: string;
  href: string;
  description: string;
  type: "internal" | "external";
  priority?: "high" | "medium" | "low";
}

interface ContextualLinksProps {
  links: ContextualLink[];
  title?: string;
  layout?: "grid" | "list" | "inline";
  className?: string;
}

const ContextualLinks = ({ 
  links, 
  title = "Related Content", 
  layout = "grid",
  className = "" 
}: ContextualLinksProps) => {
  const sortedLinks = [...links].sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return (priorityOrder[b.priority || 'medium'] - priorityOrder[a.priority || 'medium']);
  });

  if (layout === "inline") {
    return (
      <div className={`flex flex-wrap gap-4 ${className}`}>
        {sortedLinks.map((link, index) => (
          <span key={index} className="inline-flex items-center">
            {link.type === "external" ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm underline decoration-dotted underline-offset-4"
              >
                {link.title}
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            ) : (
              <Link
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm underline decoration-dotted underline-offset-4"
              >
                {link.title}
              </Link>
            )}
          </span>
        ))}
      </div>
    );
  }

  if (layout === "list") {
    return (
      <div className={`space-y-3 ${className}`}>
        {title && (
          <h4 className="font-semibold text-foreground mb-4">{title}</h4>
        )}
        <ul className="space-y-2">
          {sortedLinks.map((link, index) => (
            <li key={index} className="flex items-start">
              {link.type === "external" ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">{link.title}</div>
                    <div className="text-sm text-muted-foreground/80">{link.description}</div>
                  </div>
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="group flex items-start space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <div>
                    <div className="font-medium">{link.title}</div>
                    <div className="text-sm text-muted-foreground/80">{link.description}</div>
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Grid layout (default)
  return (
    <div className={className}>
      {title && (
        <h4 className="font-semibold text-foreground mb-6">{title}</h4>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        {sortedLinks.map((link, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
              link.priority === 'high' 
                ? 'border-electric-blue/30 bg-electric-blue/5 hover:border-electric-blue/50' 
                : 'border-border/30 bg-card/50 hover:border-border/50'
            }`}
          >
            {link.type === "external" ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </h5>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {link.description}
                </p>
              </a>
            ) : (
              <Link to={link.href} className="group block">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </h5>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {link.description}
                </p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContextualLinks;