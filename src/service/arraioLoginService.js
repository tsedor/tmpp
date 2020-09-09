import { post } from './httpService';

export const signIn = data => {
    const uri = 'https://api.arraio.pl/api/login';

    return post(uri, data); 
}