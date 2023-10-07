import { useContext, useState } from "react";
import UserContext from "../context/userContext";

function LoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const login = (e)=>{
        e.preventDefault();
        console.log(setUser);
        setUser({userName, password});
    }

    return (
        <div className="bg-slate-800 h-screen w-full flex flex-col justify-center items-center">
            <h2 className="p-8 font-bold text-3xl text-white">Login</h2>
            <div className="flex flex-col gap-8 justify-center items-center
                            bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-xl w-1/2 h-1/2">
                <input type="text" className="block border-1 border-black w-2/4 h-8 px-5 py-3 text-start rounded-md" 
                       placeholder="username" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                <input type="text" className="block border-1 border-black w-2/4 h-8 px-5 py-3 text-start rounded-md" 
                       placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button 
                onClick={login}
                className="bg-blue-800 px-5 py-3 text-white  hover:bg-gradient-to-br from-orange-800 to-green-800 hover:shadow-2xl duration-100">Login</button>
            </div>

        </div>
    );
}

export default LoginPage;