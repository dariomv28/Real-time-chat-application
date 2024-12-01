import AddNewUser from "./addNewUser/AddNewUser";
import "./chatList.css"
import {useState} from "react";
const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src = "./search.png" alt = "search"/>
                    <input type = "text" placeholder="Search"/>
                </div>
                <img src = {addMode ? "./minus.png" : "./plus.png"} alt = "plus" className="add" 
                        onClick={() => setAddMode((prev) => !prev)}/>
            </div>

            <div className="items">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Sarah</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="items">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Sarah</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="items">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Sarah</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="items">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Sarah</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="items">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Sarah</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="items">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Sarah</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="items">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Sarah</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="items">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Sarah</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="items">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Sarah</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="items">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Sarah</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="items">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Sarah</span>
                    <p>Hello</p>
                </div>
            </div>
            {addMode && <AddNewUser/>}
        </div>
    )
}

export default ChatList;