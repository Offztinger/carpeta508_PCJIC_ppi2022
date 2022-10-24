import { useState } from "react";
import React from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function RegistrarEstudiantes() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formulario, setFormulario] = useState({
    documento: "",
    nombre_completo: "",
    telefono_fijo: "",
    celular: "",
    correo_estudiantil: "",
    correo_personal: "",
    codigo_plan: "",
  });

  function handleChange(e) {
    const inputValue = e.target.value;
    setFormulario({
      ...formulario,
      [e.target.name]: inputValue,
    });
  }
  let statusEstudiante = "";
  const postEstudiante = () => {
    Axios.post(
      "http://localhost:8080/estudiante",
      {
        documento: formulario.documento,
        nombre_completo: formulario.nombre_completo,
        telefono_fijo: formulario.telefono_fijo,
        celular: formulario.celular,
        correo_estudiantil: formulario.correo_estudiantil,
        correo_personal: formulario.correo_personal,
        codigo_plan: formulario.codigo_plan,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((res) => {
        // if (res.status === 201) {
        //   statusEstudiante = "Se ha creado correctamente el registro";
        // } else {
        //   statusEstudiante = "Ups! No se ha creado el registro";
        // }
        console.log(`CÓDIGO POST ESTUDIANTE: ${res.status}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function multipleFunction() {
    postEstudiante();
    setTimeout(() => {
      handleShow();
    }, 2000);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Estado registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>"Se ha creado correctamente el registro"</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Quedarse
          </Button>
          <Link
            to="/"
            variant="primary"
            className="btn btn-success"
            onClick={handleClose}
          >
            Ver Registros
          </Link>
        </Modal.Footer>
      </Modal>
      <h2>Registra un estudiante</h2>
      <div>
        <div className="form-group">
          <label>Documento</label>
          <input
            type="number"
            name="documento"
            className="form-control"
            value={formulario.documento}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Docente, recuerde colocar el documento de identidad sin errores. Ya
            que después no sé podrá editar si no se escala con la
            administración.
          </small>
        </div>
        <div className="form-group">
          <label>Nombre Completo</label>
          <input
            type="text"
            name="nombre_completo"
            className="form-control"
            value={formulario.nombre_completo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Telefono Fijo</label>
          <input
            type="number"
            name="telefono_fijo"
            className="form-control"
            value={formulario.telefono_fijo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Celular</label>
          <input
            type="number"
            name="celular"
            className="form-control"
            value={formulario.celular}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Correo institucional</label>
          <input
            type="email"
            name="correo_estudiantil"
            className="form-control"
            value={formulario.correo_estudiantil}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Correo Personal</label>
          <input
            type="email"
            name="correo_personal"
            className="form-control"
            value={formulario.correo_personal}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Código Plan</label>
          <input
            type="number"
            name="codigo_plan"
            className="form-control"
            value={formulario.codigo_plan}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button onClick={multipleFunction} className="btn btn-success">
            Crear estudiante
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrarEstudiantes;
