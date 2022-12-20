package com.mini_project.exception;

public class UserAlreadyExsistException extends RuntimeException {

    public UserAlreadyExsistException( String mssg){
        super(mssg);
    }

}
