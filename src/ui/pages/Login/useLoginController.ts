import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { fincheckHttpClient } from '../../../app/services/fincheckHttpClient';

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

  const handleSubmit = hookFormHandleSubmit((data) => {
    fincheckHttpClient
      .post('/auth/signin', data)
      .then((response) => {
        console.log('Login successful:', response.data);
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  });

  return { handleSubmit, register, errors };
}
