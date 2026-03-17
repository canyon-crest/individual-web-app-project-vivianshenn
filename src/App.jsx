// App.jsx
import React from "react";
import Message from "./Message"; // import the Message component

function App() {
  return (
    <div>
      <h1>Welcome to My React App!</h1>

      {/* Passing props to the Message component */}
      <Message text="Hello there! Hope you’re having a great day!" name="Vivian" />
      <Message text="React props are so cool!" name="Vivian" />
    </div>
  );
}

export default App;
