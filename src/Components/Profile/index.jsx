import React, {Component} from 'react'
import './profile.style.css'
import Bio from './Bio'
import Skills from './Skills'
import Links from './Links'

class Profile extends Component {
    me = {
        name : 'Md. Mahmudul Hasan',
        bio : 'MERN Stack Web Developer',
        skillA : 'Javascript',
        skillB : 'Python',
        skillC : 'C Language'
    }
    render(){
        // console.log('Profile - ', this.props)
        return(
            <div className="container">
                <Bio name={this.me.name} bio={this.me.bio}/>
                <Skills skillA={this.me.skillA} skillB={this.me.skillB} skillC={this.me.skillC}/>
                <Links/>
            </div>
        )
    }
}

export default Profile;