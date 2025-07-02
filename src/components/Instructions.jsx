import "../App.css";

function Instructions({ goHome }) {
  return (
    <div className="calculator">
      <h2>How to Calculate GPA & CGPA</h2>
      <div className="instructions-box">
        <p>
          <strong>📘 GPA (Grade Point Average):</strong>
        </p>
        <p>GPA = Total Grade Points ÷ Total Units</p>
        <p>
          <strong>Example:</strong>
          <br />
          - English (A = 5), 3 units
          <br />
          - Math (B = 4), 3 units
          <br />
          - Art (C = 3), 2 units
          <br />
          GPA = (5×3 + 4×3 + 3×2) ÷ (3 + 3 + 2) = 4.00
        </p>

        <p>
          <strong>📕 CGPA (Cumulative GPA):</strong>
        </p>
        <p>CGPA = Sum of (GPA × Units) ÷ Total Units across semesters</p>
        <p>
          <strong>Example:</strong>
          <br />
          - Semester 1: GPA = 4.2, Units = 20
          <br />
          - Semester 2: GPA = 3.8, Units = 22
          <br />
          CGPA = (4.2×20 + 3.8×22) ÷ 42 = 3.99
        </p>
      </div>
      <button className="back-btn" onClick={goHome}>
        ← Back
      </button>
    </div>
  );
}

export default Instructions;
