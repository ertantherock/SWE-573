package com.ePocket.ws.user;

import static java.lang.annotation.ElementType.ANNOTATION_TYPE;
import static java.lang.annotation.ElementType.CONSTRUCTOR;
import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.ElementType.PARAMETER;
import static java.lang.annotation.ElementType.TYPE_USE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Documented;
import java.lang.annotation.Repeatable;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;
import javax.validation.constraints.NotNull.List;

@Target({ FIELD })
@Retention(RUNTIME)
@Constraint(validatedBy = { EssizUserNameValidation.class })

public @interface EssizUserNameAnnotation {
	String message() default "Username is used. Please use another user name";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };
	
}
