import React from 'react'
import { useState, useEffect } from 'react'
// import React, { useEffect, useState } from 'react';

const BookDetails = () =>  {
  const [books, setBooks] = useState([
      {
          id: 1,
          Title: "nelambari",
          Description: "A young boy discovers he is a wizard.",
          PublicationYear: 1997,
          Author: { id: 1, name: "sugatha kumari" },
          Category: { id: 1, name: "poem" }
      },
      {
          id: 2,
          Title: "A Game of Thrones",
          Description: "A tale of power and betrayal.",
          PublicationYear: 1996,
          Author: { id: 2, name: "George R.R. Martin" },
          Category: { id: 2, name: "Fantasy" }
      }
  ]);

  useEffect(() => {
      const fetchBooks = async () => {
          try {
              const response = await fetch('https://localhost:7089/api/Book' ); // Adjust the URL as needed
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setBooks(data);
          } catch (error) {
              console.error('Error fetching books:', error);
          }
      };

      fetchBooks();
  }, []);
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  )
}

export default BookDetails