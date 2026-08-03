import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";

import "./index.css";
import App from "./App";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test />
    <StarRating
      maxRating={5}
      messages={["Terible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={5}
      color="red"
      size={24}
      className="test"
      defaultRating={3}
    /> */}
  </React.StrictMode>,
);
