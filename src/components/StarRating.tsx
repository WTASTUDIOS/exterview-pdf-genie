import React from "react";

interface StarRatingProps {
  rating: number;
  maxRating: number;
}

const StarRating = ({ rating, maxRating }: StarRatingProps) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxRating }).map((_, starIndex) => (
        <svg
          key={starIndex}
          className={`w-5 h-5 ${
            starIndex < rating
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
  );
};

export default StarRating;