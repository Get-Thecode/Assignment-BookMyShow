import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShowList from "./components/ShowsList";
import ShowSummary from "./components/ShowSummary";
import BookingForm from "./components/BookingForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setShows(response.data);
      } catch (error) {
        console.log("Error fetching shows:", error);
      }
    };

    fetchShows();
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ShowList shows={shows} />} />
          <Route path="/summary/:showId" element={<ShowSummary />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
