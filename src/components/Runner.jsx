import Screen from "./Screen";
import "../assets/css/Screen.css"
import Title from "./Title";
import Circle from "./Circle";
import Slider from "./Slider";
import { useState } from "react";
import sun from "../assets/images/HD-wallpaper-bright-sun-bright-sun-sunlight-nature.jpg";
import night from "../assets/images/HD-wallpaper-nature-night.jpg";
function Runner() {
    let BackgroundChanged = false;    
    const [wallpaper, setwallpaper] = useState(night);
    const LockScreenHandler = (e) => {
        if(e.target.value===100 || e.target.value>99){
            setwallpaper(sun);
            BackgroundChanged = true;
        }else{
            setwallpaper(night);
            BackgroundChanged = false;
        }
    }
    return (
        <Screen classAttr="Mobile" styleParam={!BackgroundChanged ? {backgroundImage: `url(${wallpaper})`} : {backgroundImage: `url(${wallpaper})`}}>
            <Circle />
            <Title time={new Date().getHours() + ":" + new Date().getMinutes() + (new Date().getHours()>12 ? " PM" : " AM") } />
            <Slider SliderHandler={LockScreenHandler} />
        </Screen>
    );
}

export default Runner;