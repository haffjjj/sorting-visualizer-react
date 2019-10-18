import React from "react"

// import Stick from "../components/Stick"
// import "./home.css"

interface IProps {}

interface IState {
  arr: number[],
  delay: number
}

class Home extends React.Component<IProps , IState>{

  state = {
    arr: [],
    delay: 50
  }

  //crate async setState for multiple purpose
  private _asyncSetState = async (state: any) => {
    return new Promise((r) => {
      this.setState(state, r)
    })
  }

  private _delay = async (delay: number) => {
    return new Promise((r) => {
      setTimeout(() => r(), delay)
    })
  }

  private _randNumArr = (total: number):number[] => {
    let arr:number[] = []
    for (let i = 1; i <= total; i++) arr.push(i)
    
    //suffle array
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }

    return arr
  }

  private _bubbleSort = async () => {
    //get array from state
    const arr = this.state.arr
    let len = arr.length;

    //bubble sort algorithm
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp

                //set delay
                await this._delay(this.state.delay)
                // update state after 1 iteration
                this.setState({
                  arr: arr
                })
            }
        }
    }
  }

  async componentDidMount(){
    const arr = this._randNumArr(20)
    await this._asyncSetState({ arr })

    //visualize bubble sort algorithm, sort data from state.arr
    this._bubbleSort()
  }

  render(){
    return (
      <div className="wrapper">
        <div className="display">
          <p>{JSON.stringify(this.state.arr)}</p>
        </div>
      </div>
    )
  }
}

export default Home