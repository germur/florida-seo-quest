import { Search, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const searchableContent = [
  { title: "Strategic SEO Consulting", href: "/services/strategic-seo-consulting", type: "Service" },
  { title: "Digital Storytelling Services", href: "/services/digital-storytelling-services", type: "Service" },
  { title: "SEO Automation", href: "/services/seo-automation", type: "Service" },
  { title: "Personal Branding Consulting", href: "/services/personal-branding-consulting", type: "Service" },
  { title: "Paramount Property Restoration", href: "/case-studies/paramount-property-restoration", type: "Case Study" },
  { title: "Craftd London", href: "/case-studies/craftd-london", type: "Case Study" },
  { title: "Flo Car Rental", href: "/case-studies/flo-car-rental", type: "Case Study" },
  { title: "How We Work", href: "/how-we-work", type: "Page" },
  { title: "Blog", href: "/blog", type: "Page" },
  { title: "Resources", href: "/resources", type: "Page" },
  { title: "About", href: "/about", type: "Page" },
  { title: "Contact", href: "/contact", type: "Page" },
];

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContent = searchableContent.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleItemClick = () => {
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-9 h-9 p-0 hover:bg-accent/50 transition-colors"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Content
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Command className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search services, case studies, pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>
          <div className="max-h-80 overflow-y-auto space-y-1">
            {filteredContent.length > 0 ? (
              filteredContent.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={handleItemClick}
                  className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-accent/50 transition-colors group"
                >
                  <span className="text-sm font-medium group-hover:text-primary">
                    {item.title}
                  </span>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {item.type}
                  </span>
                </Link>
              ))
            ) : searchQuery ? (
              <div className="px-3 py-8 text-center text-muted-foreground">
                <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No results found for "{searchQuery}"</p>
              </div>
            ) : (
              <div className="px-3 py-4 text-center text-muted-foreground">
                <p className="text-sm">Start typing to search...</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchButton;