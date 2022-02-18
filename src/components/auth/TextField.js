import React from 'react';
import {useField, ErrorMessage} from "formik";

export const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-floating mb-3">
            <input className={`form-control ${meta.touched && meta.error && `is-invalid`}`}  autoComplete='off' {...field} {...props} />
            <label className="mb-2" htmlFor={field.name}>{label}</label>
            <ErrorMessage  name={field.name}/>
        </div>
    );
};

