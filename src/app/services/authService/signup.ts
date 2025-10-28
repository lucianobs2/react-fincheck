import { sleep } from '../../utils/sleep';
import { fincheckHttpClient } from '../fincheckHttpClient';

export interface SignupParams {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  accessToken: string;
}

export async function signup(params: SignupParams) {
  await sleep(1000); // Simula tempo de resposta da API

  const { data } = await fincheckHttpClient.post<SignupResponse>(
    '/auth/signup',
    params
  );
  return data;
}
