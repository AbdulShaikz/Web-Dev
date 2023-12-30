import React from "react"

interface ButtonProps {
    children: React.ReactNode;
}

function Button({children} : ButtonProps) {
  return (
    <button className="bg-[#387ed1] p-3 font-[inter] text-white font-semibold">{children}</button>
  )
}
export default Button