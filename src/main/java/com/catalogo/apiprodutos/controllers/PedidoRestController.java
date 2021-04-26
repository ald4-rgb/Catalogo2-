package com.catalogo.apiprodutos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.catalogo.apiprodutos.models.entity.Pedido;
import com.catalogo.apiprodutos.models.entity.Producto;
import com.catalogo.apiprodutos.models.services.IUsuarioService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/catalogo")
public class PedidoRestController {

	@Autowired
	private IUsuarioService usuarioService;
	
	
	@GetMapping("/pedidos/{id}")
	@ResponseStatus(code = HttpStatus.OK)
	public Pedido show (@PathVariable Long id ) {
		return usuarioService.findPedidoById(id);
	}
	
	@DeleteMapping("/pedidos/{id}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void delete (@PathVariable Long id ) {
		 usuarioService.deletePedidoById(id);
	}
	@ResponseStatus(code = HttpStatus.OK)
	@GetMapping("/pedidos/filtrar-productos/{term}")
	public List<Producto> filtrarProductos(@PathVariable String term){
		return usuarioService.findProductoByName(term);
	}
	
	@PostMapping("/pedidos")
	@ResponseStatus(code = HttpStatus.CREATED)
	public Pedido create(@RequestBody Pedido pedido ) {
		
		return usuarioService.savePedido(pedido);
	}
	
	
	
	
	
	
	
	
	
	
}
