import axios from './axios'


type countAllType = () => Promise<{ count: number }>
export const countAll: countAllType = async () => {
    const rq = await axios.get('/memo/count')   
    return rq.data
}

type getMyMemosType = () => Promise<{ memos: any[] }>
export const getMyMemos: getMyMemosType = async () => {
    const rq = await axios.get('/memo')   
    return rq.data
}
