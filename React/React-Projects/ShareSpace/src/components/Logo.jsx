/* eslint-disable react/prop-types */
function Logo({width= '100px', className=""}) {
  return (
    <div className={`flex justify-start items-center h-full ${className}`}>
        <img 
            src="src\assets\logos\favicon.svg"
            alt="logo" 
            // style={width={width}}
            className="w-3/12 md:w-1/12 xl:w-1/12"
        />
        <p className="font-[exo] flex items-center justify-center text-center text-lg  md:text-2xl xl:text-4xl italic">ShareSpace</p>
    </div>
  )
}
export default Logo;