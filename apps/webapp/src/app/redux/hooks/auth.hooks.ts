import { actions } from '../actions/auth.actions'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks'
import { useNavigate } from 'react-router-dom'

export const useIsAuth = () => {
    const state = useSelector((state: any) => state.auth.isAuth)
    return state    
}

export const useLogout = () => {
    const _actions = useActions(actions)
    const _logout = () => {
        _actions.logout()
    }

    return _logout
}

export const useLogin = (emailRef: any, passwordRef: any) => {
    const state = useSelector((state: any) => state.auth.login)
    const _actions = useActions(actions)

    const getFromRef = (ref: any) => (ref?.current as any).value

    const handleLogin = (e: Event) => {
        e.preventDefault()
        _actions.login(getFromRef(emailRef), getFromRef(passwordRef))
    }

    return {
        ...state,
        handleLogin
    }
}