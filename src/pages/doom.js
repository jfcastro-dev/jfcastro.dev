import React from 'react'
import { Modal, Frame} from '@react95/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/misc.css'


function Doom({closeDoom}) {
    return (
        <Modal
            title={'Doom' }
            closeModal={closeDoom}
            buttons={[{ value: "Close", onClick: closeDoom  }]}
            style={{
                left:'36vw',
                top: '10vh',
                width: '50vw',
            }}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={20}
                style={{
					overflowY: "auto",
                    background:"black"
				}}
            >
        <iframe id="jsdos" frameborder="0"  width="800" height="500"
        src="https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fultimate-doom.jsdos?anonymous=1"
        allowfullscreen>
            </iframe>

            </Frame>
        </Modal >
    )
}

export default Doom;
