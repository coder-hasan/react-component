import React, {Component} from 'react'
import  Profile from './Profile'
import Skills from './Profile/Skills'
// import Props from './Props/index'

const Child =(props) =>{
    
    return(
        <div>
            <h1>I am child Component</h1>
            <p>I don't know what to do</p>
            {props.children}
        </div>
    )
}
class App extends Component {
    render (){
        return (
            <div className="app">
                <Profile />
                <div className="programmer">
                    <h3>List of Programmers</h3>
                    <p>Mr. Nam Nai</p>
                    <Skills skillA='React' skillB='Angular' skillC='Vue'/>
                    <p>Mr. Abaro Nam Nai</p>
                    <Skills skillA='NodeJS' skillB='ExpressJS' skillC='MongoDB'/>
                    <Child>
                        <p><strong>I am from Parent</strong></p>
                        <p><strong>I am Child of Child Component</strong></p>
                    </Child>
                    {/* <Props name="Mahmudul Hasan" />
                    <Props name="Raisul Islam" /> */}
                </div>
            </div>
        )
    }
}

export default App