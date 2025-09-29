'use client';

import { Share2, Twitter, Linkedin, Facebook, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

const SocialShare = ({ url, title, description }: SocialShareProps) => {
  const { toast } = useToast();

  const shareUrl = typeof window !== 'undefined' ? window.location.href : url;
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || '');
  const encodedUrl = encodeURIComponent(shareUrl);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Link copied!",
        description: "The article link has been copied to clipboard.",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Could not copy the link.",
        variant: "destructive",
      });
    }
  };

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "hover:bg-blue-50 hover:text-blue-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:bg-blue-50 hover:text-blue-700",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-blue-50 hover:text-blue-800",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-muted/30 to-muted/10 border border-border rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Share2 className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-primary">Share Article</h3>
      </div>
      
      <p className="text-muted-foreground mb-6">
        Found this article helpful? Share it with other professionals!
      </p>
      
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((social) => (
          <Button
            key={social.name}
            variant="outline"
            size="sm"
            className={`transition-all duration-200 ${social.color}`}
            onClick={() => window.open(social.url, '_blank', 'noopener,noreferrer')}
          >
            <social.icon className="w-4 h-4 mr-2" />
            {social.name}
          </Button>
        ))}
        
        <Button
          variant="outline"
          size="sm"
          className="transition-all duration-200 hover:bg-gray-50 hover:text-gray-700"
          onClick={copyToClipboard}
        >
          <Link className="w-4 h-4 mr-2" />
          Copy Link
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;