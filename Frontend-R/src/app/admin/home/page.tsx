"use client";
import { useEffect, useState } from "react";
// import { backendURL } from "../../../config/constants";
// import { estudiante } from "../../../config/constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

export default function HomePageChildren() {
  //   function zero() {
  //     if (day < 10) {
  //       day = "0" + day;
  //     }
  //     if (month < 10) {
  //       month = "0" + month;
  //     }
  //   }

  //   const todayDate = new Date();
  //   const year = todayDate.getFullYear();
  //   let month = todayDate.getMonth() + 1;
  //   let day = todayDate.getDate();
  //   zero();
  //   const today = `${year}-${month}-${day}`;
  const notificationPopup = document.getElementById("notification-popup");
  const closeBtn = document.getElementById("close-btn");
  const [estudiantes, setEstudiantes] = useState([]);
  const [putIDEs, setPutIDEs] = useState();
  const [cronograma, setCronograma] = useState([]);
  //   Yeah, it's working.
  //   const cronogramaActual = cronograma.filter(
  //     (actividad) => actividad.fecha === today
  //   );

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
    if (popUp != null) {
      popUpOpen
        ? (popUp.style.display = "none")
        : (popUp.style.display = "block");
    }

    popUpOpen = !popUpOpen;
  };

  return (
    <main>
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
    </main>
  );
}
