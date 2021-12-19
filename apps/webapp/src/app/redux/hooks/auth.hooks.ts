import { actions } from '../actions/auth.actions'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const getFromRef = (ref: any) => (ref?.current as any).value


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

    const handleLogin = (e: Event) => {
        e.preventDefault()
        _actions.login(getFromRef(emailRef), getFromRef(passwordRef))
    }

    return {
        ...state,
        handleLogin
    }
}

export const useGetMe = () => {
    const _actions = useActions(actions)

    useEffect(() => {
        _actions.getMe()
    }, [])
}

export const useMyData = () => {
    const state = useSelector((state: any) => state.auth.getMe.data)
    return state
}


export const useSignup = (fullnameRef: any, emailRef: any, passwordRef: any) => {
    const state = useSelector((state: any) => state.auth.signup)
    const _actions = useActions(actions)


    const handleSignup = (e: Event) => {
        e.preventDefault()
        _actions.signup(
            getFromRef(fullnameRef), 
            getFromRef(emailRef), 
            getFromRef(passwordRef)
        )
    }

    return {
        ...state,
        handleSignup
    }
}