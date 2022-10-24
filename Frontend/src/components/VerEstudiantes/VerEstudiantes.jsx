import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function VerEstudiantes({ estudiantes }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className="contenedorEstudiantes">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta apunto de eliminar un registro</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ¡No!
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sí, deseo eliminarlo
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
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
                  <td>{estudiante.correo_institucional}</td>
                  <td>{estudiante.correo_personal}</td>
                  <td>{estudiante.codigo_plan}</td>
                  <td>
                    <button
                      style={{ marginRight: "8px" }}
                      type="button"
                      className="btn btn-success"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={handleShow}
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
