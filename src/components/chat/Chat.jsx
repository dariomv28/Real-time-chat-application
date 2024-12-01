import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import {useEffect, useRef, useState} from "react";

const Chat = () => {
    const [openEmoji, setOpenEmoji] = useState(false);
    const [text, setText] = useState("");
    const endRef = useRef(null);
    useEffect(() => {
        endRef.current?.scrollIntoView({behavior: "smooth"});
    },[]);
    return(
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <span>Sarah</span>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png"/>
                    <img src="./video.png"/>
                    <img src="./info.png"/>
                </div>
            </div>

            <div className="center">

                <div className="message">
                    <img src="./avatar.png" alt=""  />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ducimus,
                             nulla dolore quidem maiores aspernatur, 
                             non illum placeat, odit facere autem iste modi ullam et sapiente perferendis 
                             asperiores quo maxime.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="texts">
                        <img src="https://img.pikbest.com/origin/09/19/03/61zpIkbEsTGjk.jpg!w700wp" alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ducimus,
                             nulla dolore quidem maiores aspernatur, 
                             non illum placeat, odit facere autem iste modi ullam et sapiente perferendis 
                             asperiores quo maxime.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="./avatar.png" alt=""  />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ducimus,
                             nulla dolore quidem maiores aspernatur, 
                             non illum placeat, odit facere autem iste modi ullam et sapiente perferendis 
                             asperiores quo maxime.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ducimus,
                             nulla dolore quidem maiores aspernatur, 
                             non illum placeat, odit facere autem iste modi ullam et sapiente perferendis 
                             asperiores quo maxime.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref = {endRef}></div>
            </div>

            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt=""/>
                    <img src="./camera.png" alt=""/>
                    <img src="./mic.png" alt=""/>
                </div>

                <div className="messageInput">
                  <input type="text" placeholder="Type a message..." onChange={e => setText(e.target.value)} value={text}/>
                  <img src="./emoji.png" alt="" onClick={() => setOpenEmoji(prev => !prev)}/>
                </div>
                <div className="emojiPicker">
                   <EmojiPicker open = {openEmoji} onEmojiClick={e => {
                        setText(prev => prev += e.emoji);
                        setOpenEmoji(false);
                   }}/>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}
export default Chat