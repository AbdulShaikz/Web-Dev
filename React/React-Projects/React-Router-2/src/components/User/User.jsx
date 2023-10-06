import {useParams} from "react-router-dom"

function User() {
    const {username} = useParams();
    console.log(useParams);

    return (
        <div className="text-white text-center border-8 p-8 m-8">User : {username}</div>
    );
}

export default User;