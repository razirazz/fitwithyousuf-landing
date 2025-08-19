'use client';

import { useContext } from "react";
import { ThemeContext } from "./themeprovider";

import { Moon, Sun } from 'lucide-react';

const ThemeChanger = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    
    function SetIcon() {
        return theme === "dark" ? <Moon className="inline-block align-text-top size-[20] stroke-[1.5]"/> : <Sun className="inline-block align-text-top size-[20] stroke-[1.5]"/>
    }
    
    return (        
        <div className="block text-[15px] font-(family-name:--font-urbanist) tracking-wider font-medium dark:font-normal" onClick={() => toggleTheme} >
            {/* <h1>CheckBox</h1> */}
            <label className=""> 
                { SetIcon() }
                <input className="invisible size-1" type="checkbox" onChange={toggleTheme} />
                { theme.charAt(0).toUpperCase() + theme.slice(1) } 
            </label>
        </div>
    )
} 

export default ThemeChanger
