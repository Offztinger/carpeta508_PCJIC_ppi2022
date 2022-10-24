import { useEffect, useState } from "react";
// import { backendURL } from "./config/constants";
// import { estudiante } from "./config/constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerEstudiantes from "./components/VerEstudiantes/VerEstudiantes";
import RegistrarEstudiantes from "./components/RegistrarEstudiantes/RegistrarEstudiantes";  
import EditarEstudiantes from "./components/EditarEstudiantes/EditarEstudiantes";

// import RegistrarEstudiantes from "./components/RegistrarEstudiantes/RegistrarEstudiantes";

function App() {
  const [estudiantes, setEstudiantes] = useState([]);

  const fetchApi = async () => {
    const response = await fetch("http://localhost:8080/estudiante", {
      method: "GET",
      // mode: "no-cors",
    });
    const responseJSON = await response.json();
    setEstudiantes(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="contenedorPrincipal d-flex flex-column align-items-center">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<VerEstudiantes estudiantes={estudiantes} />}
          />
          <Route path="/registrar" element={<RegistrarEstudiantes/>  }/>
          <Route
            path="/editar"
            element={<EditarEstudiantes estudiantes={estudiantes} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
