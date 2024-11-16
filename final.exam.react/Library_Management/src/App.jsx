import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Addbook from './Component/Addbook';
import AuthorList from './Component/AuthorList';
import CategoryList from './Component/CategoryList';
import BookDetails from './Component/BookDetails';
import Navbar from './Component/Navbar';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <h1>Library Management</h1>
        <Routes>
          <Route path="/authors" element={<AuthorList />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/addbook" element={<Addbook />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/Navbar" element={<Navbar />} />

           
        </Routes>
      </div>
    </Router>
  );
}

export default App;
