import "./userInfo.css";


const Userinfo = () => {
    return(
        
        <div className="userInfo">

            <div className="user">
                <img src = "./avatar.png" alt = "User's avatar"/>
                <h2>Vo Minh Dang</h2>
            </div>

            <div className="icons">
                <img src = "./more.png" alt = "more"/>
                <img src = "./video.png" alt = "video"/>
                <img src = "./edit.png" alt = "edit"/>
                <img src="./logout.png" alt="" />
            </div>
        </div>
    )
}

export default Userinfo