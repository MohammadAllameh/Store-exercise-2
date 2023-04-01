import { Form, FormikProps, withFormik } from "formik"
import * as yup from 'yup'

import MyInput from "@/app/components/shared/form/input"
import Link from "next/link"
import MyCheckBox from "@/app/components/shared/form/checkBox"


interface LoginFormValues {
    email: string,
    password: string
}

const InerrLoginFrom = (props : FormikProps<LoginFormValues>) => {
    return (
        <Form className="space-y-6">
            
            <div>
                <MyInput lable='Email address :' id='email' inputName='email' type='email' autoComplete='email' placeholder='place filed'  />
            </div>
            <div>
                <MyInput lable='Password :' id='password' inputName='password' type='password' autoComplete='password' placeholder='place filed'  />
            </div>
            <div>
                <MyCheckBox lable="Remember me"/>
            </div>
            <h4 className="text-2xl font-medium text-orange-100 ">If you have not <Link href='./register' className="text-red-500 no-underline hover:underline">registered</Link>  yet, you can register</h4>
            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border  border-indigo-600 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-white hover:text-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-500"
                >
                    Login
                </button>
            </div>
        </Form>
    )
}

interface RegiseterFormProps {
}

const loginFromValidationSchema = yup.object().shape({
    email : yup.string().required().email(),
    password : yup.string().required().min(8)
})

const LoginFrom = withFormik<RegiseterFormProps ,LoginFormValues >({
    mapPropsToValues : props => ({
            email: '',
            password: ''
    }),
    validationSchema :loginFromValidationSchema,
    handleSubmit : (value) => {
        console.log(value)
    }
})(InerrLoginFrom)


export default LoginFrom;