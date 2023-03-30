import {FC} from 'react'
import { Formik,Form } from 'formik'
import * as yup from 'yup'
import Link from 'next/link'


const Login : FC = () => {
    let yupShcemaLogin = yup.object().shape({
        email : yup.string().email().min(5),
        password : yup.string().required().min(5)
    })
    const submitHandlerLogin = (value : any) => {
        console.log(value)
    }
    return (
        <>
            <div className='mx-auto w-fit' dir='rtl'>
                <div className='flex items-center justify-center flex-col mt-auto border border-zinc-500 shadow-2xl pt-12 pb-24 rounded-2xl sm:my-24'>
                    <h2 className="font-bold text-2xl  text-indigo-600 pb-4">فرم ورود</h2>
                    <Formik initialValues={yupShcemaLogin}
                            onSubmit={submitHandlerLogin}>
                        <Form >
                            <div className='flex flex-col items-end flex-nowrap'>
                                <div className="flex flex-row m-2 space-x-5">
                                    <label className='text-2xl mx-2 font-semibold'>ایمیل : </label>
                                    <input name='email' type="email" placeholder='لطفا ایمیل را وارد کنید'  className='bg-gray-100 text-emerald-400 py-2 px-4 rounded-2xl mx-4 font-normal text-lg'/>
                                    { <span></span>}
                                </div>
                                <div className="flex flex-row m-2 space-x-5">
                                    <label className='text-2xl mx-2 font-semibold'> پسورد : </label>
                                    <input name='password' type="password" placeholder='لطفا پسورد را وارد کنید'  className='bg-gray-100 text-emerald-400 py-2 px-4 rounded-2xl mx-4 font-normal text-lg'/>
                                    { <span></span>}
                                </div>
                            </div>
                            
                            <div className='flex justify-center items-center'>
                                <button type='submit' className='bg-indigo-600 text-orange-50 font-medium text-xl hover:text-indigo-600 border hover:border-indigo-600 hover:bg-orange-50 transition-all duration-500 p-2 mt-4 rounded'>ارسال</button>
                            </div>
                            <div className='flex justify-center items-center mt-4'>
                                <h3>اگر ثبت نام نکردید می توانید <Link href='./register' className='no-underline hover:underline text-red-700'>ثبت نام کنید.</Link></h3>
                            </div>
                            
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Login