import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Partners = () => {
  const partners = [
    {
      name: "Harvard University",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=128&h=128&fit=crop&q=80",
      type: "Academic",
      courses: 45,
      students: "10K+",
    },
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=128&h=128&fit=crop&q=80",
      type: "Industry",
      courses: 28,
      students: "15K+",
    },
    {
      name: "Stanford University",
      logo: "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?w=128&h=128&fit=crop&q=80",
      type: "Academic",
      courses: 35,
      students: "8K+",
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
            <h1 className="text-4xl font-bold mb-6">Our Partners</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Collaborating with leading institutions and organizations to
              deliver quality education
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Become a Partner
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">{partner.name}</h3>
                        <Badge variant="secondary">{partner.type}</Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Courses</p>
                        <p className="font-semibold">{partner.courses}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Students
                        </p>
                        <p className="font-semibold">{partner.students}</p>
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

export default Partners;
