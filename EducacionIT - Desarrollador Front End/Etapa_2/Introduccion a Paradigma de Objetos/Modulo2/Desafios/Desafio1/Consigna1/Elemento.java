package Modulo2.Desafios.Desafio1.Consigna1;

public class Elemento {

    private String tipoElemento;
    private double ancho;
    private double alto;
    private double peso;

    // Getters y Setters
    public String getTipoElemento() {
        return tipoElemento;
    }

    public void setTipoElemento(String tipoElemento) {
        this.tipoElemento = tipoElemento;
    }

    public double getAncho() {
        return ancho;
    }

    public void setAncho(double ancho) {
        this.ancho = ancho;
    }

    public double getAlto() {
        return alto;
    }

    public void setAlto(double alto) {
        this.alto = alto;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    // Realizar un toString para corroborar la funcionalidad
    @Override
    public String toString() {
        return "Elemento{" +
                "tipoElemento='" + tipoElemento + '\'' +
                ", ancho=" + ancho +
                ", alto=" + alto +
                ", peso=" + peso +
                '}';
    }
}
