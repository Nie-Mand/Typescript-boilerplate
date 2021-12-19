import axios from './axios'


type loginType = (body: any) => Promise<{ count: number }>
export const login: loginType = async (body) => {
    const rq = await axios.post('/auth/login', body)   
    return rq.data
}
