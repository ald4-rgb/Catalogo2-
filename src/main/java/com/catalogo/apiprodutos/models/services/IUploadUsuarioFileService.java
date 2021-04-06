package com.catalogo.apiprodutos.models.services;

import java.io.IOException;
import java.nio.file.Path;

import org.springframework.core.io.Resource;
import java.net.MalformedURLException;
import org.springframework.web.multipart.MultipartFile;


public interface IUploadUsuarioFileService {
	
	public Resource get(String namePicture) throws MalformedURLException;
	
	public String copy(MultipartFile file ) throws IOException;
	
	public boolean delate(String namePicture);
	
	public Path  getPath(String namePicture);
	
}
