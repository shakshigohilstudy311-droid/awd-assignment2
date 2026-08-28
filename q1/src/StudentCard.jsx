import { useState } from "react";

function StudentCard({ name, course, semester, email, phone, city }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <h2>Student Profile</h2>

      <p>Name: {name}</p>
      <p>Course: {course}</p>
      <p>Semester: {semester}</p>

      {showDetails && (
        <div>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>City: {city}</p>
        </div>
      )}

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
}

export default StudentCard;