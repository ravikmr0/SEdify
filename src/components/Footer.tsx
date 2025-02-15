import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Community", href: "/community" },
        { label: "Help Center", href: "/help" },
        { label: "Partners", href: "/partners" },
        { label: "Guides", href: "/guides" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "GDPR", href: "/gdpr" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/sigmaedify",
      label: "Facebook",
    },
    { icon: Twitter, href: "https://x.com/sigmaedify", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/sigmaedify",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/sigmaedify",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@sigmaedify",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand and Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#2A3B7C] to-[#6B4CE6] bg-clip-text text-transparent">
                Sigma Edify
              </h2>
              <p className="text-slate-400">
                Empowering learners worldwide with quality education and
                innovative learning solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Subscribe to our newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-slate-900 border-slate-800 text-slate-200 placeholder:text-slate-500"
                />
                <Button className="bg-primary hover:bg-primary/90 shrink-0">
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {quickLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = link.href;
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-slate-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Sigma Edify. All rights reserved.
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
