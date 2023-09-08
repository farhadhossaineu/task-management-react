import React from "react";
import './SignInSignUp.css';
function Home(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div>
            <button onClick={logout} className="logout">SignIn Page</button>
            <button onClick={deleteAccount} className="delete">SignUp Page</button>
        </div>
    );
}
export default Home;