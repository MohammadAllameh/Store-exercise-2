
import {ErrorMessage, Field } from 'formik'
import { FC } from "react";

interface Inputprops {
    lable : string,
    inputClassName? : string,
    errorClassName? : string,
    lableClassName? : string,
    id : string,
    inputName : string,
    type: string,
    autoComplete : string,
    placeholder : string,
    
}

const MyInput : FC<Inputprops> = ({
    lable,lableClassName,
    id,inputName,type = "text",autoComplete,placeholder,inputClassName,
    errorClassName
}) => {
    
    return (
        <>
            <label htmlFor={inputName} className={`${lableClassName ?? ''} block text-sm font-medium text-gray-700`}>
                {lable}
            </label>
            <Field placeholder={placeholder} id={id} name={inputName} type={type} autoComplete={autoComplete}  className={`${inputClassName ?? ''} mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
            <ErrorMessage name={inputName} className={`${errorClassName ?? ''} text-sm text-red-600`} component='div' />
        </>
    )
}

export default MyInput