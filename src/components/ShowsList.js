import React from 'react';
import { Link } from 'react-router-dom';

function ShowList({ shows }) {
  return (
    <div className="container">
      <h2 className="text-center">Show List</h2>
      <div className="row">
        {shows.map((show) => (
          <div key={show.show.id} className="col-md-6">
            <div className="card mb-4">
              <img src={show.show.image.medium} className="card-img-top" alt={show.show.name} />
              <div className="card-body">
                <h3 className="card-title">{show.show.name}</h3>
                <p className="card-text">{show.show.summary}</p>
                <p className="card-text">
                  <strong>ID: </strong>
                  {show.show.id}
                </p>
                <p className="card-text">
                  <strong>Type: </strong>
                  {show.show.type}
                </p>
                <p className="card-text">
                  <strong>Language: </strong>
                  {show.show.language}
                </p>
                <p className="card-text">
                  <strong>Genres: </strong>
                  {show.show.genres.join(', ')}
                </p>
                <p className="card-text">
                  <strong>Status: </strong>
                  {show.show.status}
                </p>
                <p className="card-text">
                  <strong>Runtime: </strong>
                  {show.show.runtime} minutes
                </p>
                <p className="card-text">
                  <strong>Average Runtime: </strong>
                  {show.show.averageRuntime} minutes
                </p>
                <p className="card-text">
                  <strong>Premiered: </strong>
                  {show.show.premiered}
                </p>
                <p className="card-text">
                  <strong>Ended: </strong>
                  {show.show.ended || 'N/A'}
                </p>
                <p className="card-text">
                  <strong>Rating: </strong>
                  {show.show.rating.average}
                </p>
                
                <p className="card-text">
                  <strong>Official Site: </strong>
                  <a href={show.show.officialSite} target="_blank" rel="noopener noreferrer">
                    {show.show.officialSite}
                  </a>
                </p>
                <p className="card-text">
                  <strong>Schedule: </strong>
                  {show.show.schedule.time} - {show.show.schedule.days.join(', ')}
                </p>
                <p className="card-text">
                  <strong>Weight: </strong>
                  {show.show.weight}
                </p>
                
                <Link to={`/summary/${show.show.id}`} className="btn btn-primary">
                  View Summary
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
