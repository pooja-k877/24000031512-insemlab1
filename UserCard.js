import React from "react";

function UserCard({ name, age, bio }) {
  const cardStyle = {
    border: "2px solid #021303ff",
    borderRadius: "10px",
    padding: "20px",
    width: "250px",
    textAlign: "center",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif"
  };

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p><i>{bio}</i></p>
    </div>
  );
}

export default UserCard;
