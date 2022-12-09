package com.mini_project.exception;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@Getter
@Setter
public class ErrorDetail {

    private LocalDateTime timeStamp;
    private String mssg;
    private String description;
    public ErrorDetail(){
        this.timeStamp = LocalDateTime.now();
        
    }

    public ErrorDetail( String mssg , String description ){
        this();
        this.mssg = mssg;
        this.description = description;
    }

}
