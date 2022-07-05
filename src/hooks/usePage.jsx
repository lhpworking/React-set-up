
import { createContext, useContext, useState } from 'react'

const PageContext = createContext({})

export const PageProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false)
    return <PageContext.Provider value={ { isLogin, setIsLogin } }>{ children }</PageContext.Provider>
}

export const usePage = () => useContext(PageContext)

