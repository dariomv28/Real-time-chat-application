import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify"
const Login = () => {
    
    const [avatar, setAvatar] = useState({
        file: null, url: ""
    })

    const handleAvatar = e => {
        if(e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = e => {
        e.preventDefault()
        toast.warn("Hello")
    }

    return(

        <div className="login">
            <div className="item">
                <h2>Welcome back!</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name="email" />
                    <input type = "password" placeholder="Password" name="password"/>
                    <span>Forgot Password?</span>
                    <button>Login</button>
                </form>
            </div>
            <div className="item">
                <h2>NEW USER</h2>
                <span>Please register</span>
                <form >

                    <input type="text" placeholder="Username" name="username"/>
                    <input type="text" placeholder="Email" name="email" />
                    <input type = "password" placeholder="Password" name="password"/>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Your avatar
                    </label>
                    <input type="file" id="file" onChange={handleAvatar}/>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
        
    )
}

export default Login