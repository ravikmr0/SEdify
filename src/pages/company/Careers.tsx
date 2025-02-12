import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Careers = () => {
  const departments = [
    "Engineering",
    "Product",
    "Design",
    "Marketing",
    "Sales",
    "Customer Success",
  ];

  const openings = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "New York, USA",
      type: "Full-time",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "London, UK",
      type: "Full-time",
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
            <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Help us shape the future of education. We're looking for
              passionate individuals who want to make a difference.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Departments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-semibold">{dept}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Open Positions
          </h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">{job.department}</Badge>
                          <Badge variant="secondary">{job.location}</Badge>
                          <Badge variant="secondary">{job.type}</Badge>
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90">
                        Apply Now
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

export default Careers;
