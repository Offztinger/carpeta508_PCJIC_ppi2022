export class Estudiante {
  constructor(
    public documento: number,
    public nombre_completo: string,
    public telefono_fijo: number,
    public celular: number,
    public correo_estudiantil: string,
    public correo_personal: string,
    public codigo_plan: number,
  ) {
    // this.documento = documento;
    // this.nombre_completo = nombre_completo;
    // this.telefono_fijo = telefono_fijo;
    // this.celular = celular;
    // this.correo_estudiantil = correo_estudiantil;
    // this.correo_personal = correo_personal;
    // this.codigo_plan = codigo_plan;
  }
}
