import { Outlet } from 'react-router-dom';
import illustration from '../../../assets/illustration.png';
import { Logo } from '../../components/icons/Logo';

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-center lg:w-1/2">
        <Logo className="h-6 text-gray-500" />

        <div className="mt-16 w-full max-w-[504px] px-8">
          <Outlet />
        </div>
      </div>

      <div className="justify-center items-center w-1/2 h-full p-8 hidden lg:flex">
        <img
          src={illustration}
          alt="background-image"
          className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-4xl"
        />

        <div className="max-w-[656px] bottom-8 bg-white p-10 absolute rounded-b-4xl">
          <Logo className="text-teal-900 h-8" />

          <p className="text-gray-700 font-medium text-xl mt-6">
            Gerencie sua finanças pessoais de uma forma simples com fincheck, e
            o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
