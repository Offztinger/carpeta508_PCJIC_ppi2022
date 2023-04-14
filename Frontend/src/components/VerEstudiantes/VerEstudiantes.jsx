import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function VerEstudiantes({ estudiantes, setPutIDEs }) {
  const [deleteIDEs, setDeleteIDEs] = useState();
  const [show, setShow] = useState(false);
  const deleteEstudiante = () => {
    const response = fetch(`http://localhost:8080/estudiante/${deleteIDEs}`, {
      method: "DELETE",
    });
    // console.log("DELETE status" + response.status());
  };

  return (
    <div className="contenedorEstudiantes">
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>Está seguro que desea eliminar este registro?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="btn btn-dark"
            onClick={() => setShow(false)}
          >
            ¡No!
          </Button>
          <Button
            variant="primary"
            className="btn btn-warning"
            onClick={() => {
              setShow(false);
              deleteEstudiante();
            }}
          >
            Sí, deseo eliminarlo
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="d-flex w-100 flex-column align-items-center">
        <div className="d-flex w-100 justify-content-around">
          <Link className="mb-3 btn btn-success" to="/createEstudiante">
            Crear estudiante
          </Link>
          <Link className="mb-3 btn btn-success" to="/createEquipo">
            Crear equipo
          </Link>
          <Link className="mb-3 btn btn-success" to="/readEquipos">
            Ver equipos
          </Link>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Documento</th>
              <th scope="col">Nombre Completo</th>
              <th scope="col">Telefono Fijo</th>
              <th scope="col">Celular</th>
              <th scope="col">Correo Institucional</th>
              <th scope="col">Correo Personal</th>
              <th scope="col">Código Plan</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((estudiante, index) => {
              return (
                <tr key={index}>
                  <td>{estudiante.documento}</td>
                  <td>{estudiante.nombre_completo}</td>
                  <td>{estudiante.telefono_fijo}</td>
                  <td>{estudiante.celular}</td>
                  <td>{estudiante.correo_estudiantil}</td>
                  <td>{estudiante.correo_personal}</td>
                  <td>{estudiante.codigo_plan}</td>
                  <td>
                    <Link
                      style={{ marginRight: "8px" }}
                      type="button"
                      className="btn btn-success"
                      onClick={() => setPutIDEs(estudiante.documento)}
                      to="/editEstudiante"
                    >
                      Editar
                    </Link>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        setShow(true);
                        setDeleteIDEs(estudiante.documento);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VerEstudiantes;
