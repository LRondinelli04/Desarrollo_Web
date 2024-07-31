package Modulo2.Desafios.Desafio1.Consigna2;

public class Asignatura {

    private String nombre;
    private String tipo;
    private int horas;
    private Carrera carreras;
    private int cuatrimestre;

    // Getters y Setters
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public int getHoras() {
        return horas;
    }

    public void setHoras(int horas) {
        this.horas = horas;
    }

    public Carrera getCarreras() {
        return carreras;
    }

    public void setCarreras(Carrera carreras) {
        this.carreras = carreras;
    }

    public int getCuatrimestre() {
        return cuatrimestre;
    }

    public void setCuatrimestre(int cuatrimestre) {
        this.cuatrimestre = cuatrimestre;
    }
    
}
