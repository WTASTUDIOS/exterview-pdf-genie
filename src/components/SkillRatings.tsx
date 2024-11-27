import { Card } from "@/components/ui/card";
import StarRating from "./StarRating";

interface SkillRating {
  skill: string;
  rating: number;
  maxRating: number;
}

const skillRatings: SkillRating[] = [
  { skill: "Work-Life Balance", rating: 4, maxRating: 5 },
  { skill: "Leadership & Management", rating: 5, maxRating: 5 },
  { skill: "Innovation & Creativity", rating: 4, maxRating: 5 },
  { skill: "Career Development & Learning", rating: 4, maxRating: 5 },
  { skill: "Diversity & Inclusion", rating: 5, maxRating: 5 },
  { skill: "Employee Engagement", rating: 4, maxRating: 5 },
  { skill: "Team Collaboration", rating: 5, maxRating: 5 },
  { skill: "Recognition & Rewards", rating: 4, maxRating: 5 },
  { skill: "Company Values & Ethics", rating: 5, maxRating: 5 },
  { skill: "Work Environment & Facilities", rating: 4, maxRating: 5 },
];

const SkillRatings = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skillRatings.map((item, index) => (
        <Card key={index} className="p-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">{item.skill}</span>
            <StarRating rating={item.rating} maxRating={item.maxRating} />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SkillRatings;