import { useState } from "react";
import "../EditarEstudiantes/EditarEstudiantes.css"
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Axios from "axios";
import { Link } from "react-router-dom";


function EditarEstudiantes({ estudiantes }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [deleteIDEs, setDeleteIDEs] = useState();
    const deleteEstudiante = () => {
        const response = fetch(`http://localhost:8080/estudiante/${deleteIDEs}`, {
            method: "DELETE",
        });
        console.log("DELETE Works!");
    };

    const [formulario, setFormulario] = useState({
        documento: "",
        nombre_completo: "",
        telefono_fijo: "",
        celular: "",
        correo_institucional: "",
        correo_personal: "",
        codigo_plan: "",
        correo_personal: "",
    });

    function handleChange(e) {
        const inputValue = e.target.value;
        setFormulario({
            ...formulario,
            [e.target.name]: inputValue,
        });
    }
    
    const postEstudiante = () => {
        const data = JSON.stringify(formulario);
        Axios.post(
            "http://localhost:8080/estudiante",
            {
                documento: formulario.documento,
                nombre_completo: formulario.nombre_completo,
                telefono_fijo: formulario.telefono_fijo,
                celular: formulario.celular,
                correo_institucional: formulario.correo_institucional,
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
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            });

    };

    return (
        <div className="contenedorEstudiantes">
            <br />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar registro</Modal.Title>
                </Modal.Header>
                <Modal.Body>Esta apunto de eliminar un registro</Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        className="btn btn-dark"
                        onClick={handleClose}
                    >
                        ¡No!
                    </Button>
                    <Button
                        variant="primary"
                        className="btn btn-warning"
                        onClick={() => {
                            deleteEstudiante();
                            handleClose();
                        }}
                    >
                        Sí, deseo eliminarlo
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="d-flex w-100 flex-column align-items-center">
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
                                            onClick={() => {
                                                handleShow();
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
            <div className="d-flex flex-column align-items-center">
                <br />
                <h2>Edita un estudiante</h2>
                <div>
                    <div className="form-group">
                        <label>Documento</label>
                        <input
                            type="number"
                            name="documento"
                            className="form-control"
                            value={formulario.documento}
                            onChange={handleChange} disabled
                        />
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
                            name="correo_institucional"
                            className="form-control"
                            value={formulario.correo_institucional}
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
                        <button onClick={postEstudiante} className="btn btn-primary">
                            Actualizar estudiante
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default EditarEstudiantes;
