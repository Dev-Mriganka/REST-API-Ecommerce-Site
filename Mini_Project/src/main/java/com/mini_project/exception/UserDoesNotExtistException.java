package com.mini_project.exception;

public class UserDoesNotExtistException extends RuntimeException{

    public UserDoesNotExtistException( String mssg ){
        super(mssg);
    }

}
