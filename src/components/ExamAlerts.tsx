import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Bell, BookOpen, Target, Lightbulb } from "lucide-react";

const features = [
  {
    icon: <Bell className="h-8 w-8" />,
    title: "Important Updates",
    description:
      "Get timely notifications about exam dates, admit cards, and result announcements",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Free Resources",
    description: "Access free mock tests, sample papers, and study guides",
    color: "from-green-500 to-green-600",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Exam Strategies",
    description: "Expert tips and strategies to crack your target exams",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Cost-Effective Plans",
    description:
      "High-quality education at affordable prices with flexible payment options",
    color: "from-yellow-500 to-yellow-600",
  },
];

const ExamAlerts = () => {
  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Stay Updated & Prepared</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Never miss important exam updates and get access to free study
            resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

export default ExamAlerts;
