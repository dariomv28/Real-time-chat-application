import "./detail.css"

const Detail = () => {
    return(
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Sarah</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://img.pikbest.com/origin/09/19/03/61zpIkbEsTGjk.jpg!w700wp" alt="" />
                                <span>photo204.png</span>
                            </div>
                            <img src="./download.png" alt="" className="download"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://img.pikbest.com/origin/09/19/03/61zpIkbEsTGjk.jpg!w700wp" alt="" />
                                <span>photo204.png</span>
                            </div>
                            <img src="./download.png" alt="" className="download"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://img.pikbest.com/origin/09/19/03/61zpIkbEsTGjk.jpg!w700wp" alt="" />
                                <span>photo204.png</span>
                            </div>
                            <img src="./download.png" alt="" className="download"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://img.pikbest.com/origin/09/19/03/61zpIkbEsTGjk.jpg!w700wp" alt="" />
                                <span>photo204.png</span>
                            </div>
                            <img src="./download.png" alt="" className="download"/>
                        </div>
                        
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block</button>
            </div>

        </div>
    )
}

export default Detail