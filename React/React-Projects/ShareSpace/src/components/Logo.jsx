/* eslint-disable react/prop-types */
function Logo({width= '100px', className=""}) {
  return (
    <div className={`flex justify-center md:justify-start items-center h-full ${className}`}>
        <img 
            src="src\assets\logos\favicon.svg"
            alt="logo" 
            // style={width={width}}
            className="sm:2/12 w-1/12"
        />
        <p className="font-[exo] flex items-center justify-center text-center text-lg  md:text-2xl xl:text-4xl italic">ShareSpace</p>
    </div>
  )
}
export default Logo;