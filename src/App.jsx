import { useState } from "react";
import Home from "./components/Home";
import GPACalculator from "./components/GPACalculator";
import CGPACalculator from "./components/CGPACalculator";
import Instructions from "./components/Instructions";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      {page === "home" && <Home setPage={setPage} />}
      {page === "gpa" && <GPACalculator goHome={() => setPage("home")} />}
      {page === "cgpa" && <CGPACalculator goHome={() => setPage("home")} />}
      {page === "instructions" && (
        <Instructions goHome={() => setPage("home")} />
      )}
    </div>
  );
}

export default App;
