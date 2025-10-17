import React from "react";
import UserCard from "./UserCard"; // import your component

function App() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Simple Profile Card</h2>

      {/* Your card component */}
      <UserCard 
        name="Poojaswini Kummara"
        age={18}
        bio="A passionate learner exploring React and web development."
      />
    </div>
  );
}

export default App;
