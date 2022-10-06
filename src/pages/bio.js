import React from 'react'
import { Modal, Frame } from '@react95/core'
import me from '../assets/me.JPG'; 
import 'bootstrap/dist/css/bootstrap.min.css'   
import '../style/misc.css'

function Bio({closeBio,wid}) {
   
    return (
        <div>
        <Modal
            title={'About Me' }
            closeModal={closeBio}
            buttons={[{ value: "Close", onClick: closeBio  }]}
            style={{
                left:'3vw',
                top: '5vh',
                width: wid,
            }}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={20}
                style={{
					overflowY: "auto",
					maxHeight: "50vh",
				}}
            >
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
                            <img src={me}  style={{ width: '80%'}} alt="this is me" />
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
            </Frame>
        </Modal >
        </div>
    )
}
export default Bio;