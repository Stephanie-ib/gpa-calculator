import { useState } from "react";
import "../App.css";

function CGPACalculator({ goHome }) {
  const [semesters, setSemesters] = useState([{ gpa: "", units: "" }]);
  const [calculatedCGPA, setCalculatedCGPA] = useState(null);

  const handleChange = (index, field, value) => {
    const updated = [...semesters];
    updated[index][field] = value;
    setSemesters(updated);
  };

  const addSemester = () => {
    setSemesters([...semesters, { gpa: "", units: "" }]);
  };

  const removeSemester = (index) => {
    const updated = [...semesters];
    updated.splice(index, 1);
    setSemesters(updated);
  };

  const calculateCGPA = () => {
    let totalPoints = 0;
    let totalUnits = 0;

    semesters.forEach((s) => {
      const gpa = parseFloat(s.gpa);
      const units = parseInt(s.units);
      if (!isNaN(gpa) && !isNaN(units)) {
        totalPoints += gpa * units;
        totalUnits += units;
      }
    });

    if (totalUnits === 0) {
      setCalculatedCGPA("0.00");
    } else {
      setCalculatedCGPA((totalPoints / totalUnits).toFixed(2));
    }
  };

  const totalUnits = semesters.reduce(
    (sum, s) => sum + (parseInt(s.units) || 0),
    0
  );

  return (
    <div className="calculator">
      <h2>CGPA Calculator</h2>

      {semesters.map((s, index) => (
        <div className="input-row" key={index}>
          <input
            type="number"
            step="0.01"
            value={s.gpa}
            onChange={(e) => handleChange(index, "gpa", e.target.value)}
            placeholder="Semester GPA"
          />

          <select
            value={s.units}
            onChange={(e) => handleChange(index, "units", e.target.value)}
          >
            <option value="">Units</option>
            {[...Array(30)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          {semesters.length > 1 && (
            <button
              className="remove-btn"
              onClick={() => removeSemester(index)}
            >
              &times;
            </button>
          )}
        </div>
      ))}

      <button className="add-btn" onClick={addSemester}>
        + Add Semester
      </button>
      <button className="calculate-btn" onClick={calculateCGPA}>
        Calculate
      </button>

      {calculatedCGPA && (
        <div className="result">
          <p>
            <strong>Total Units:</strong> {totalUnits}
          </p>
          <p>
            <strong>Your CGPA:</strong>{" "}
            <span className="highlight">{calculatedCGPA}</span>
          </p>
        </div>
      )}

      <button className="back-btn" onClick={goHome}>
        ← Back
      </button>
    </div>
  );
}

export default CGPACalculator;
