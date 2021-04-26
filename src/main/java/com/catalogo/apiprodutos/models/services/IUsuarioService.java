package com.catalogo.apiprodutos.models.services;

import java.util.List;

import com.catalogo.apiprodutos.models.entity.Pedido;
import com.catalogo.apiprodutos.models.entity.Producto;
import com.catalogo.apiprodutos.models.entity.Region;
import com.catalogo.apiprodutos.models.entity.Role;
import com.catalogo.apiprodutos.models.entity.Usuario;

public interface IUsuarioService {
	
	public List<Usuario> findAll();
	
	public Usuario findById(Long id);
	
	public Usuario findByUsername(String username);
		
	public Usuario saveRole(Usuario usuario);

	public List<Region> findAllRegiones();
	
	public List<Role> findAllRoles();
	
	public Pedido findPedidoById(Long id);
	  
	public Pedido savePedido(Pedido pedido);
	  
	public void deletePedidoById(Long id);
	  
	public List<Producto> findProductoByName(String term);
	 
}
