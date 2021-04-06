package com.catalogo.apiprodutos.models.services;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class UploadFileServiceImpl implements IUploadUsuarioFileService {

	private final static String DIRECTORIO_UPLOAD = "uploads";

	private final Logger log = LoggerFactory.getLogger(UploadFileServiceImpl.class);

	@Override
	public Resource get(String namePicture) throws MalformedURLException {

		Path fileRoute = getPath(namePicture);
		log.info(fileRoute.toString());
		Resource resource = new UrlResource(fileRoute.toUri());
		if (!resource.exists() && !resource.isReadable()) {
			fileRoute = Paths.get("src/main/resources/static/images").resolve("no-user.png").toAbsolutePath();
			resource = new UrlResource(fileRoute.toUri());
			log.error("No se pudo cargar la foto"+ namePicture);
		}
		return resource;
	}

	@Override
	public String copy(MultipartFile file) throws IOException {
		String fileName	= UUID.randomUUID().toString()+ "_"+  file.getOriginalFilename().replace("", "");
	//	String fileName = UUID.randomUUID().toString()+ "_"+  file.getOriginalFilename().replace("", "");
		Path fileRoute =getPath(fileName);
		log.info(fileRoute.toString());
		Files.copy(file.getInputStream(), fileRoute);

		return fileName;
	}

	@Override
	public boolean delate(String namePicture) {
		if (namePicture != null && namePicture.length() > 0) {
			Path RouteBeforePicture = Paths.get("uploads").resolve(namePicture).toAbsolutePath();
			File fileBeforePicture = RouteBeforePicture.toFile();
			if (fileBeforePicture.exists() && fileBeforePicture.canRead()) {
				fileBeforePicture.delete();
				return true;
			}
		}
		return false;
	}

	@Override
	public Path getPath(String namePicture) {
		return Paths.get(DIRECTORIO_UPLOAD).resolve(namePicture).toAbsolutePath();
	}

}
