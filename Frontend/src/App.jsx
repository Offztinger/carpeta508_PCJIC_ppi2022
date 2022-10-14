import { useEffect, useState } from "react";
import { backendURL } from "./config/constants";
import { estudiante } from "./config/constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

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
      <div style={{ width: "95%" }}>
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
                    <button type="button" class="btn btn-danger">
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
    </div>
  );
}

export default App;
