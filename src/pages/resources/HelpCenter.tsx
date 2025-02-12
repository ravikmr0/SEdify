import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Book, FileQuestion, MessageCircle, Phone } from "lucide-react";

const HelpCenter = () => {
  const categories = [
    {
      icon: <Book className="w-6 h-6" />,
      title: "Getting Started",
      description: "New to Sigma Edify? Start here",
      articles: 12,
    },
    {
      icon: <FileQuestion className="w-6 h-6" />,
      title: "FAQs",
      description: "Frequently asked questions",
      articles: 25,
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Community Support",
      description: "Get help from our community",
      articles: 8,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Contact Support",
      description: "Reach out to our support team",
      articles: 5,
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
            <h1 className="text-4xl font-bold mb-6">How can we help you?</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Search our knowledge base or browse categories below
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for help..."
                className="pl-10 h-12"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                      {React.cloneElement(category.icon, {
                        className: "text-primary",
                      })}
                    </div>
                    <h3 className="font-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {category.articles} articles
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-muted-foreground mb-6">
            Our support team is available 24/7 to assist you
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Contact Support
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
