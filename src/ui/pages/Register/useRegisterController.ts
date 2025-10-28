import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

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

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log('chama a api com:', data);
  });

  return { handleSubmit, register, errors };
}
