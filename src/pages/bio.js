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
                top: '10vh',
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
                            Hey, I'm James. I'm an incoming Software Engineer @ Canon and a 
                            Stony Brook Computer Science Grad. I've spent some time working
                            over at Endeavor Streaming as a QA & SDET. I love creating useful
                            tools and learning new technologies. I've worked with a lot of Python,
                            NodeJS & AWS.
                        </p>
                    </div>
                    <div className='grid-item'>
                        <img src={me}  style={{ width: '80%'}} alt="this is me" />
                    </div>
                </div>
                <p>
                    I try to keep busy when I'm not working by playing guitar, gardening,
                    lifting weights, and of course spending time with some quality friends.
                    I ocassionally go on hikes, take some photos, and try my hand at some
                    new recipes.
                </p>
            </Frame>
        </Modal >
        </div>
    )
}

export default Bio;