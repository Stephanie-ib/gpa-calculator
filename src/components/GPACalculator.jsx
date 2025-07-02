import { useState } from "react";
import "../App.css";

function GPACalculator({ goHome }) {
  const [courses, setCourses] = useState([{ title: "", grade: "", unit: "" }]);
  const [calculatedGPA, setCalculatedGPA] = useState(null);

  const gradePoints = { A: 5, B: 4, C: 3, D: 2, E: 1, F: 0 };

  const handleChange = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index][field] = value;
    setCourses(newCourses);
  };

  const addCourse = () => {
    setCourses([...courses, { title: "", grade: "", unit: "" }]);
  };

  const removeCourse = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalUnits = 0;

    courses.forEach((course) => {
      const gradePoint = gradePoints[course.grade.toUpperCase()];
      const unit = parseInt(course.unit);
      if (!isNaN(gradePoint) && !isNaN(unit)) {
        totalPoints += gradePoint * unit;
        totalUnits += unit;
      }
    });

    if (totalUnits === 0) {
      setCalculatedGPA("0.00");
    } else {
      setCalculatedGPA((totalPoints / totalUnits).toFixed(2));
    }
  };

  const totalUnits = courses.reduce(
    (sum, c) => sum + (parseInt(c.unit) || 0),
    0
  );

  return (
    <div className="calculator">
      <h2>GPA Calculator</h2>

      {courses.map((course, index) => (
        <div className="input-row" key={index}>
          <input
            type="text"
            value={course.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
            placeholder="Course Name"
          />

          <select
            value={course.grade}
            onChange={(e) => handleChange(index, "grade", e.target.value)}
          >
            <option value="">Grade</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
            <option>F</option>
          </select>

          <select
            value={course.unit}
            onChange={(e) => handleChange(index, "unit", e.target.value)}
          >
            <option value="">Units</option>
            {[...Array(6)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          {courses.length > 1 && (
            <button className="remove-btn" onClick={() => removeCourse(index)}>
              &times;
            </button>
          )}
        </div>
      ))}

      <button className="add-btn" onClick={addCourse}>
        + Add Course
      </button>
      <button className="calculate-btn" onClick={calculateGPA}>
        Calculate
      </button>

      {calculatedGPA && (
        <div className="result">
          <p>
            <strong>Units Total:</strong> {totalUnits}
          </p>
          <p>
            <strong>Your GPA:</strong>{" "}
            <span className="highlight">{calculatedGPA}</span>
          </p>
        </div>
      )}

      <button className="back-btn" onClick={goHome}>
        ← Back
      </button>
    </div>
  );
}

export default GPACalculator;
