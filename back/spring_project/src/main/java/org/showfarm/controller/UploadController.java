package org.showfarm.controller;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;
import java.util.zip.Deflater;

import org.apache.commons.io.FileUtils;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Log4j
@AllArgsConstructor
public class UploadController {
	private String getFolder() {

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

		Date date = new Date();

		String str = sdf.format(date);

		return str.replace("-", File.separator);
	}

	private boolean checkImageType(File file) {

		try {
			String contentType = Files.probeContentType(file.toPath());

			return contentType.startsWith("image");

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return false;
	}

	@PostMapping(value = "/uploadAjaxAction", consumes = "application/json", produces = { MediaType.TEXT_PLAIN_VALUE })
	public String uploadAjaxPost(@RequestBody String completeImageData){
		log.info(completeImageData);
		
		String imageDataBytes = completeImageData.substring(completeImageData.indexOf(",")+1);
		
		
		String encodedString = Base64.getEncoder().encodeToString(imageDataBytes.getBytes());
		byte[] decodedBytes = Base64.getDecoder().decode(encodedString);
		try {
			FileUtils.writeByteArrayToFile(new File("test.png"), decodedBytes);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "success";
	}
	

//	@ResponseBody
//	@PostMapping(value = "/uploadAjaxAction", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//	public ResponseEntity<List<AttachFileDTO>> uploadAjaxPost(@RequestParam(value = "File", required = false) MultipartFile uploadFile) {	
//		log.info(uploadFile);
//		/*
//		 * List<AttachFileDTO> list = new ArrayList<>(); String uploadFolder =
//		 * "C:\\upload";
//		 * 
//		 * String uploadFolderPath = getFolder(); // make folder -------- File
//		 * uploadPath = new File(uploadFolder, uploadFolderPath);
//		 * 
//		 * if (uploadPath.exists() == false) { uploadPath.mkdirs(); } // make yyyy/MM/dd
//		 * folder
//		 * 
//		 * for (MultipartFile multipartFile : uploadFile) {
//		 * 
//		 * AttachFileDTO attachDTO = new AttachFileDTO();
//		 * 
//		 * String uploadFileName = multipartFile.getOriginalFilename();
//		 * 
//		 * // IE has file path uploadFileName =
//		 * uploadFileName.substring(uploadFileName.lastIndexOf("\\") + 1);
//		 * log.info("only file name: " + uploadFileName);
//		 * attachDTO.setFileName(uploadFileName);
//		 * 
//		 * UUID uuid = UUID.randomUUID();
//		 * 
//		 * uploadFileName = uuid.toString() + "_" + uploadFileName;
//		 * 
//		 * try { File saveFile = new File(uploadPath, uploadFileName);
//		 * multipartFile.transferTo(saveFile);
//		 * 
//		 * attachDTO.setUuid(uuid.toString());
//		 * attachDTO.setUploadPath(uploadFolderPath);
//		 * 
//		 * // check image type file if (checkImageType(saveFile)) {
//		 * 
//		 * attachDTO.setImage(true);
//		 * 
//		 * FileOutputStream thumbnail = new FileOutputStream(new File(uploadPath, "s_" +
//		 * uploadFileName));
//		 * 
//		 * Thumbnailator.createThumbnail(multipartFile.getInputStream(), thumbnail, 100,
//		 * 100);
//		 * 
//		 * thumbnail.close(); }
//		 * 
//		 * // add to List list.add(attachDTO);
//		 * 
//		 * } catch (Exception e) { e.printStackTrace(); }
//		 * 
//		 * } // end for ;
//		 */
//		return new ResponseEntity<>(null, HttpStatus.OK);
//	}
	
	
	public static byte[] compressBytes(byte[] data) {
        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            outputStream.write(buffer, 0, count);

            try {
                outputStream.close();
            } catch (IOException e) {
            }
        }
        return outputStream.toByteArray();
    }

	@GetMapping("/display")
	@ResponseBody
	public ResponseEntity<byte[]> getFile(String fileName) {

		log.info("fileName: " + fileName);

		File file = new File("c:\\upload\\" + fileName);

		log.info("file: " + file);

		ResponseEntity<byte[]> result = null;

		try {
			HttpHeaders header = new HttpHeaders();

			header.add("Content-Type", Files.probeContentType(file.toPath()));
			result = new ResponseEntity<>(FileCopyUtils.copyToByteArray(file), header, HttpStatus.OK);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result;
	}


	@GetMapping(value = "/download", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
	@ResponseBody
	public ResponseEntity<Resource> downloadFile(@RequestHeader("User-Agent") String userAgent, String fileName) {

		Resource resource = new FileSystemResource("c:\\upload\\" + fileName);

		if (resource.exists() == false) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		String resourceName = resource.getFilename();

		// remove UUID
		String resourceOriginalName = resourceName.substring(resourceName.indexOf("_") + 1);

		HttpHeaders headers = new HttpHeaders();
		try {

			boolean checkIE = (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1);

			String downloadName = null;

			if (checkIE) {
				downloadName = URLEncoder.encode(resourceOriginalName, "UTF8").replaceAll("\\+", " ");
			} else {
				downloadName = new String(resourceOriginalName.getBytes("UTF-8"), "ISO-8859-1");
			}

			headers.add("Content-Disposition", "attachment; filename=" + downloadName);

		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}

		return new ResponseEntity<Resource>(resource, headers, HttpStatus.OK);
	}
	

	@PostMapping("/deleteFile")
	@ResponseBody
	public ResponseEntity<String> deleteFile(String fileName, String type) {

		log.info("deleteFile: " + fileName);

		File file;

		try {
			file = new File("c:\\upload\\" + URLDecoder.decode(fileName, "UTF-8"));

			file.delete();

			if (type.equals("image")) {

				String largeFileName = file.getAbsolutePath().replace("s_", "");

				log.info("largeFileName: " + largeFileName);

				file = new File(largeFileName);

				file.delete();
			}

		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<String>("deleted", HttpStatus.OK);

	}
	

}
