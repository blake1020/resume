import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterPage from "./components/CharacterPage";
import CharacterCard from "./components/CharacterCard";
import Navbar from "./app/Navbar";
import BookReviewPage from "./components/BookReviewPage";
import MythicalCreaturePage from "./components/MythicalCreaturePage";
import HomePage from "./components/HomePage";
import CharacterCarousel from "./components/CharacterCarousel";
import axios from "axios";

// const bookList = [
//   { id: '1', title: 'The Lightning Thief' },
//   { id: '2', title: 'The Sea of Monsters' },
//   { id: '3', title: 'The Titan\'s Curse' },
// ];

function App() {
  const [selectedBook, setSelectedBook] = useState("");
  const [character, setCharacters] = useState(null);
  const [reviews, setReviews] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const handleBookChange = (event) => {
    setSelectedBook(event.target.value);
  };

  // useEffect(() => {
  //   if (selectedBook) {
  //     const fetchReviews = () => {
  //       setLoading(true);
  //       try {
  //         // Simulating fetching data from the backend
  //         const bookReviews = reviewsData[selectedBook] || [];
  //         setReviews(bookReviews);
  //       } catch (error) {
  //         setError('Failed to load reviews');
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchReviews();
  //   }
  // }, [selectedBook]);
  useEffect(() => {
    console.log(selectedBook);
  }, [selectedBook]);

  // useEffect(() => {
  //   fetchCharacters()
  // }, [])

  // if (!selectedBook) {
  //   return (
  //     <div>
  //       <h1>Book Reviews</h1>
  //       <label htmlFor="bookSelect">Select a Book: </label>
  //       <select
  //         id="bookSelect"
  //         value={selectedBook}
  //         onChange={handleBookChange}
  //       >
  //         <option value="">Select a book</option>
  //         {bookList.map((book) => (
  //           <option key={book.id} value={book.title}>
  //             {book.title}
  //           </option>
  //         ))}
  //       </select>
  //     </div>
  //   );
  // }

  const fetchCharacters = async () => {
    //fetch reviews
    const res = await axios.get("http://localhost:3002/characters");
    //set to state
    console.log(res);
  };

  //example book infomation/Problems connect to Mongodb in server file
  const bookTitles = [
    { id: "1", title: "The Lightning Thief" },
    { id: "2", title: "The Sea of Monsters" },
    { id: "3", title: "The Titan's Curse" },
  ];

  return (
    <div>
      <Router>
        <Navbar selectedBook={selectedBook} onBookChange={handleBookChange} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharacterPage />} />
          <Route
            path="/bookReviews"
            element={<BookReviewPage selectedBook={selectedBook} />}
          />
          <Route path="/mythicalCreatures" element={<MythicalCreaturePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
