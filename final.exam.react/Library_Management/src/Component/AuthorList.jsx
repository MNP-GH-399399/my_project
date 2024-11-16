import React from 'react'
import  { useEffect, useState } from 'react';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);
  const [newAuthor, setNewAuthor] = useState('');

  useEffect(() => {
    const fetchAuthors = async () => {
      const response = await fetch('/api/authors');
      const data = await response.json();
      setAuthors(data);
    };

    fetchAuthors();
  }, []);

  const addAuthor = async (e) => {
    e.preventDefault();
    await fetch('/api/authors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newAuthor }),
    });
    setNewAuthor('');
    // Re-fetch authors after adding
    const response = await fetch('/api/authors');
    const data = await response.json();
    setAuthors(data);
  };
  return (
    <div>

    <h2>Authors</h2>
      <ul>
        {authors.map(author => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
      <form onSubmit={addAuthor}>
        <input
          type="text"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          placeholder="New Author Name"
          required
        />
        <button type="submit">Add Author</button>
      </form>
      </div>
  )
}

export default AuthorList