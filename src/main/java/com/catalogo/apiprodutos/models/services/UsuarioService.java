	package com.catalogo.apiprodutos.models.services;

import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.catalogo.apiprodutos.models.dao.IPedidoDao;
import com.catalogo.apiprodutos.models.dao.IProductoDao;
import com.catalogo.apiprodutos.models.dao.IUsuarioDao;
import com.catalogo.apiprodutos.models.entity.Pedido;
import com.catalogo.apiprodutos.models.entity.Producto;
import com.catalogo.apiprodutos.models.entity.Region;
import com.catalogo.apiprodutos.models.entity.Role;
import com.catalogo.apiprodutos.models.entity.Usuario;

@Service
public class UsuarioService implements IUsuarioService, UserDetailsService {

	private Logger logger = LoggerFactory.getLogger(UsuarioService.class);

	@Autowired
	private IUsuarioDao usuarioDao;
	
	@Autowired 
	private IPedidoDao pedidoDao;
	  
	@Autowired 
	private IProductoDao productoDao;
	 

	@Override
	@Transactional(readOnly = true)
	public Usuario findByUsername(String username) {
		return usuarioDao.findByUsername(username);
	}

	@Override
	public List<Role> findAllRoles() {
		return usuarioDao.findAllRoles();
	}

	@Override
	@Transactional(readOnly = true)
	public List<Usuario> findAll() {
		return (List<Usuario>) usuarioDao.findAll();
	}

	@Override
	public Usuario findById(Long id) {
		return usuarioDao.findById(id).orElse(null);
	}
	
	@Override
	public Usuario saveRole(Usuario usuario) {
		
		return usuarioDao.save(usuario);
	}
	
	@Override
	@Transactional(readOnly = true)
	public List<Region> findAllRegiones() {

		return usuarioDao.findAllRegiones();
	}
	

	@Override
	@Transactional(readOnly = true)
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Usuario usuario = usuarioDao.findByUsername(username);
		if (usuario == null) {
			logger.error("Error no existe el usuario '" + username + "'en el sistema");
			throw new UsernameNotFoundException("Error no existe el usuario '" + username + "'en el sistema");
		}
		List<GrantedAuthority> authorities = usuario.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName()))
				.peek(authority -> logger.info("Role" + authority.getAuthority())).collect(Collectors.toList());

		return new User(usuario.getUsername(), usuario.getPassword(), usuario.getEnabled() ,true, true, true, authorities);
	}

	
	  @Override
	  @Transactional(readOnly = true) 
	  public Pedido findPedidoById(Long id) {
	  return pedidoDao.findById(id).orElse(null); }
	  @Override
	  
	  @Transactional 
	  public Pedido savePedido(Pedido pedido) { return
	  pedidoDao.save(pedido); 
	  }
	  
	  @Override	  
	  @Transactional 
	  public void deletePedidoById(Long id) {
	  pedidoDao.deleteById(id); 
	  }
	  
	  @Override
	  @Transactional(readOnly = true) 
	  public List<Producto> findProductoByName(String term) {
	  return productoDao.findByName(term); }
	 
	
}
