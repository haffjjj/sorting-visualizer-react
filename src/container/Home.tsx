import React from "react"

import Stick from "../components/Stick"
import "./home.css"

interface IProps {}

interface IState {
  arr: number[],
  arrActive: number[]
  delay: number,
  iteration: number,
}

class Home extends React.Component<IProps , IState>{

  state = {
    arr: [],
    arrActive: [],
    delay: 1000,
    iteration: 0
  }

  //crate async setState for multiple purpose
  _asyncSetState = async (state: any) => {
    return new Promise((r) => {
      this.setState(state, r)
    })
  }

  _delay = async (delay: number) => {
    return new Promise((r) => {
      setTimeout(() => r(), delay)
    })
  }

  _randNumArr = (total: number):number[] => {
    let arr:number[] = []
    for (let i = 1; i <= total; i++) arr.push(i)
     
    //suffle array
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    return arr
  }

  _bubbleSort = async () => {
    //get array from state
    const arr = this.state.arr
    let len = arr.length;

    //bubble sort algorithm
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                await this._asyncSetState({
                  arrActive: [arr[j + 1], arr[j]]
                })
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp

                //set delay
                await this._delay(this.state.delay)
                // update state after 1 iteration
                this.setState({
                  arr: arr,
                  iteration: this.state.iteration + 1
                })                
            }
        }
    }
  }

  _insertionSort = async () => {
    const arr = this.state.arr
    let length = arr.length;
    for (let i = 1; i < length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {

            await this._asyncSetState({
              arrActive: [arr[j + 1], arr[j]]
            })

            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;

        //set delay
        await this._delay(this.state.delay)
        // update state after 1 iteration
        this.setState({
          arr: arr,
          iteration: this.state.iteration + 1
        })
    }
  }

  _handleReset = async () => {
    const arr = this._randNumArr(100)
    await this._asyncSetState({ arr })
  }

  async componentDidMount(){
    await this._handleReset()
    //visualize bubble sort algorithm, sort data from state.arr
    this._bubbleSort()
    // this._insertionSort()
  }

  render(){
    return (
      <div className="wrapper">
        <div className="display">

          <div className="control">
            {/* <button>reset</button>
            <button>reset</button> */}
          </div>

          <div className="sort">
          {this.state.arr.map((numb) => (
            <Stick
              width={`1%`}
              height={`${100/this.state.arr.length*numb}%`}
              isActive={this.state.arrActive.includes(numb) ? true : false}
            />
          ))}
          </div>
          <div className="log">
            <p>array total: {JSON.stringify(this.state.arr.length)}</p>
            <p>algorithm: bubble sort</p>
            <p>swap: {JSON.stringify(this.state.arrActive)}</p>
            <p>iteration: {JSON.stringify(this.state.iteration)}</p>
            <p>log: {JSON.stringify(this.state.arr)}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home