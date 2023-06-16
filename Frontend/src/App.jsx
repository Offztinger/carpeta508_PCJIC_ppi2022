import { useEffect, useState } from "react";
// import { backendURL } from "./config/constants";
// import { estudiante } from "./config/constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerEstudiantes from "./components/VerEstudiantes/VerEstudiantes";
import RegistrarEstudiantes from "./components/RegistrarEstudiantes/RegistrarEstudiantes";
import EditarEstudiantes from "./components/EditarEstudiantes/EditarEstudiantes";
import CrearEquipos from "./components/CrearEquipos/CrearEquipos";
import VerEquipos from "./components/VerEquipos/VerEquipos";
import correo from "./icons/envelope.png";
import calendario from "./icons/calendar-page.png";
import RegistrarDocentes from "./components/CrearDocentes/RegistrarDocentes";
import RegistrarAsesores from "./components/CrearAsesores/RegistrarAsesores";
import VerDocentes from "./components/VerDocentes/VerDocentes";
import VerAsesores from "./components/VerAsesores/VerAsesores";
import RegistrarCitas from "./components/CrearCitas/RegistrarCitas";
import Calendar from "./components/CalendarComponent/calendarComponet";
import Sidebar from "./components/Sidebar/Sidebar";
// import RegistrarEstudiantes from "./components/RegistrarEstudiantes/RegistrarEstudiantes";

function App() {
  function zero() {
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
  }

  const todayDate = new Date();
  const year = todayDate.getFullYear();
  let month = todayDate.getMonth() + 1;
  let day = todayDate.getDate();
  zero();
  const today = `${year}-${month}-${day}`;
  const notificationPopup = document.getElementById("notification-popup");
  const closeBtn = document.getElementById("close-btn");
  const [estudiantes, setEstudiantes] = useState([]);
  const [putIDEs, setPutIDEs] = useState();
  const [cronograma, setCronograma] = useState([]);

  const cronogramaActual = cronograma.filter(
    (actividad) => actividad.fecha === today
  );

  const fetchApi = async () => {
    const response = await fetch("http://localhost:8080/estudiante", {
      method: "GET",
    });
    const responseJSON = await response.json();
    setEstudiantes(responseJSON);
    const response2 = await fetch("http://localhost:8080/cronograma", {
      method: "GET",
    });
    const responseJSON2 = await response2.json();
    setCronograma(responseJSON2);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  let popUpOpen = false;
  const openPopUp = () => {
    const popUp = document.getElementById("notification-popup");
    popUpOpen
      ? (popUp.style.display = "none")
      : (popUp.style.display = "block");
    popUpOpen = !popUpOpen;
  };

  return (
    <div>
      <div className="header">
        <div className="logos-header">
          <button id="notification-btn" onClick={openPopUp}>
            <img src={correo} className="correo-logo" />
          </button>
          <div id="notification-popup">
            <div className="popup-content">
              <div className="popup-header">
                <h3>Notificaciones</h3>
                <button id="close-btn">
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
              </div>
              <ul className="notifications-list">
                {cronogramaActual.map((actividades, index) => {
                  return (
                    <li className="d-flex justify-content-start" key={index}>
                      <a href="#">
                        <strong>Actividad: </strong>
                        {actividades.titulo} <strong>Hora: </strong>
                        {actividades.hora_inicio}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <Router>
          <Sidebar />
          <div className="contenedorPrincipal d-flex flex-column align-items-center justify-content-center">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <VerEstudiantes
                    estudiantes={estudiantes}
                    setPutIDEs={setPutIDEs}
                  />
                }
              />
              <Route
                path="/createEstudiante"
                element={<RegistrarEstudiantes />}
              />
              <Route path="/createDocente" element={<RegistrarDocentes />} />
              <Route path="/createAsesor" element={<RegistrarAsesores />} />
              <Route path="/createCita" element={<RegistrarCitas />} />
              <Route
                exact
                path="/editEstudiante"
                element={
                  <EditarEstudiantes
                    putIDEs={putIDEs}
                    setPutIDEs={setPutIDEs}
                  />
                }
              />
              <Route exact path="/createEquipo" element={<CrearEquipos />} />
              <Route exact path="/readEquipos" element={<VerEquipos />} />
              <Route exact path="/readDocentes" element={<VerDocentes />} />
              <Route exact path="/readAsesores" element={<VerAsesores />} />
              <Route
                exact
                path="/calendar"
                element={<Calendar cronograma={cronograma} />}
              />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
