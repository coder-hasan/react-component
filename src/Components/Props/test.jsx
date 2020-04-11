import React, {Component} from 'react'
import  Profile from './Profile'
import Skills from './Profile/Skills'
// import Props from './Props/index'

// class Child extends Component{
//     render(){
//         this.props.func(this)
//         return(
//             <h1>I am child</h1>
//         )
//     }
// }

const x = 'Out of Class';
        console.log(x)
class App extends Component {
    // getContext(context){
    //     console.log(context)
    // }
    render (){
        // this.getContext(this)
        const x = 'Class';
        console.log(x)
        return (
            <div className="app">
                <Profile />
                <div className="programmer">
                    <h3>List of Programmers</h3>
                    <p>Mr. Nam Nai</p>
                    <Skills skillA='React' skillB='Angular' skillC='Vue'/>
                    <p>Mr. Abaro Nam Nai</p>
                    <Skills skillA='NodeJS' skillB='ExpressJS' skillC='MongoDB'/>
                    {/* <Child func={this.getContext}/> */}
                    {/* <Props name="Mahmudul Hasan" />
                    <Props name="Raisul Islam" /> */}
                </div>
            </div>
        )
    }
}

export default App