import { useContext, useCallback, useState } from "react"
import Context from 'context/UserContext'
import loginService from 'services/login'
import addfavService from 'services/addFavs'

export default function useUser() {
    
    const {favs,jwt,setFavs,setJWT} = useContext(Context)
    const [state,setState] = useState({loading: false, error: false})

    const login = useCallback(({username,password}) =>{
        setState({loading:true, error: false})

        loginService({username,password})
        .then(jet =>{
            window.sessionStorage.setItem('jwt', jwt)
            setState({loading:false, error: false})
            setJWT(jet)
        })
        .catch(err =>{
            window.sessionStorage.removeItem('jwt')
            setState({loading:false, error: true})
            console.log(err)
        })
    },[setJWT])

    const addFav = useCallback(({id})=>{
        addfavService({id,jwt})
        .then(favs => setFavs(favs))
        .catch(err=>{
            console.error(err)
        })
    })

    const logout = useCallback(()=>{
        window.sessionStorage.removeItem('jwt')
        setJWT(null)
    },[setJWT])

    return {
        addFav,
        favs,
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout
    }
}