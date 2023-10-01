

// eslint-disable-next-line react/prop-types
function ColorButton({colorName, onClick}){

    return(
        <button className="flex flex-wrap justify-center
                            px-5 py-3 m-2 rounded-full"
                style={{backgroundColor: colorName, color: "white"}}
                onClick={()=>onClick(colorName)}>
                        
                        {colorName}
        
        </button>
    );
}

export default ColorButton;