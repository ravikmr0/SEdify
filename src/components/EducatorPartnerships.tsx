import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Brush, Layout, Users, BarChart, Award, Shield } from "lucide-react";

const features = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Course Creation Tools",
    description: "Intuitive tools to build and manage your courses",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Student Management",
    description: "Track progress and engage with your students",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Analytics Dashboard",
    description: "Detailed insights into student performance",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Certification Tools",
    description: "Create and issue custom certificates",
  },
  {
    icon: <Brush className="h-6 w-6" />,
    title: "Customization",
    description: "Brand your course portal your way",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Revenue Protection",
    description: "Secure payment handling and content protection",
  },
];

const partners = [
  {
    name: "Harvard University",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=128&h=128&fit=crop&q=80",
  },
  {
    name: "MIT",
    logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=128&h=128&fit=crop&q=80",
  },
  {
    name: "Stanford University",
    logo: "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?w=128&h=128&fit=crop&q=80",
  },
  {
    name: "Oxford University",
    logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=128&h=128&fit=crop&q=80",
  },
];

const EducatorPartnerships = () => {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our network of world-class educators and institutions. Get the
            tools you need to create, manage, and scale your online courses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    {React.cloneElement(feature.icon, {
                      className: "text-primary",
                    })}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-2xl font-semibold">
            Trusted by Leading Institutions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-card backdrop-blur-sm border border-border hover:border-primary/20 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-16 w-16 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="mt-2 text-sm text-muted-foreground text-center">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
          <div className="pt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Become a Partner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducatorPartnerships;
