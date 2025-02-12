import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Press = () => {
  const pressReleases = [
    {
      date: "March 15, 2024",
      title: "Sigma Edify Launches New AI-Powered Learning Features",
      excerpt:
        "Revolutionary new features use artificial intelligence to personalize learning experiences for students worldwide.",
    },
    {
      date: "February 28, 2024",
      title: "Partnership Announcement with Leading Universities",
      excerpt:
        "Sigma Edify partners with top global universities to offer accredited online courses.",
    },
    {
      date: "January 10, 2024",
      title: "Sigma Edify Reaches 1 Million Student Milestone",
      excerpt:
        "Platform celebrates serving over one million students globally with expanded course offerings.",
    },
  ];

  const mediaAssets = [
    {
      title: "Brand Guidelines",
      description: "Logo files, color palette, and usage guidelines",
      fileSize: "12.5 MB",
    },
    {
      title: "Press Kit",
      description: "Company information, facts, and figures",
      fileSize: "8.2 MB",
    },
    {
      title: "Media Assets",
      description: "High-resolution images and videos",
      fileSize: "45.8 MB",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-6">Press Room</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest news and updates about Sigma Edify's mission to
              transform education globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Latest Press Releases</h2>
          <div className="grid gap-6 max-w-4xl">
            {pressReleases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      {release.date}
                    </p>
                    <h3 className="text-xl font-semibold mb-3">
                      {release.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {release.excerpt}
                    </p>
                    <Button variant="outline">Read More</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Assets Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Media Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {mediaAssets.map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{asset.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {asset.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {asset.fileSize}
                      </span>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;
