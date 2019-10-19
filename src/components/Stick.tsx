import React from "react"
import "./stick.css"

interface IStyle {
  height: string,
  width: string,
}

interface IProps extends IStyle {
  isActive: boolean
}

const Stick = (props: IProps) => {
  const style: React.CSSProperties = { 
    height: props.height,
    width: props.width
  }

  return <div className="wrap_stick" style={style}>
    <div className="stick" style={{backgroundColor: props.isActive ? `red` : `black`}}></div>
  </div>
}

export default Stick