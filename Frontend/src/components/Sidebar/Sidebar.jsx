import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{marginLeft: '15px'}} className="d-flex flex-column w-25 justify-content-around">
      <Link className="mb-3 btn btn-success" to="/createEstudiante">
        Crear estudiante
      </Link>
      <Link className="mb-3 btn btn-success" to="/createEquipo">
        Crear equipo
      </Link>
      <Link className="mb-3 btn btn-success" to="/createAsesor">
        Crear asesor
      </Link>
      <Link className="mb-3 btn btn-success" to="/createDocente">
        Crear docente
      </Link>
      <Link className="mb-3 btn btn-success" to="/createCita">
        Crear cita
      </Link>
      <Link className="mb-3 btn btn-success" to="/readEquipos">
        Ver equipos
      </Link>
      <Link className="mb-3 btn btn-success" to="/readDocentes">
        Ver docentes
      </Link>
      <Link className="mb-3 btn btn-success" to="/readAsesores">
        Ver asesores
      </Link>
      <Link className="mb-3 btn btn-success" to="/calendar">
        Ver calendario
      </Link>
    </div>
  );
}
