import { NextPage } from 'next'
import Image from 'next/image';

import RegisterFrom from '@/app/forms/auth/registerForm';

import logoSvg from './../../public/icons/logo.svg'

const Regitster: NextPage = () => {
    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <Image className="mx-auto h-12 w-auto" src={logoSvg} alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">Rigeter on Shopy</h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <RegisterFrom />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Regitster