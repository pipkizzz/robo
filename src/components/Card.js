//import React from 'react';

const Card = ({ id, name, email, city }) => {
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
          <img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
          <div>
              <h2>{name}</h2>
              <p>{email}</p>
              <p>From: {city}</p>
          </div>
      </div>
    );
}

export default Card;