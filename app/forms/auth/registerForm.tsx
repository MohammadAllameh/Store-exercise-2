import { Form, FormikProps, withFormik } from "formik"
import * as yup from 'yup'

import MyInput from "@/app/components/shared/form/input"


interface RegisterFormValues {
    name: string,
    email: string,
    password: string
}

const InerrRegisterFrom = (props : FormikProps<RegisterFormValues>) => {
    return (
        <Form className="space-y-6">
            
            <div>
                <MyInput lable='Name :' id='name' inputName='name' type='text' autoComplete='name' placeholder='place filed'  />
            </div>
            <div>
                <MyInput lable='Email address :' id='email' inputName='email' type='email' autoComplete='email' placeholder='place filed'  />
            </div>
            <div>
                <MyInput lable='Password :' id='password' inputName='password' type='password' autoComplete='password' placeholder='place filed'  />
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border  border-indigo-600 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-white hover:text-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-500"
                >
                    Register
                </button>
            </div>
        </Form>
    )
}

interface RegiseterFormProps {
}

const registerFromValidationSchema = yup.object().shape({
    name : yup.string().required().min(5),
    email : yup.string().required().email(),
    password : yup.string().required().min(8)
})

const RegisterFrom = withFormik<RegiseterFormProps ,RegisterFormValues >({
    mapPropsToValues : props => ({
            name: '',
            email: '',
            password: ''
    }),
    validationSchema :registerFromValidationSchema,
    handleSubmit : (value) => {
        console.log(value)
    }
})(InerrRegisterFrom)


export default RegisterFrom;