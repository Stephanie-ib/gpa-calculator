function Home({ setPage }) {
  return (
    <div className="home">
      <h1>GPA & CGPA Calculator</h1>
      <button onClick={() => setPage("gpa")}>Calculate GPA</button>
      <button onClick={() => setPage("cgpa")}>Calculate CGPA</button>
      <button onClick={() => setPage("instructions")}>How to Calculate</button>
    </div>
  );
}

export default Home;
