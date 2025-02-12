import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const featuredPosts = [
    {
      title: "The Future of Online Learning in 2024",
      excerpt:
        "Explore the latest trends and innovations shaping the landscape of online education.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      category: "Education",
      author: {
        name: "Sarah Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      },
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    // Add more featured posts
  ];

  const recentPosts = [
    {
      title: "10 Tips for Effective Online Learning",
      excerpt:
        "Master the art of online learning with these proven strategies and techniques.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Study Tips",
      author: {
        name: "John Doe",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
      },
      date: "March 10, 2024",
      readTime: "4 min read",
    },
    // Add more recent posts
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
            <h1 className="text-4xl font-bold mb-6">Sigma Edify Blog</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, tips, and news from the world of online education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardHeader className="p-0">
                    <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <Badge className="absolute top-4 right-4 bg-primary/90">
                        {post.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={post.author.avatar}
                            alt={post.author.name}
                          />
                          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">
                            {post.author.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {post.date}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <Badge className="absolute top-4 right-4 bg-primary/90">
                        {post.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src={post.author.avatar}
                            alt={post.author.name}
                          />
                          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">
                          {post.author.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {post.readTime}
                      </span>
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

export default Blog;
