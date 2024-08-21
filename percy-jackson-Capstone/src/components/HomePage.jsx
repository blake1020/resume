import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../css/Homepage.css'
import book1Cover from '../assests/images/percy-jackson-lightning-thief.jpg'
import book2Cover from '../assests/images/percy-jackson-sea-of-monsters.jpg'
import book3Cover from '../assests/images/percy-jackson-the-titans-curse.jpg'
import book4Cover from '../assests/images/percy-jackson-battle-of-labyrinth.jpg'
import book5Cover from '../assests/images/percy-jackson-the-last-olympian.jpg'


function HomePage () {
    const [books] = useState([
      {
        id: 1,
        cover: book1Cover,
        blurb: 'This is a blurb about Percy Jackson Book 1. It\'s a thrilling story about a demigod\'s adventures...'
      },
      {
        id: 2,
        cover: book2Cover,
        blurb: 'This is a blurb about Percy Jackson Book 2. The adventure continues as Percy faces new challenges...'
      },
      {
        id: 3,
        cover: book3Cover,
        blurb: 'This is a blurb about Percy Jackson Book 3. The adventure continues as Percy faces new challenges...'
      },
      {
        id: 4,
        cover: book4Cover,
        blurb: 'This is a blurb about Percy Jackson Book 4. The adventure continues as Percy faces new challenges...'
      },
      {
        id: 5,
        cover: book5Cover,
        blurb: 'This is a blurb about Percy Jackson Book 5. The adventure continues as Percy faces new challenges...'
      }

    ]);
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)
    const [flippedBook, setFlippedBook] = useState(null)

    const handleClick = (id) => {
      setFlippedBook(flippedBook === id ? null: id)
    }


    useEffect(() => {
        //fetch api data
        axios.get('')
    })
    return (
      <div className="book-container">
        {books.map((book) => (
          <div
            key={book.id}
            className={`book ${flippedBook === book.id ? 'flipped' : ''}`}
            onClick={() => handleClick(book.id)}
          >
            <div className="cover">
              <img src={book.cover} alt={`Percy Jackson Book ${book.id}`} />
            </div>
            <div className="content">
              <p>{book.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    );
}

export default HomePage