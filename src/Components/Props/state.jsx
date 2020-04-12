import React, {Component} from 'react'

class State extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         count : 0
    //     }
    // };
    state =  {
        count : 0
    };
    render(){
        // console.log(this.state.count)
        return(
            <div>
                <p>My Name is Khan</p>
                <h6>Count = {this.state.count}</h6>
                <button onClick={() => {
                    // this.setState({count : this.state.count + 1});
                    this.setState((next) => {
                        return{
                            count : next.count + 1
                        }
                    },
                        () => {
                            console.log("Clicked", this.state.count)
                        }
                    )
                    // console.log("Clicked", this.state.count)
                }}>Increment</button>
            </div>
        )
    }
}
export default State