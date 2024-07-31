package Modulo2.Desafios.Desafio1.Consigna1;

public class Recibo {

    private String tipoELemento;
    private double valor;
    private int totalDiario;

    // Getters y Setters
    public String getTipoELemento() {
        return tipoELemento;
    }

    public void setTipoELemento(String tipoELemento) {
        this.tipoELemento = tipoELemento;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public int getTotalDiario() {
        return totalDiario;
    }

    public void setTotalDiario(int totalDiario) {
        this.totalDiario = totalDiario;
    }

    // Realizar un toString para corroborar la funcionalidad
    @Override
    public String toString() {
        return "Recibo{" +
                "tipoELemento='" + tipoELemento + '\'' +
                ", valor=" + valor +
                ", totalDiario=" + totalDiario +
                '}';
    }
}
