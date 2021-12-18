import axios from './axios'


type countAllType = () => Promise<{ count: number }>
export const countAll: countAllType = async () => {
    const rq = await axios.get('/memo/count')   
    return rq.data
}
