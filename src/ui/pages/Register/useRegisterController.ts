import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { authService } from '../../../app/services/authService';

import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useAuth } from '../../../app/hooks/useAuth';
import type { SignupParams } from '../../../app/services/authService/signup';

const schema = z.object({
  name: z
    .string()
    .nonempty('Nome é obrigatório')
    .min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().nonempty('E-mail é obrigatório').email('E-mail inválido'),
  password: z
    .string()
    .nonempty('Senha é obrigatório')
    .min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

type RegisterFormProps = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormProps>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['signup'],
    mutationFn: async (data: SignupParams) => authService.signup(data),
  });

  const { signIn } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signIn(accessToken);
    } catch (error) {
      toast.error('Erro ao criar conta. Tente novamente.');
    }
  });

  return { handleSubmit, register, errors, isPending };
}
