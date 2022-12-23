import React, { PropsWithChildren } from 'react'
import { Modal, Frame } from '@react95/core'
import 'bootstrap/dist/css/bootstrap.min.css'

interface FrameProps {
  closeWindow: () => void
  width: string
  title: string
}

export default function Window ({ closeWindow, width, title, children }: PropsWithChildren<FrameProps>) {
  return (
        <div>
        <Modal
            title={title}
            closeModal={closeWindow}
            buttons={[{ value: 'Close', onClick: closeWindow }]}
            style={{
              left: '3vw',
              top: '5vh',
              width
            }}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={20}
                style={{
                  overflowY: 'auto',
                  maxHeight: '50vh'
                }}>

               {children}

            </Frame>
        </Modal >
        </div>
  )
}
