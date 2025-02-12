import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  GraduationCap,
  BookOpen,
  Building2,
  Briefcase,
  Scale,
  Train,
} from "lucide-react";

const categories = [
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "UPSC",
    description: "Civil Services, IAS, IPS, IFS",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "SSC",
    description: "CGL, CHSL, MTS, CPO",
    color: "from-green-500 to-green-600",
  },
  {
    icon: <Train className="h-8 w-8" />,
    title: "Railways",
    description: "RRB, Group D, NTPC",
    color: "from-red-500 to-red-600",
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Banking",
    description: "IBPS, SBI, RBI",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <Scale className="h-8 w-8" />,
    title: "State PSC",
    description: "State Civil Services",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Defence",
    description: "NDA, CDS, AFCAT",
    color: "from-teal-500 to-teal-600",
  },
];

const ExamCategories = () => {
  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Prepare for Top Government Exams
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive study materials and mock tests for all major
            competitive exams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
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
                    className={`rounded-xl p-4 bg-gradient-to-br ${category.color} text-white mb-4 transform group-hover:scale-105 transition-all duration-300`}
                  >
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm w-fit">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">Live Classes</Badge>
                    <Badge variant="secondary">Study Material</Badge>
                    <Badge variant="secondary">Mock Tests</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamCategories;
