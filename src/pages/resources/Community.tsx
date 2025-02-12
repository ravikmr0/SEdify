import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Rocket, Trophy } from "lucide-react";

const Community = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Study Groups",
      description:
        "Connect with fellow learners and form study groups for collaborative learning.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Discussion Forums",
      description:
        "Engage in meaningful discussions about course content and share insights.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Learning Challenges",
      description:
        "Participate in weekly challenges to test your knowledge and win rewards.",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Achievement System",
      description:
        "Earn badges and certificates as you progress through your learning journey.",
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
            <h1 className="text-4xl font-bold mb-6">Join Our Community</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect, learn, and grow with fellow students and educators from
              around the world.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Join Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                      {React.cloneElement(feature.icon, {
                        className: "text-primary",
                      })}
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Active Members", value: "50K+" },
              { label: "Study Groups", value: "1,000+" },
              { label: "Daily Discussions", value: "5K+" },
              { label: "Countries", value: "100+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
