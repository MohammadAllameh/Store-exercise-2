import {useField} from 'formik'


interface props {
    lable : string;
}

const MyInput = ({label,type="text",...props}) => {
    const [field,meta] = useField(props)
    
    return (
        <div className="flex flex-row m-2 space-x-5">
            <label htmlFor={props.id||props.name} className='text-2xl mx-2 font-semibold'>{label}</label>
            {/* <Field {...props} {...field} className='font-semibold ring hover:ring-indigo-600 text-red-400 border border-gray-600 rounded-xl m-4 p-4'/> */}
            <input {...field} {...props} className='bg-gray-100 text-emerald-400 py-2 px-4 rounded-2xl mx-4 font-normal text-lg'/>
                
            {/* <ErrorMessage name={props.name} className='bg-red-400 ' /> */}
            {meta.touched && meta.error ? <span>{meta.error}</span> : null}
        </div>
    )
}

export default MyInput