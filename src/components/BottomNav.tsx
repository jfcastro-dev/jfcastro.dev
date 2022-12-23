import { TaskBar, List } from '@react95/core'
import about from '../assets/About.png'
import resume from '../assets/Resume.png'
import camera from '../assets/camera.png'
import joy from '../assets/game.png'
import blog from '../assets/blog.png'

interface BottomNavProps{
    bio: () => void;
    doom: () => void;
    exp: () => void;
}

export default function BottomNav ({bio, doom, exp}: BottomNavProps) {
  return (
    <>

    <TaskBar
    list={
        <List>
            <List.Item onClick={bio}>
                <img src={about} className={'icon'} alt=''/>
                About
            </List.Item>
            <List.Divider />
            <List.Item onClick={() => console.log('Click')}>
            <img src={blog} className={'icon'} alt=''/>
                Blog
            </List.Item>
            <List.Item onClick={doom}>
            <img src={camera} className={'icon'} alt=''/>
                Gallery
            </List.Item>
            <List.Divider />
            <List.Item onClick={exp}>
            <img src={resume} className={'icon'} alt='' />
                Resume
            </List.Item>
            <List.Divider />
            <List.Item onClick={doom}>
            <img src={joy} className={'icon'} alt=''/>
                Doom
            </List.Item>
            
        </List>
    }
/>
</>
  )
}
