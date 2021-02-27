package com.catalogo.apiprodutos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class CatalogoApplication implements CommandLineRunner {

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	public static void main(String[] args) {
		SpringApplication.run(CatalogoApplication.class, args);
	}

	public void run(String... args)throws Exception{
		
		String password = "admin"; 
		for (int i=0 ; i < 5 ; i++ ) {
			
			String passwordBCrypt = passwordEncoder.encode(password);
			
			//imprimier contraseña para super y view ambos tiene que ser el mismo
			
			System.out.println(passwordBCrypt);
			
		}
	}
}
