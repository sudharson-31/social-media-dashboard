//import '../Styles/toggle.css';
import { useState } from "react";
export default function Header({followerCount}) {
    const App = document.getElementById("App");
    const preferenceQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const [darkMode,setMode] = useState(false);
    function switcher(){
        setMode(!darkMode);
        if(App.classList.contains("dark-mode")){
            App.classList.remove("dark-mode");
            App.classList.add("light-mode");

        }
        //if(App.classList.contains("light-mode")){
        else{
            App.classList.remove("light-mode");
            App.classList.add("dark-mode");
        }
        
    }
    return (
        <div id="Header">
            <div>
            <h1>
                Social Media Dashboard
            </h1>
            <h4>
                Total followers: {followerCount}
            </h4>
            </div>
            
        <div class="toggle-button-cover">
        <label htmlFor="dark-mode">Dark Mode</label>
      <div class="button-cover">
      
        <div class="button r" id="button-1"> 
          <input type="checkbox" class="checkbox" onClick={switcher} name={"dark-mode"}/>
          <div class="knobs"></div>
          <div class="layer"></div>
        </div>
      </div>
    </div>

        </div>
    )
}