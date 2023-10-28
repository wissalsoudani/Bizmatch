package tn.esprit.userservice.validator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.TYPE_USE })
@Constraint(validatedBy = PasswordConfirmationValidator.class)
public @interface Password {
    String message() default "Invalid password";
    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
    }
