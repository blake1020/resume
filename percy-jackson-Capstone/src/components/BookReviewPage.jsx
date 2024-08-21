import React, { useState, useEffect } from "react";

// //import temp book covers
// import lightningThiefCover from '../src/app/assets/images/percy-jackson-lightning.jpg'
// import seaOfMonsters from '../src/app/assest/images/percy-jackson-sea-of-monsters.jpg'

// Hardcoded book reviews data til database fixed
const reviewsData = {
  "1": [
    {
      reviewerName: "John Doe",
      rating: "Fantastic",
      content:
        "An exciting start to the series with a fantastic blend of action and mythology.",
    },
    {
      reviewerName: "Jane Smith",
      rating: "Great",
      content:
        "The character development is top-notch, making you care deeply about the protagonists.",
    },
  ],
  "2": [
    {
      reviewerName: "Alice Brown",
      rating: "Great",
      content:
        "A thrilling continuation of the story with even more intense adventures and twists.",
    },
    {
      reviewerName: "Bob Johnson",
      rating: "Okay",
      content:
        "The plot thickens and the stakes get higher, keeping readers on the edge of their seats.",
    },
  ],
  "3": [
    {
      reviewerName: "Charlie Davis",
      rating: "Fantastic",
      content:
        "An epic conclusion to the initial trilogy with plenty of surprises and resolutions.",
    },
    {
      reviewerName: "Dana Lee",
      rating: "Great",
      content:
        "This book provides many memorable moments and a satisfying end to the series.",
    },
  ],
};

// Percy Jackson book titles
const bookTitles = {
  "1": "The Lightning Thief",
  "2": "The Sea of Monsters",
  "3": "The Titan's Curse",
};

// Ratings options
const ratings = ["Fantastic", "Great", "Okay", "Bad", "Terrible"];

function BookReviewPage() {
  const [selectedBook, setSelectedBook] = useState("");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [userRating, setUserRating] = useState("Fantastic");
  const [reviewContent, setReviewContent] = useState("");

  // Simulate fetching book list data
  const bookList = [
    { id: "1", title: "The Lightning Thief" },
    { id: "2", title: "The Sea of Monsters" },
    { id: "3", title: "The Titan's Curse" },
  ];

  useEffect(() => {
    if (selectedBook) {
      const fetchReviews = () => {
        setLoading(true);
        try {
          // Simulating fetching data from the backend
          const bookReviews = reviewsData[selectedBook] || [];
          setReviews(bookReviews);
        } catch (error) {
          setError("Failed to load reviews");
        } finally {
          setLoading(false);
        }
      };

      fetchReviews();
    }
  }, [selectedBook]);

  const handleBookChange = (event) => {
    setSelectedBook(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleRatingChange = (event) => {
    setUserRating(event.target.value);
  };

  const handleReviewContentChange = (event) => {
    setReviewContent(event.target.value);
  };

  const handleSubmitReview = () => {
    if (username && reviewContent) {
      const newReview = {
        reviewerName: username,
        rating: userRating,
        content: reviewContent,
      };
      setReviews([...reviews, newReview]);
      setUsername("");
      setUserRating("Fantastic");
      setReviewContent("");
    } else {
      alert("Please enter your name and review content.");
    }
  };

  const selectedBookDetails = bookList.find((book) => book.id === selectedBook);
  console.log(bookList);

  if (!selectedBook) {
    return (
      <div>
        <h1>Book Reviews</h1>
        <label htmlFor="bookSelect">Select a Book: </label>
        <select
          id="bookSelect"
          value={selectedBook}
          onChange={handleBookChange}
        >
          <option value="">Select a book</option>
          {bookList.map((book) => (
            <option key={book.id} value={book.id}>
              {book.title}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (loading) return <div>Loading reviews...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Reviews for {bookTitles[selectedBook]}</h1>
      <img
        src={selectedBookDetails.cover}
        alt={`Cover of ${selectedBookDetails.title}`}
        style={{ width: "200px", height: "auto" }}
      />

      <div>
        <label htmlFor="username">Enter your name: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="rating">Rating: </label>
        <select id="rating" value={userRating} onChange={handleRatingChange}>
          {ratings.map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="reviewContent">Your Review: </label>
        <textarea
          id="reviewContent"
          value={reviewContent}
          onChange={handleReviewContentChange}
          placeholder="Write your review here"
        />
      </div>
      <button onClick={handleSubmitReview}>Submit Review</button>
      <h2>Book Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <strong>Reviewer: {review.reviewerName}</strong>
              <br />
              <strong>Rating: {review.rating}</strong>
              <br />
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this book.</p>
      )}
    </div>
  );
}

export default BookReviewPage;
