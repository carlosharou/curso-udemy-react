import { useState } from "react";

export function useInput(defaultValue, validationFcn) {
    const [ enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);


    const valueIsValid = validationFcn(enteredValue);


    const handleInputChange = (event) => {
        setEnteredValues(event.target.value);
        setDidEdit(false);
    }


    const handleInputBlur = () => {
        setDidEdit(true);
    }


    return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
    }
}