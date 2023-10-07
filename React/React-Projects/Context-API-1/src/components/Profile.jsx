import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
    const {user} = useContext(UserContext);

    if(!user) return <div className="bg-yellow-500 flex justify-center items-center p-8 text-blue-800">Please login!</div>

    return (
        <div className="bg-yellow-500 flex justify-center items-center text-blue-800 p-8">
            <h2>Successfully logged in! Username is : {user.userName}</h2>
        </div>
    );
}

export default Profile;