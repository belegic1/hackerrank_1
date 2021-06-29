import React, { useState } from 'react';

function Slides({ slides }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          onClick={(e) => setCount(0)}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button
          onClick={(e) => setCount(count - 1)}
          data-testid="button-prev"
          className="small"
          disabled={count <= 0}
        >
          Prev
        </button>
        <button
          onClick={(e) => setCount(count + 1)}
          data-testid="button-next"
          className="small"
          disabled={count == slides.length - 1}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[count].title}</h1>
        <p data-testid="text">{slides[count].text}</p>
      </div>
    </div>
  );
}

export default Slides;
