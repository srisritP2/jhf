import { useState } from 'react';

/**
 * useForm custom hook for managing form state and validation.
 * - Accepts initial values and a validate function.
 * - Returns handlers and state for form fields, errors, and submission.
 */
const useForm = (
  initialValues: Record<string, any>,
  validate: (values: Record<string, any>) => Record<string, string>
) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        isSubmitting,
    };
};

export default useForm;