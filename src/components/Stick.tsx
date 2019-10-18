import React from "react"
import "./stick.css"

interface IStyle {
  height: string,
  width: string,
  backgroundColor: string
}

interface IProps extends IStyle {}

const Stick = (props: IProps) => {
  const style: React.CSSProperties = { 
    height: props.height,
    width: props.width,
    backgroundColor: props.backgroundColor
  }

  return <div className="stick" style={style}></div>
}

export default Stick