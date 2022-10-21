import { useEffect, useState } from "react";
import { backendURL } from "./config/constants";
import { estudiante } from "./config/constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerEstudiantes from "./components/VerEstudiantes/VerEstudiantes";

// import RegistrarEstudiantes from "./components/RegistrarEstudiantes/RegistrarEstudiantes";

function App() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [formulario, setFormulario] = useState({
    documento: "",
    nombre_completo: "",
    telefono_fijo: "",
    celular: "",
    correo_institucional: "",
    correo_personal: "",
    codigo_plan: "",
  });
  const fetchApi = async () => {
    const response = await fetch(backendURL + estudiante, {
      mode: "cors",
    });
    const responseJSON = await response.json();
    setEstudiantes(responseJSON);
  };

  function handleChange(e) {
    const inputValue = e.target.value;
    setFormulario({
      ...formulario,
      [e.target.name]: inputValue,
    });
  }

  const postEstudiante = async () => {
    const data = formulario;
    await fetch(backendURL + estudiante, {
      method: "POST",
      mode: "no-cors", // no-cors, *cors, same-origin
      body: JSON.stringify(data),
    });
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
