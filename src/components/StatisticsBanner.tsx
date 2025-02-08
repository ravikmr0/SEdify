import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, GraduationCap } from "lucide-react";

interface StatisticsItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface StatisticsBannerProps {
  statistics?: StatisticsItem[];
}

const StatisticsBanner = ({
  statistics = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      value: 50000,
      label: "Active Students",
      prefix: "+",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      value: 1000,
      label: "Courses Available",
      prefix: "+",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      value: 200,
      label: "Expert Instructors",
      prefix: "+",
    },
  ],
}: StatisticsBannerProps) => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg bg-gradient-to-br from-white to-slate-50 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10 ring-4 ring-primary/5">
                {stat.icon}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 + index * 0.2 }}
                className="text-4xl font-bold bg-gradient-to-r from-primary to-[#6B4CE6] bg-clip-text text-transparent mb-2"
              >
                {stat.prefix}
                {stat.value.toLocaleString()}
                {stat.suffix}
              </motion.div>
              <p className="text-slate-600 text-lg text-center font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsBanner;
