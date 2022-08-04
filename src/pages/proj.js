import React from 'react'
import { Modal, Frame} from '@react95/core'
import 'bootstrap/dist/css/bootstrap.min.css'   
import '../style/misc.css'
import c4me from '../assets/c4me.png';
import typosquat from '../assets/typosquat.png';
import cc from '../assets/cc.png';

function Proj({closeProj}) {
    
    return (
        <Modal
            title={'Projects' }
            closeModal={closeProj}
            buttons={[{ value: "Close", onClick: closeProj  }]}
            style={{
                left:'36vw',
                top: '10vh',
                width: '30vw',
            }}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={20}
                style={{
					overflowY: "auto",
					maxHeight: "60vh",
				}}
            >
                <h5>Projects</h5>
                
                    <b><h6><a href='https://github.com/jamescastro98/c4me'>C4me</a></h6></b>
                    <img src={c4me} style={{ width: '80%'}} alt=''/>
                    <p>
                        <b>Description</b>
                        <p>
                        A Full Stack Webapp from undergrad created in a team of four that enables users 
                        to record college application history, as well as find out information about schools, 
                        obtain chances of admission and connect with other students applying as well.
                        </p>
                    </p>
                    <p><b>Tech:</b>  JavaScript via MySQL, Express.js, React.js and Node.js. 
                    Additional libraries used include bcrypt, joi and axios. </p>
                    
                    <hr class="hr hr-blurry" />
                    
                    <b><h6><a href='https://github.com/jamescastro98/Taste-the-Typo'>TypoSquatting Detector</a></h6></b>
                    <img src={typosquat} style={{ width: '80%'}} alt=''/>
                    <p>
                        <b>Description</b>
                        <p>
                        A distributed typosquatting detector dashboard that 
                        enables users to see if a website is sitting on a permutation of a given site's URL.
                        </p>
                    </p>
                    <p><b>Tech:</b>  Python with Django, HTML, CSS, JavaScript. </p>
                    
                    <hr class="hr hr-blurry" />

                    <b><h6><a href='https://github.com/jamescastro98/Covert-Cats'>Covert Command/Control Channek</a></h6></b>
                    <img src={cc} style={{ width: '80%'}} alt=''/>
                    <p>
                        <b>Description</b>
                        <p>
                        A fun proof of concept Command & Control program that utilizes twitter's API to hide messages in images of cats 
                        between victims/clients and the attacker/server for commands and data exfiltration. 
                        Features include potential adaptation to network traffic to create inconspicuous traffic logs. 
                        </p>
                    </p>
                    <p><b>Tech:</b>  Python with Scapy. </p>

            </Frame>
        </Modal >
    )
}

export default Proj;