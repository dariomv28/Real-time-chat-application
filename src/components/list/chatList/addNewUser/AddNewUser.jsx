import "./addNewUser.css"

const AddNewUser = () => {
    return (
        <div className="addNewUser">
            <form >
                <input type="text" name="username" placeholder="Enter username" />
                <button>Search</button>
            </form>
            <div className="user">
                <div className="detail">
                    <img src="./avatar.png" alt="" />
                    <span>Sarah</span>
                </div>
                <button>Add</button>
            </div>
        </div>
    )
}

export default AddNewUser