import React from 'react'

import  { useEffect, useState } from 'react';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('/api/categories');
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const addCategory = async (e) => {
    e.preventDefault();
    await fetch('/api/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newCategory }),
    });
    setNewCategory('');
    // Re-fetch categories after adding
    const response = await fetch('/api/categories');
    const data = await response.json();
    setCategories(data);
  };
  return (
    <div>
    <h2>Categories</h2>
    <ul>
      {categories.map(category => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
    <form onSubmit={addCategory}>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="New Category Name"
        required
      />
      <button type="submit">Add Category</button>
    </form>
  </div>
  )
}

export default CategoryList