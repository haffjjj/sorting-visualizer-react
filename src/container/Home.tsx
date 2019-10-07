import React from "react"

import Stick from "../components/Stick"

interface IProps {}

interface IState {
  isShow: boolean
}

class Home extends React.Component<IProps , IState>{
  state = {
    isShow: true
  }

  _handleButton = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  
  render(){
    return (
      <div>
        <button onClick={this._handleButton}>CLick dongs</button>
        { JSON.stringify(this.state) }
        <Stick
          width={50}
          height={200}
        />
      </div>
    )
  }
}

export default Home