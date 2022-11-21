package com.mini_project.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler( MethodArgumentNotValidException.class )
    public ResponseEntity<ErrorDetail> methodArgumentNotValidHandler(
                MethodArgumentNotValidException methodArgumentNotValidException
                )
    {
        ErrorDetail errorDetail;
        errorDetail = new ErrorDetail( "Validation error",
                methodArgumentNotValidException
                        .getBindingResult()
                        .getFieldError()
                        .getDefaultMessage()   );
        return new ResponseEntity<>(errorDetail , HttpStatus.BAD_REQUEST );
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorDetail> anyExceptionHandlerMethod(Exception e, WebRequest webRequest){

        ErrorDetail errorDetail = new ErrorDetail( e.getMessage(), webRequest.getDescription(false) );

        return new ResponseEntity<>( errorDetail , HttpStatus.BAD_REQUEST );
    }

}
