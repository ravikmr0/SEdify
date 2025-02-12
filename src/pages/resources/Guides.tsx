import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Clock } from "lucide-react";

const Guides = () => {
  const guides = [
    {
      title: "Getting Started with Online Learning",
      description: "A comprehensive guide for new students",
      category: "Beginner",
      readTime: "10 min",
      articles: 5,
    },
    {
      title: "Advanced Study Techniques",
      description: "Master effective learning strategies",
      category: "Advanced",
      readTime: "15 min",
      articles: 8,
    },
    {
      title: "Course Creation Guide",
      description: "For educators and content creators",
      category: "Instructor",
      readTime: "20 min",
      articles: 12,
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
            <h1 className="text-4xl font-bold mb-6">Learning Guides</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive guides to help you make the most of your learning
              journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <Badge className="mb-4">{guide.category}</Badge>
                    <h3 className="text-xl font-semibold mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {guide.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {guide.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Book className="h-4 w-4" />
                        {guide.articles} articles
                      </div>
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

export default Guides;
