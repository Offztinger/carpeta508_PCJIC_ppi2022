import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function RegistrarEstudiantes(){
    return (
        <div className="d-flex flex-column align-items-center">
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
              Docente, recuerde colocar el documento de identidad sin errores.
              Ya que después no sé podrá editar si no se escala con la
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
              Crear estudiante
            </button>
          </div>
        </div>
      </div>
);
}

export default RegistrarEstudiantes