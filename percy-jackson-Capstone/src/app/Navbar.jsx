import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";

const bookList = [
  { id: "1", title: "The Lightning Thief" },
  { id: "2", title: "The Sea of Monsters" },
  { id: "3", title: "The Titan's Curse" },
];

function Navbar({ selectedBook, onBookChange }) {
  // const location = useLocation()
  // const isBookReviewPage = location.pathname === '/bookReviews'
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/characters" className="navbar-link">
          Characters
        </Link>
        <Link to="/bookReviews" className="navbar-link">
          Book Reviews
        </Link>
        <Link to="/mythicalCreatures" className="navbar-link">
          Mythical Creatures
        </Link>

        <div className="dropdown-container">
          <label htmlFor="bookSelect">Select a Book: </label>
          <select id="bookSelect" value={selectedBook} onChange={onBookChange}>
            <optgroup label="Select A Book">
              {bookList.map((book) => (
                <option key={book.id} value={book.title}>
                  {book.title}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
