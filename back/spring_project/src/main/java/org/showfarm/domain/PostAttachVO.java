package org.showfarm.domain;

import lombok.Data;

@Data
public class PostAttachVO {

  private String uuid;
  private String uploadPath;
  private String fileName;
  private boolean fileType;
  
  private int post_id;
  
}
