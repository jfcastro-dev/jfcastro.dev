import { TaskBar, List } from '@react95/core'
import about from '../assets/About.png'
import resume from '../assets/Resume.png'
import joy from '../assets/game.png'
import blogIcon from '../assets/blog.png'

interface BottomNavProps {
  bio: () => void
  doom: () => void
  exp: () => void
  blog: () => void
}

export default function BottomNav ({ bio, doom, exp, blog }: BottomNavProps) {
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
            <List.Item onClick={blog}>
            <img src={blogIcon} className={'icon'} alt=''/>
                Blog
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
