package Modulo2.Desafios.Desafio1.Consigna2;

import java.util.ArrayList;
import java.util.List;

public class escuelaMain {
    public static void main(String[] args) {

        // Creo un objeto de tipo Persona
        Persona persona1 = new Persona();
            // Seteo los atributos del objeto persona1
            persona1.setDni("12345678");
            persona1.setNombre("Juan Perez");
            persona1.setDireccion("Calle Falsa 123");

            // Muestro los datos de la persona
            persona1.mostrarDatos();

            System.out.println();

        // Creo un objeto de tipo Carrera
        Carrera carrera1 = new Carrera();
            // Seteo los atributos del objeto carrera1
            carrera1.setNombre("Licenciatura en Sistemas");
            carrera1.setSede("Facultad de Informatica UNLP");
        // Creo un segundo objeto de tipo Carrera
        Carrera carrera2 = new Carrera();
            // Seteo los atributos del objeto carrera2
            carrera2.setNombre("Licenciatura en Informatica");
            carrera2.setSede("Facultad de Informatica UNLP");
        // Creo un tercer objeto de tipo Carrera
        Carrera carrera3 = new Carrera();
            // Seteo los atributos del objeto carrera3
            carrera3.setNombre("Tecnicatura en Programacion");
            carrera3.setSede("UTN");

        // Creo una lista de carreras para guardar los objetos de tipo carrera
        List<Carrera> listaDeCarreras = new ArrayList<Carrera>();
            // Agrego los objetos de tipo carrera a la lista
            listaDeCarreras.add(carrera1);
            listaDeCarreras.add(carrera2);
            listaDeCarreras.add(carrera3);
            
            // Imprimo las carreras disponible
            System.out.println("Carreras disponibles: ");
            for (Carrera carrera : listaDeCarreras) {
                System.out.println("Nombre: " + carrera.getNombre());
                System.out.println("Sede: " + carrera.getSede());
                System.out.println();
            }

        // Creo un objeto de tipo Asignatura
        Asignatura asignatura1 = new Asignatura();
            // Seteo los atributos del objeto asignatura1
            asignatura1.setNombre("Introduccion al Paradigma de Objetos");
            asignatura1.setTipo("Obligatoria");
            asignatura1.setHoras(4);
            asignatura1.setCarreras(carrera1);
            asignatura1.setCuatrimestre(2);
    }
}
