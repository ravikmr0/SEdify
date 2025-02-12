import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  FileText,
  Building2,
  Brain,
  Trophy,
} from "lucide-react";

interface HeroSectionProps {
  onExplore?: () => void;
  onStartTrial?: () => void;
}

const HeroSection = ({
  onExplore = () => {},
  onStartTrial = () => {},
}: HeroSectionProps) => {
  const floatingIcons = [
    { icon: BookOpen, delay: 0 },
    { icon: GraduationCap, delay: 0.2 },
    { icon: FileText, delay: 0.4 },
    { icon: Building2, delay: 0.6 },
    { icon: Brain, delay: 0.8 },
    { icon: Trophy, delay: 1 },
  ];

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-[#2A3B7C] via-[#4657AD] to-[#6B4CE6] overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className="absolute text-white/20"
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: [20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              },
              opacity: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              },
              delay: item.delay,
            }}
            style={{
              left: `${index * 20 + 10}%`,
              top: `${(index % 3) * 30 + 10}%`,
            }}
          >
            <Icon size={32} />
          </motion.div>
        );
      })}

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-6 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Gateway to Government Service
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-white/80 text-center max-w-2xl mb-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Expert-led preparation for UPSC, SSC, Railway & other competitive
          exams. Join thousands of successful candidates in their journey to
          excellence.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-white text-[#2A3B7C] hover:bg-white/90"
            onClick={onExplore}
          >
            Explore Courses
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
            onClick={onStartTrial}
          >
            Start Free Trial
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
