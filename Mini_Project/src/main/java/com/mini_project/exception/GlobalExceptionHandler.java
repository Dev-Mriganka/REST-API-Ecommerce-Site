package com.mini_project.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import java.time.LocalDateTime;

 @ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ErrorDetail> methodArgumentNotValidHandler(
			MethodArgumentNotValidException methodArgumentNotValidException) {
		ErrorDetail errorDetail;
		errorDetail = new ErrorDetail("Validation error",
				methodArgumentNotValidException
						.getBindingResult()
						.getFieldError()
						.getDefaultMessage());
		return new ResponseEntity<>(errorDetail, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorDetail> anyExceptionHandlerMethod(Exception e, WebRequest webRequest) {

		ErrorDetail errorDetail = new ErrorDetail(e.getMessage(), webRequest.getDescription(false));

		return new ResponseEntity<>(errorDetail, HttpStatus.BAD_REQUEST);
	}

	/*
	 * @ExceptionHandler(BeneficiaryDetailException.class)
	 * public ResponseEntity<MyErrorDetails>
	 * HandleBeneficiaryDetailException(BeneficiaryDetailException BeneficiaryDetail
	 * , WebRequest request){
	 * MyErrorDetails errorDetails = new MyErrorDetails(LocalDateTime.now(),
	 * BeneficiaryDetail.getMessage(), request.getDescription(false));
	 * return new
	 * ResponseEntity<MyErrorDetails>(errorDetails,HttpStatus.BAD_REQUEST);
	 * }
	 * 
	 * @ExceptionHandler(LoginException.class)
	 * public ResponseEntity<MyErrorDetails> HandleLoginException(LoginException
	 * loginException , WebRequest request){
	 * MyErrorDetails errorDetails = new MyErrorDetails(LocalDateTime.now(),
	 * loginException.getMessage(), request.getDescription(false));
	 * return new
	 * ResponseEntity<MyErrorDetails>(errorDetails,HttpStatus.BAD_REQUEST);
	 * }
	 * 
	 * 
	 * @ExceptionHandler(InsufficientBalanceException.class)
	 * public ResponseEntity<MyErrorDetails>
	 * HandleExtraException(InsufficientBalanceException balanceException ,
	 * WebRequest request){
	 * MyErrorDetails errorDetails = new MyErrorDetails(LocalDateTime.now(),
	 * balanceException.getMessage(), request.getDescription(false));
	 * return new
	 * ResponseEntity<MyErrorDetails>(errorDetails,HttpStatus.BAD_REQUEST);
	 * }
	 * 
	 * @ExceptionHandler(MethodArgumentNotValidException.class)
	 * public ResponseEntity<MyErrorDetails>
	 * MobileNumberException(MethodArgumentNotValidException loginException ){
	 * MyErrorDetails errorDetails = new
	 * MyErrorDetails(LocalDateTime.now(),"valadiation error",loginException.
	 * getBindingResult().getFieldError().getDefaultMessage());
	 * return new
	 * ResponseEntity<MyErrorDetails>(errorDetails,HttpStatus.BAD_REQUEST);
	 * }
	 * 
	 * 
	 * @ExceptionHandler(BillNotExisttException.class)
	 * public ResponseEntity<MyErrorDetails>
	 * BillNotExtraException(BillNotExisttException billPaymentException ,
	 * WebRequest request){
	 * MyErrorDetails errorDetails = new MyErrorDetails(LocalDateTime.now(),
	 * billPaymentException.getMessage(), request.getDescription(false));
	 * return new
	 * ResponseEntity<MyErrorDetails>(errorDetails,HttpStatus.BAD_REQUEST);
	 * }
	 */
}
