import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  GraduationCap,
  BookOpen,
  Brain,
  Smartphone,
  Trophy,
  FileCheck,
} from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Expert Faculty",
    description: "Learn from India's top educators",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Comprehensive Study Material",
    description: "Notes, current affairs, and practice questions",
    color: "from-green-500 to-green-600",
  },
  {
    icon: <FileCheck className="h-8 w-8" />,
    title: "Mock Test Series",
    description: "Real exam pattern tests with detailed analysis",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI-Driven Analytics",
    description: "Track your progress and improve faster",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Learn Anytime, Anywhere",
    description: "Mobile app and offline access",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: "Proven Results",
    description: "Thousands of successful aspirants",
    color: "from-red-500 to-red-600",
  },
];

const Features = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Sigma Edify?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive features designed for your success in competitive
            exams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div
                    className={`rounded-xl p-4 bg-gradient-to-br ${feature.color} text-white mb-4 transform group-hover:scale-105 transition-all duration-300`}
                  >
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm w-fit">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
