package com.catalogo.apiprodutos.controllers;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.catalogo.apiprodutos.models.entity.Region;
import com.catalogo.apiprodutos.models.entity.Role;
import com.catalogo.apiprodutos.models.entity.Usuario;
import com.catalogo.apiprodutos.models.services.IUploadUsuarioFileService;
import com.catalogo.apiprodutos.models.services.IUsuarioService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/catalogo")
public class UsuarioRestController {

	@Autowired
	private IUsuarioService usuarioService;
	
	@Autowired
	private IUploadUsuarioFileService uploadUsuarioFileService;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	
	
	@GetMapping("/usuarios")
	public List<Usuario> index() {
		return usuarioService.findAll();
	}
	@GetMapping("/usuarios/{id}")
	public  ResponseEntity<?> show(@PathVariable Long id){
		Usuario user = null;
		Map<String, Object> response = new HashMap<>();
		try {
			
			user = usuarioService.findById(id);
			
		}catch (DataAccessException e) {
			response.put("Mnesaje", "Vuelve a realizar la consulta");
			response.put("error",e.getMessage().concat(": ".concat(e.getMostSpecificCause().getMessage())));
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		if(user==null) {
			response.put("mensage","El usario con el id:".concat(id.toString().concat("No existe en la bd")));
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.NOT_FOUND);
		}
		
		
		return new ResponseEntity<Usuario>(user,HttpStatus.OK);
	}
	
	
	@GetMapping("/registro/regiones")
	public List<Region> listaRegiones(){
		return usuarioService.findAllRegiones();
	}
	
	@PostMapping("/registro")
	public ResponseEntity<?> create(@Valid @RequestBody Usuario usuario, BindingResult result) {

		Usuario usuarioNew = null;
		Map<String, Object> response = new HashMap<>();

		if (result.hasErrors()) {
			List<String> errors = result.getFieldErrors().stream()
					.map(err -> "El campo '" + err.getField() + "' " + err.getDefaultMessage())
					.collect(Collectors.toList());
			response.put("errors", errors);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}
		try {
			List<Role> roles = Arrays.asList(new Role((long) 1, "ROLES_USER"));
			usuario.setEnabled(true);
			usuario.setRoles(roles);
			String passwordBycrypt = passwordEncoder.encode(usuario.getPassword());

			usuario.setPassword(passwordBycrypt);

			usuarioNew = usuarioService.saveRole(usuario);

		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar el insert en la bd ");
			response.put("mensaje", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "Usuario creado  con exito");
		response.put("usuario", usuarioNew);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	@PutMapping("/usuarios/{id}")
	public ResponseEntity<?> setup(@Valid @RequestBody Usuario usuario, BindingResult result,@PathVariable Long id) {

		Usuario userup = usuarioService.findById(id);
		Usuario user = null;
		Map<String, Object> response = new HashMap<>();

		if (result.hasErrors()) {
			List<String> errors = result.getFieldErrors().stream()
					.map(err -> "El campo '" + err.getField() + "' " + err.getDefaultMessage())
					.collect(Collectors.toList());
			response.put("errors", errors);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}
		
		if(userup == null) {
			response.put("mensaje", "erro al editar el usuarios en la bd ".concat(id.toString().concat("no existe en la bd")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);

		}
		try {

			userup.setUsername(usuario.getUsername());
			userup.setEmail(usuario.getEmail());
			userup.setRegion(usuario.getRegion());
			String passwordBycrypt = passwordEncoder.encode(usuario.getPassword());
			usuario.setPassword(passwordBycrypt);
			user = usuarioService.saveRole(userup);
		
		} catch (final DataAccessException e) {
			response.put("mensaje", "Error al actualuzar la bd");
			response.put("mensaje", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "Usuario modificado  con exito");
		response.put("usuario", user);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	
	@PostMapping("/usuarios/upload")
	public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file, @RequestParam("id") Long id) {

		Map<String, Object> response = new HashMap<>();
		Usuario usuario = usuarioService.findById(id);
		
			if(!file.isEmpty()) {
				String fileName = null;
				try {
					
					fileName = uploadUsuarioFileService.copy(file);
					
				} catch (IOException e) {
					response.put("mensaje", "Error al subir la imagen");
					response.put("error",e.getMessage());
					return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
				}				
				String fileNameBeforePicture =  usuario.getFoto();
				uploadUsuarioFileService.delate(fileNameBeforePicture);
				usuario.setFoto(fileName);
				usuarioService.saveRole(usuario);
				response.put("usuario", usuario);
				response.put("mensaje", "Su foto de perfil fue subida con exito..."+fileName);
			}
		
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	@GetMapping("/uploads/img/{namePicture:.+}")
	public ResponseEntity<Resource> showPicture(@PathVariable String namePicture) {
				
		Resource resource = null;
			
				try {
					resource = uploadUsuarioFileService.get(namePicture);
					
				} catch (MalformedURLException e) {
					e.printStackTrace();
				}
				HttpHeaders header  = new HttpHeaders();
				
			header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment;	filename=\" "+resource.getFilename()+ "\"");
						
		return new ResponseEntity<Resource>(resource,header ,HttpStatus.OK);
	}
}
