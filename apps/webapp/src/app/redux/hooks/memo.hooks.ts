import { useEffect } from 'react'
import { actions } from '../actions/memo.actions'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks'


export const useCountAll = () => {
    const state = useSelector((state: any) => state.memo.countAll)
    const _actions = useActions(actions)
    useEffect(() => {
        _actions.countAll()
    }, [])

    return state
}

export const useGetMyMemos = () => {
    const state = useSelector((state: any) => state.memo.getMyMemos)
    const _actions = useActions(actions)
    useEffect(() => {
        _actions.getMyMemos()
    }, [])

    return state
}