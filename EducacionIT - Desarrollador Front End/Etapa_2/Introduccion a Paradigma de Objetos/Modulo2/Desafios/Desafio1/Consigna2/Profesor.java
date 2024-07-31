package Modulo2.Desafios.Desafio1.Consigna2;

public class Profesor {
    private String id_profesor;
    private Persona datos;
    private String departamento;

    // Getters y Setters
    public String getId_profesor() {
        return id_profesor;
    }

    public void setId_profesor(String id_profesor) {
        this.id_profesor = id_profesor;
    }

    public Persona getDatos() {
        return datos;
    }

    public void setDatos(Persona datos) {
        this.datos = datos;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }
}
