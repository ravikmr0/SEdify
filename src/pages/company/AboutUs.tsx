import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Student-Centric",
      description:
        "We put our students first, ensuring quality education is accessible to all.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from course content to user experience.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description:
        "Our passion for education drives us to continuously innovate and improve.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality",
      description:
        "We maintain high standards in our course content and delivery methods.",
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
            <h1 className="text-4xl font-bold mb-6">About Sigma Edify</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Empowering learners worldwide with quality education and
              innovative learning solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At Sigma Edify, we believe that quality education should be
                accessible to everyone. Our mission is to break down barriers to
                education and provide innovative learning solutions that empower
                individuals to achieve their goals.
              </p>
              <p className="text-muted-foreground">
                We work tirelessly to create a platform that connects passionate
                educators with eager learners, fostering a community of growth
                and excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Students learning"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                      {React.cloneElement(value.icon, {
                        className: "text-primary",
                      })}
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
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

export default AboutUs;
