package com.catalogo.apiprodutos.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jdbc.repository.query.Query;
//import org.springframework.data.repository.CrudRepository;

import com.catalogo.apiprodutos.models.entity.Usuario;

public interface IUsuarioDao extends JpaRepository<Usuario, Long> {

	
	public Usuario findByUsername (String username );
	
	//consulta con sentencia sql 
	
	/*consulta sql con un alias */
	
	@Query("select u from Usuario u where  u.username=?1")
	public Usuario findByUsername2(String username );

}
