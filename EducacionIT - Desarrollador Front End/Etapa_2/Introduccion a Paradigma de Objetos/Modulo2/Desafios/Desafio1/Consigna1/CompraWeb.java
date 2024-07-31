// Version: 1.0
package Modulo2.Desafios.Desafio1.Consigna1;

public class CompraWeb {
    public static void main(String[] args) {

        // Creo el objeto elemento
        Elemento elemento = new Elemento();

        // Seteo los valores del objeto elemento
        elemento.setTipoElemento("Botella de Coca");
        elemento.setAncho(1.5);
        elemento.setAlto(2.0);
        elemento.setPeso(50.0);

        System.out.println(elemento.toString());

        System.out.println("----------------------");

        // Creo el objeto recibo
        Recibo recibo = new Recibo();

        // Seteo los valores del objeto recibo
        recibo.setTipoELemento(elemento.getTipoElemento()); // Obtengo el tipo de elemento del objeto elemento
        recibo.setValor(250);
        recibo.setTotalDiario(100);

        System.out.println(recibo.toString());

    }

}