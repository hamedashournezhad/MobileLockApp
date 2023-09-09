import { useState,useEffect} from "react";

function Theme() {
    const themes = ["light","dark"];
    const checkThemes = localStorage.getItem("bgColor") === themes[0] ? themes[1] : themes[0];
    const [theme, settheme] = useState(checkThemes);
    useEffect(() => {
        localStorage.getItem("bgColor")===themes[0] ? document.body.style.backgroundColor = "rgba(255,255,255,1)" : document.body.style.backgroundColor = "rgba(20,20,20,1)";
    }, [])
    const theme_handler = () => {
        if(theme===themes[0]){
            // Light
            document.body.style.backgroundColor = "rgba(255,255,255,1)";
            localStorage.setItem("bgColor",themes[0]);
            settheme(themes[1]);
        }else{
            // Dark
            document.body.style.backgroundColor = "rgba(20,20,20,1)";
            settheme(themes[0]);
            localStorage.setItem("bgColor",themes[1]);
        }
    }
    return ( 
        <button type="button" onClick={theme_handler}>Change Theme to {theme}</button>
    );
}

export default Theme;