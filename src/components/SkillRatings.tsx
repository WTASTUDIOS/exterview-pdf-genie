import { Card } from "@/components/ui/card";

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
            <div className="flex space-x-1">
              {Array.from({ length: item.maxRating }).map((_, starIndex) => (
                <svg
                  key={starIndex}
                  className={`w-5 h-5 ${
                    starIndex < item.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SkillRatings;