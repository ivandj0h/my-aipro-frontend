import axios from 'axios';

export async function login(email: string, password: string) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw new Error('Login failed');
    }
}
