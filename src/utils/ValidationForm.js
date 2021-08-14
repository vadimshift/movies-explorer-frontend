import { useState } from 'react';

export const useValidationForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsFormValid(input.closest('form').checkValidity());
  }

  return { values, setValues, handleChange, errors, isFormValid };
};
