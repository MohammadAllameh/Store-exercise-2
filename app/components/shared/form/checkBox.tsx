
import { Field } from 'formik'
import { FC } from "react";

interface Inputprops {
    lable : string,
    inputClassName? : string,
    lableClassName? : string,
    id? : string,
    inputName? : string,
    type?: string,
    
}

const MyCheckBox : FC<Inputprops> = ({
    lable,lableClassName,
    id = "checkbox",inputName = "checkbox",type = "checkbox",inputClassName,

}) => {
    
    return (
        <>
            <label htmlFor={inputName} className={`${lableClassName ?? ''} block text-sm font-medium text-gray-700`}>
                {lable}
            </label>
            <Field id={id} name={inputName} type={type} className={`${inputClassName ?? ''} mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
            
        </>
    )
}

export default MyCheckBox;