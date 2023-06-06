import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookingForm from './BookingForm';

function ShowSummary() {
  const { showId } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
        setShow(response.data);
      } catch (error) {
        console.log('Error fetching show:', error);
      }
    };

    fetchShow();
  }, [showId]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="text-center">Show Summary</h2>
      <div className="card">
        <img src={show.image.medium} className="card-img-top" alt={show.name} />
        <div className="card-body">
          <h3 className="card-title">{show.name}</h3>
          <p className="card-text">{show.summary}</p>
          <p className="card-text">
            <strong>Type: </strong>
            {show.type}
          </p>
          <p className="card-text">
            <strong>Language: </strong>
            {show.language}
          </p>
          <p className="card-text">
            <strong>Genres: </strong>
            {show.genres.join(', ')}
          </p>
          <p className="card-text">
            <strong>Status: </strong>
            {show.status}
          </p>
          <BookingForm/>
        </div>
      </div>
    </div>
  );
}

export default ShowSummary;
