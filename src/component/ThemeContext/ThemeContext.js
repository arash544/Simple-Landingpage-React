import React,{useState} from 'react'

export const Maincontext=React.createContext();

export const Themecontext = (props) => {

    const [theme, setTheme] = useState(false)
    console.log(theme)
    return (
        <Maincontext.Provider value={[theme,setTheme]}>
            {props.children}
        </Maincontext.Provider>
        
    )
    
}


