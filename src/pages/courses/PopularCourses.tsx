import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import CourseCard from "@/components/CourseCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Share2,
  Award,
  BookOpen,
  Users,
  Star,
  Play,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PopularCourses = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [sortedCourses, setSortedCourses] = React.useState(courses);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Parse URL parameters
    const params = new URLSearchParams(location.search);
    const sort = params.get("sort");

    if (sort === "new") {
      setSortedCourses(
        [...courses].sort(
          (a, b) =>
            new Date(b.lastUpdated).getTime() -
            new Date(a.lastUpdated).getTime(),
        ),
      );
    } else {
      setSortedCourses([...courses]);
    }
  }, [location.search]);
  const categories = [
    "All Courses",
    "Technology",
    "Business",
    "Design",
    "Marketing",
    "Personal Development",
  ];

  const courses = [
    {
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "Machine Learning Fundamentals",
      instructor: {
        name: "Dr. Jane Smith",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
      },
      rating: 4.8,
      price: 99.99,
      category: "Technology",
      students: "15K+",
      lastUpdated: "March 2024",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "Complete Web Development Bootcamp 2024",
      instructor: {
        name: "John Doe",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
      },
      rating: 4.9,
      price: 89.99,
      category: "Technology",
      students: "20K+",
      lastUpdated: "March 2024",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
      title: "Digital Marketing Masterclass",
      instructor: {
        name: "Sarah Wilson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      },
      rating: 4.7,
      price: 79.99,
      category: "Marketing",
      students: "12K+",
      lastUpdated: "February 2024",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      title: "Data Science for Beginners",
      instructor: {
        name: "Emily Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      },
      rating: 4.9,
      price: 109.99,
      category: "Technology",
      students: "18K+",
      lastUpdated: "March 2024",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      title: "UI/UX Design Principles",
      instructor: {
        name: "Alex Turner",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      },
      rating: 4.8,
      price: 84.99,
      category: "Design",
      students: "10K+",
      lastUpdated: "March 2024",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      title: "Business Strategy Fundamentals",
      instructor: {
        name: "Michael Brown",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      },
      rating: 4.6,
      price: 94.99,
      category: "Business",
      students: "8K+",
      lastUpdated: "February 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-6">Popular Courses</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our most popular courses and start your learning journey
              today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "secondary"}
                className="text-sm py-2 px-4 cursor-pointer hover:bg-primary/90"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 3).map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative overflow-hidden group">
                  <div className="relative h-48">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm" className="gap-2">
                        <Play className="h-4 w-4" /> Preview Course
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2">{course.category}</Badge>
                    <h3 className="text-xl font-semibold mb-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={course.instructor.avatar} />
                        <AvatarFallback>
                          {course.instructor.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">
                        {course.instructor.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {course.students}
                        </span>
                      </div>
                      <span className="font-bold">${course.price}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Featured Course</Badge>
              <h2 className="text-3xl font-bold mb-4">
                Machine Learning Fundamentals
              </h2>
              <p className="text-muted-foreground mb-6">
                Master the essentials of machine learning with hands-on projects
                and real-world applications.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>12 comprehensive modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>Industry-recognized certification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span>Career support and job placement</span>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Learning
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Course Preview"
                className="rounded-lg shadow-xl"
              />
              <Button
                size="icon"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-primary hover:bg-white/90 h-16 w-16 rounded-full shadow-lg"
              >
                <Play className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Highlights */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Learn from Industry Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.slice(0, 4).map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src={course.instructor.avatar} />
                  <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold mb-2">{course.instructor.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {course.category} Expert
                </p>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span>{course.rating} Instructor Rating</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Data Scientist at Google",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
                testimonial:
                  "The machine learning course completely transformed my career path. I went from a beginner to landing my dream job.",
              },
              {
                name: "Michael Chen",
                role: "Frontend Developer",
                avatar:
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
                testimonial:
                  "The practical projects and hands-on approach made learning web development both effective and enjoyable.",
              },
              {
                name: "Emily Rodriguez",
                role: "UX Designer",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
                testimonial:
                  "The design courses helped me build a strong portfolio that got me noticed by top companies.",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-16 w-16 mx-auto mb-4">
                      <AvatarImage src={story.avatar} />
                      <AvatarFallback>{story.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold mb-1">{story.name}</h3>
                    <p className="text-sm text-primary mb-4">{story.role}</p>
                    <p className="text-muted-foreground italic">
                      "{story.testimonial}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4">Limited Time Offer</Badge>
          <h2 className="text-3xl font-bold mb-4">Get 20% Off All Courses</h2>
          <p className="text-muted-foreground mb-8">
            Use code LEARN20 at checkout
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Claim Offer
          </Button>
        </div>
      </section>

      {/* Certification Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Industry Recognition</Badge>
              <h2 className="text-3xl font-bold mb-6">
                Get Certified & Advance Your Career
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Accredited Certifications
                    </h3>
                    <p className="text-muted-foreground">
                      Earn industry-recognized certificates upon course
                      completion
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Briefcase className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Career Support</h3>
                    <p className="text-muted-foreground">
                      Get personalized career guidance and job placement
                      assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {["Microsoft", "Google", "IBM", "Amazon"].map(
                (partner, index) => (
                  <Card
                    key={index}
                    className="flex items-center justify-center p-8"
                  >
                    <h3 className="text-xl font-semibold text-muted-foreground">
                      {partner}
                    </h3>
                  </Card>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PopularCourses;
