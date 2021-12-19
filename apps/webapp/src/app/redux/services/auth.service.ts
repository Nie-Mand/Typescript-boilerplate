import axios from './axios'

type loginType = (body: any) => Promise<{ count: number }>
export const login: loginType = async (body) => {
    const rq = await axios.post('/auth/login', body)   
    return rq.data
}

type singupType = (body: any) => Promise<{ count: number }>
export const signup: singupType = async (body) => {
    const rq = await axios.post('/auth/signup', body)   
    return rq.data
}

type getMeType = () => Promise<{ me: any }>
export const getMe: getMeType = async () => {
    const rq = await axios.get('/user')   
    return rq.data
}