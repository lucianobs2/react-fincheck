import { sleep } from '../../utils/sleep';
import { fincheckHttpClient } from '../fincheckHttpClient';

export interface SigninParams {
  email: string;
  password: string;
}

interface SigninResponse {
  accessToken: string;
}

export async function signin(params: SigninParams) {
  await sleep(1000); // Simula tempo de resposta da API

  const { data } = await fincheckHttpClient.post<SigninResponse>(
    '/auth/signin',
    params
  );
  return data;
}
