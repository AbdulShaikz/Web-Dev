function Api() {
    return (
        <div className="text-white flex flex-nowrap items-center justify-center gap-8 p-8" 
        style={{height : "calc(100vh - 35%)"}}>
            <div className=" w-1/2 h-full  flex items-center justify-center p-8">
                <div className="text-center w-full h-1/2 border-2 shadow-white shadow-xl rounded-lg overflow-hidden">
                    <img src="" alt="Image" />
                </div>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-center p-8 text-left space-y-8">
                <h2 className="font-bold uppercase text-3xl">Name</h2>
                <p>Abdul</p>
            </div>
        </div>
    );
}

export default Api;