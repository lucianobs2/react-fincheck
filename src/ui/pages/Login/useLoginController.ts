import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import z from 'zod';
import { authService } from '../../../app/services/authService';
import type { SigninParams } from '../../../app/services/authService/signin';

const schema = z.object({
  email: z.string().nonempty('E-mail é obrigatório').email('E-mail inválido'),
  password: z.string().nonempty('Senha é obrigatória'),
});

type LoginFormProps = z.infer<typeof schema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['signin'],
    mutationFn: async (data: SigninParams) => authService.signin(data),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);

      console.log('accessToken', accessToken);
    } catch (error) {
      toast.error('Credenciais invalidas.');
    }
  });

  return { handleSubmit, register, errors, isPending };
}
