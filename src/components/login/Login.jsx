import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth,db } from "../../lib/firebase"
import {doc, setDoc} from "firebase/firestore"
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

    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {username, email, password} = Object.fromEntries(formData);

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            await setDoc(doc(db, "users", "res.user.uid"), {
                username,
                email,
                id: res.user.uid,
                blocked: [],
            });
            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: []
            });
            toast.success("User created successfully")
        } catch(err) {
            console.log(err)    
            toast.error(err.message)
        }
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
                <form onSubmit={handleRegister}>

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