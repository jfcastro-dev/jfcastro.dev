import Window from '../components/Window'
import me from '../assets/me.jpg'
import '../misc/style.css'

interface FrameProps {
  closeWindow: () => void;
  width: string;
  x: string;
}

export default function About ({ closeWindow, x, width }: FrameProps) {
  return (
        <Window closeWindow={closeWindow} x={x} width={width} title={'About Me'}>
            <h4>Hello!</h4>
            <div className='grid-container'>
                <div className='grid-item' >
                    <p>
                        Hey, I'm James. I'm an NY-based Software Engineer @ Canon and a
                        Stony Brook Computer Science Grad. I've spent some time working
                        over at Endeavor Streaming as a QA & SDET, so I have experience with
                        testing & ensuring bug free deliverables. I love creating useful
                        tools and learning new technologies. I've worked with a lot of Python,
                        NodeJS & AWS. Currently, I'm doing a refresher on some React & other technologies
                        I've used in undergrad.
                    </p>
                </div>
                <div className='pic'>
                    <div className='grid-item'>
                        <img src={me} style={{ width: '99%' }} alt="this is me" />
                    </div>
                </div>
            </div>
            <p>
                I try to keep busy when I'm not working by playing guitar, gardening,
                lifting weights, and of course spending time with some quality friends.
                I ocassionally go on hikes, take some photos, and try my hand at some
                new recipes. Wanna connect? Add me on <a href='https://www.linkedin.com/in/james-castro-b38b0717b/'>
                LinkedIn here</a>
            </p>

                <p><b>Currently Reading: </b> Thinking Fast and Slow</p>
                <p><b>Currently Playing: </b> Animal Crossing</p>
                <p><b>Currently Watching: </b> House of the Dragon</p>
        </Window>
  )
}
