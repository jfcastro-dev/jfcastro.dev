import { ThemeProvider,TaskBar,List } from '@react95/core';
import GlobalStyle from './GlobalStyle';
import about from '../assets/About.png';
import resume from '../assets/Resume.png';
import project from '../assets/Proj.png';
import Bio from '../pages/bio'
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
      openExp: true,
      openProj: true
    }
}



render(){
  let bio=<></>;
  let exp=<></>;
  let proj=<></>
  if(this.state.openBio){
    bio=<Bio closeBio={()=>this.setState({openBio: false})}/>
  }
  if(this.state.openExp){
    exp=<Exp closeExp={()=>this.setState({openExp: false})}/>
  }
  if(this.state.openProj){
    proj=<Proj closeProj={()=>this.setState({openProj: false})}/>
  }
  return(
    <div className='bg'>
      <ThemeProvider theme={'millenium'}>
        <GlobalStyle />
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
                </List>
            }
        />
      </ThemeProvider>
    <ClippyProvider/>
    </div>
)};
  }

export default App;