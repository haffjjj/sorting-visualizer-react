import React from "react"
import "./stick.css"

interface IStyle {
  height: string,
  width: string
}

interface IProps extends IStyle {}

const Stick = (props: IProps) => {
  const style: IStyle = { 
    height: props.height,
    width: props.width
  }

  return <div className="stick" style={style}></div>
}

export default Stick