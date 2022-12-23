import { TaskBar, List } from '@react95/core'
import about from '../assets/About.png'
import resume from '../assets/Resume.png'
import project from '../assets/Proj.png'
import joy from '../assets/game.png'

export default function BottomNav () {
  return (
    <>

    <TaskBar
    list={
        <List>
            <List.Item onClick={() => console.log('Click')}>
                <img src={about} className={'icon'} alt=''/>
                About
            </List.Item>
            <List.Divider />
            <List.Item onClick={() => console.log('CLick')}>
            <img src={project} className={'icon'} alt=''/>
                Projects
            </List.Item>
            <List.Divider />
            <List.Item onClick={() => console.log('Click')}>
            <img src={resume} className={'icon'} alt='' />
                Resume
            </List.Item>
            <List.Divider />
            <List.Item onClick={() => console.log('hello')}>
            <img src={joy} className={'icon'} alt=''/>
                Doom
            </List.Item>
        </List>
    }
/>
</>
  )
}
