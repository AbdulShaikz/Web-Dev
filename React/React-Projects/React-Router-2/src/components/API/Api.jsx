//import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { githubInfoLoader } from "./githubInfoLoader";
function Api() {
    // const [data, setData] = useState(null); // Initialize data as null

    // useEffect(() => {
    //     fetch("https://randomuser.me/api/")
    //         .then((res) => {
    //             if (!res.ok) {
    //                 throw new Error("Network response was not ok");
    //             }
    //             return res.json();
    //         })
    //         .then((data) => {
    //             setData(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching data:", error);
    //         });
    // }, []);

    // Add a conditional check before accessing data
    
    const data = useLoaderData();
    console.log(data);

    return (
        <div className="text-white flex flex-nowrap items-center justify-center gap-8 p-8" style={{ height: "calc(100vh - 35%)" }}>
            <div className="w-1/2 h-full flex items-center justify-center p-8">
                <div className="text-center w-1/3 h-3/4 border-2 shadow-white shadow-xl rounded-lg overflow-hidden">
                    {/* Check if data is available before rendering */}
                    {data && (
                        <img className="h-full object-cover" src={data.avatar_url} alt="Image" />
                    )}
                </div>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-center p-8 text-left space-y-8">
                <h2 className="font-bold uppercase text-3xl">Name</h2>
                {/* Check if data is available before rendering */}
                {data && <p className="text-white">{data.login}</p>}
            </div>
        </div>
    );
}

export default Api;
export {githubInfoLoader}

  
