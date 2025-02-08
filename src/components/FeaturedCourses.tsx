import React from "react";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";

interface Course {
  id: string;
  thumbnail: string;
  title: string;
  instructor: {
    name: string;
    avatar: string;
  };
  rating: number;
  price: number;
  category: string;
}

interface FeaturedCoursesProps {
  courses?: Course[];
}

const defaultCourses: Course[] = [
  {
    id: "1",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    title: "Introduction to Machine Learning",
    instructor: {
      name: "Dr. Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    },
    rating: 4.8,
    price: 99.99,
    category: "Technology",
  },
  {
    id: "2",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Web Development Bootcamp",
    instructor: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    },
    rating: 4.9,
    price: 89.99,
    category: "Programming",
  },
  {
    id: "3",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    title: "Digital Marketing Essentials",
    instructor: {
      name: "Sarah Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    rating: 4.7,
    price: 79.99,
    category: "Marketing",
  },
  {
    id: "4",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    title: "Business Strategy Fundamentals",
    instructor: {
      name: "Michael Brown",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    rating: 4.6,
    price: 94.99,
    category: "Business",
  },
  {
    id: "5",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    title: "Data Science for Beginners",
    instructor: {
      name: "Emily Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    },
    rating: 4.9,
    price: 109.99,
    category: "Data Science",
  },
  {
    id: "6",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    title: "UX/UI Design Principles",
    instructor: {
      name: "Alex Turner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    },
    rating: 4.8,
    price: 84.99,
    category: "Design",
  },
];

const FeaturedCourses = ({
  courses = defaultCourses,
}: FeaturedCoursesProps) => {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular courses and start your learning journey
            today
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-4 sm:px-6 lg:px-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CourseCard
                thumbnail={course.thumbnail}
                title={course.title}
                instructor={course.instructor}
                rating={course.rating}
                price={course.price}
                category={course.category}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
