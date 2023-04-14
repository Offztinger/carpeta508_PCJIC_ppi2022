import { useEffect, useState } from "react";
// import { backendURL } from "./config/constants";
// import { estudiante } from "./config/constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerEstudiantes from "./components/VerEstudiantes/VerEstudiantes";
import RegistrarEstudiantes from "./components/RegistrarEstudiantes/RegistrarEstudiantes";
import EditarEstudiantes from "./components/EditarEstudiantes/EditarEstudiantes";
import correo from "./icons/envelope.png";
import calendario from "./icons/calendar-page.png"

// import RegistrarEstudiantes from "./components/RegistrarEstudiantes/RegistrarEstudiantes";

function App() {
  
  const notificationPopup = document.getElementById("notification-popup");
  const closeBtn = document.getElementById("close-btn");
  const [estudiantes, setEstudiantes] = useState([]);
  const [putIDEs, setPutIDEs] = useState();
  const fetchApi = async () => {
    const response = await fetch("http://localhost:8080/estudiante", {
      method: "GET",
    });
    const responseJSON = await response.json();
    setEstudiantes(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  document.addEventListener("DOMContentLoaded", function () {

  
  let popupOpen = false; // Variable para rastrear si la ventana emergente está abierta

  // Función para mostrar o ocultar la ventana emergente
  function togglePopup() {
    const popup = document.getElementById("notification-popup");
    if (popupOpen) {
      popup.style.display = "none";
      popupOpen = false;
    } else {
      popup.style.display = "block";
      popupOpen = true;
    }
  }
  
  // Agregar un evento de clic al botón de notificación
  const notificationBtn = document.getElementById("notification-btn");
  notificationBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Detener la propagación del evento de clic para evitar que se cierre la ventana emergente
    togglePopup();
  });
  
  // Agregar un evento de clic al documento para cerrar la ventana emergente si se hace clic en otro lugar de la página
  document.addEventListener("click", function (event) {
    const popup = document.getElementById("notification-popup");
    if (popupOpen && event.target !== notificationBtn && event.target !== popup && !popup.contains(event.target)) {
      togglePopup();
    }
  });
  
  // Agregar un evento de carga para ocultar la ventana emergente al cargar la página
  window.addEventListener("load", function () {
    const popup = document.getElementById("notification-popup");
    popup.style.display = "none";
    popupOpen = false;
  });
});
  return (
    <div>
      <div className="header">
        <div className="logos-header">
          <img src={calendario} alt="" className="calendario-logo" />
          <button id="notification-btn"><img src={correo} className="correo-logo" /></button>
          <div id="notification-popup">
            <div class="popup-content">
              <div class="popup-header">
                <h3>Notificaciones</h3>
                <button id="close-btn"><i class="fa fa-times" aria-hidden="true"></i></button>
              </div>
              <ul class="notifications-list">
                <li><a href="#">Notificación 1</a></li>
                <li><a href="#">Notificación 2</a></li>
                <li><a href="#">Notificación 3</a></li>
                <li><a href="#">Notificación 4</a></li>
                <li><a href="#">Notificación 5</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="contenedorPrincipal d-flex flex-column align-items-center justify-content-center">
        <Router>
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
            <Route
              exact
              path="/editEstudiante"
              element={
                <EditarEstudiantes putIDEs={putIDEs} setPutIDEs={setPutIDEs} />
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
