import { ThemeProvider,TaskBar,List } from '@react95/core';
import GlobalStyle from './GlobalStyle';
import about from '../assets/About.png';
import resume from '../assets/Resume.png';
import project from '../assets/Proj.png';
import Bio from '../pages/bio'
import joy from '../assets/game.png'
import Doom from '../pages/doom'
import Exp from '../pages/exp'
import Proj from '../pages/proj'
import '@react95/icons/icons.css';
 
import { ClippyProvider } from '@react95/clippy';
import React, { Component } from 'react'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openBio: true,
      openResume: true,
      openProj: true,
      openDoom: false,
      isMobile: false
    }
}

componentDidMount(){
  if( window.innerWidth < 850){
    this.setState({isMobile:true,openResume:false,openProj:false})
  }
}

render(){
  
  let bio=<></>;
  let exp=<></>;
  let proj=<></>;
  let doom=<></>;
  if(this.state.openBio && this.state.isMobile){
    bio=<Bio wid='70vw' closeBio={()=>this.setState({openBio: false})}/>
  }
  if(this.state.openBio && this.state.isMobile==false){
    bio=<Bio wid='32vw' closeBio={()=>this.setState({openBio: false})}/>
  }
  if(this.state.openResume && this.state.isMobile){
    exp=<Exp wid='70vw' closeExp={()=>this.setState({openResume: false})}/>
  }
  if(this.state.openResume && this.state.isMobile==false){
    exp=<Exp wid='33vw' closeExp={()=>this.setState({openResume: false})}/>
  }
  if(this.state.openProj && this.state.isMobile){
    proj=<Proj wid='70vw' closeProj={()=>this.setState({openProj: false})}/>
  }
  if(this.state.openProj && this.state.isMobile==false){
    proj=<Proj wid='30vw' closeProj={()=>this.setState({openProj: false})}/>
  }
  if(this.state.openDoom && this.state.isMobile){
    doom=<Doom wid='600' closeDoom={()=>this.setState({openDoom: false})}/>
  }
  if(this.state.openDoom && this.state.isMobile==false){
    doom=<Doom wid='50vw' closeDoom={()=>this.setState({openDoom: false})}/>
  }
  return(
    <div className='bg'>
      <ThemeProvider theme={'millenium'}>
        <GlobalStyle />
        {doom}
        {bio}
        {exp}
        {proj}
        <TaskBar
            list={
                <List>
                    <List.Item onClick={()=>this.setState({openBio: true})}>
                        <img src={about} className={'icon'}   alt=''/>
                        About
                    </List.Item>
                    <List.Divider />
                    <List.Item onClick={()=>this.setState({openResume: true})}>
                    <img src={resume} className={'icon'} alt='' />
                        Resume
                    </List.Item>
                    <List.Divider />
                    <List.Item onClick={()=>this.setState({openProj: true})}>
                    <img src={project} className={'icon'} alt=''/>
                        Projects
                    </List.Item>
                    <List.Divider />
                    <List.Item onClick={()=>this.setState({openDoom: true})}>
                    <img src={joy} className={'icon'} alt=''/>
                        Doom
                    </List.Item>
                </List>
            }
        />
      </ThemeProvider>

    </div>
)};
  }

export default App;