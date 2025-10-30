import { fincheckHttpClient } from '../fincheckHttpClient';

interface SigninResponse {
  name: string;
  email: string;
}

export async function me() {
  const { data } = await fincheckHttpClient.get<SigninResponse>('/users/me');
  return data;
}
