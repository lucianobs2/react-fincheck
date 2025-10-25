import illustration from '../../../assets/illustration.png';
import { Logo } from '../../components/icons/Logo';

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="flex w-full h-full">teste</div>
      <div className="flex justify-center items-center w-1/2 h-full p-8">
        <img
          src={illustration}
          alt="background-image"
          className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-4xl"
        />

        <div className="max-w-[656px] bg-white p-10 absolute bottom-8 rounded-b-4xl">
          <Logo className="text-gray-500 h-6" />

          <p className="text-gray-700 font-medium text-xl mt-6">
            Gerencie sua finanças pessoais de uma forma simples com fincheck, e
            o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
