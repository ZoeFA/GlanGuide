import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import './App.css';

export default function App() {

  return (
    <Router>
      <div className="app-container" aria-label="Glán Guide app homepage">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="articles/:articleId" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}


