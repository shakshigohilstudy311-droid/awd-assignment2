import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <StudentCard
        name="shakshi gohil"
        course="BCA"
        semester="5th"
        email="shakshi@example.com"
        phone="9876543210"
        city="Surat"/>

      <StudentCard
        name="Hiten gohil"
        course="11th science"
        semester="1st"
        email="hiten@example.com"
        phone="8469628042"
        city="Surat"
      />

      <StudentCard
        name="Neha yadav"
        course="MBA"
        semester="2nd"
        email="neha@example.com"
        phone="9099487744"
        city="Surat"
      />
    </div>
  );
}

export default App;