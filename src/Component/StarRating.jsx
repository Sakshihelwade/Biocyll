import StarRatings from 'react-star-ratings';

const StarRating = ({star}) => {
  return (
    <StarRatings
      numberOfStars={5}  // Number of stars to display
      rating={star}
      starRatedColor="orange"  // Disable user input
      starDimension="20px"
      starSpacing="0px"
    />
  );
};

export default StarRating;