import AddNewUser from "./addNewUser/AddNewUser";
import "./chatList.css"
import {useState} from "react";
import { useUserStore } from "../../../lib/userStore";
import { useEffect } from "react";
import {doc, onSnapshot, getDoc} from "firebase/firestore";
import { db } from "../../../lib/firebase";

const ChatList = () => {
    const {currentUser} = useUserStore();
    const [addMode, setAddMode] = useState(false);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const unSub = onSnapshot(
            doc(db, "userchats", currentUser.id),
            async (res) => {
                const items = res.data().chats;

                const promises = items.map(async(item)=>{
                    const userDocRef = doc(db, "users", item.receiverId);
                    const userDocSnap = await getDoc(docRef);
                    const user = userDocSnap.data();
                    return {...item, user};
                });

                const chatData = await Promise.all(promises);

                setChats(chatData.sort((a,b) => b.updatedAt - a.updatedAt));
            }
        );
        return () => {
            unSub();
        };
    },[currentUser.id]);

    console.log(chats);

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

            {chats.map((chat) => (
                <div className="items" key = {chat.chatId}>
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <span>Sarah</span>
                        <p>{chat.lastMessage}</p>
                    </div>
                </div>
            ))}

            
            
            {addMode && <AddNewUser/>}
        </div>
    )
}

export default ChatList;