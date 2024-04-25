package Modulo2.Desafios.Desafio1.Consigna2;

public class Alumno {

    private String id_Alumno;
    private Persona datos;
    private Asignatura[] materias;
    private Carrera carrera;

    // Getters y Setters
    public String getId_Alumno() {
        return id_Alumno;
    }

    public void setId_Alumno(String id_Alumno) {
        this.id_Alumno = id_Alumno;
    }

    public Persona getDatos() {
        return datos;
    }

    public void setDatos(Persona datos) {
        this.datos = datos;
    }

    public Asignatura[] getMaterias() {
        return materias;
    }

    public void setMaterias(Asignatura[] materias) {
        this.materias = materias;
    }

    public Carrera getCarrera() {
        return carrera;
    }

    public void setCarrera(Carrera carrera) {
        this.carrera = carrera;
    }

    // Procedimientos
    // Inscribir materia
    public void inscribirMateria(Asignatura materia) {
        // Agregar la materia al array de materias
    }

    // Iniciar Tramite
    public void iniciarTramite(Tramite tramite) {
        // Iniciar tramite
    }

    // Inscribir carrera
    public void inscribirCarrera(Carrera carrera) {
        // Asignar la carrera al atributo carrera
    }

}
