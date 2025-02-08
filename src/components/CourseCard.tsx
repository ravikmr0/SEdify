import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";

interface CourseCardProps {
  thumbnail?: string;
  title?: string;
  instructor?: {
    name: string;
    avatar: string;
  };
  rating?: number;
  price?: number;
  category?: string;
}

const CourseCard = ({
  thumbnail = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  title = "Introduction to Machine Learning",
  instructor = {
    name: "Dr. Jane Smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
  },
  rating = 4.8,
  price = 99.99,
  category = "Technology",
}: CourseCardProps) => {
  return (
    <Card className="w-full max-w-[360px] h-[380px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge className="absolute top-4 right-4 bg-primary/90">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={instructor.avatar} alt={instructor.name} />
            <AvatarFallback>{instructor.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">
            {instructor.name}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-lg font-bold">${price.toFixed(2)}</span>
        <Badge
          variant="secondary"
          className="hover:bg-secondary/80 cursor-pointer"
        >
          View Details
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
