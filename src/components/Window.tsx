import React, { PropsWithChildren } from 'react';
import { Modal, Frame } from '@react95/core';
import 'bootstrap/dist/css/bootstrap.min.css';

interface FrameProps {
  closeWindow: () => void
  width: string
  title: string
  x: string
  borderless?: boolean
}

export default function Window (props: PropsWithChildren<FrameProps>) {
	const { closeWindow, width, title, x, borderless, children } = props;
	return (
		<div>
			<Modal
				title={title}
				closeModal={closeWindow}
				buttons={[{ value: 'Close', onClick: closeWindow }]}
				menu={[]}
				hasWindowButton={true}
				style={{
					left: x,
					top: borderless ? '' :'5vh',
					width
				}}>
				<Frame
					bg="white"
					boxShadow="in"
					padding={borderless ? 0 : 20}
					className='window'>
					<div className='test'>
						{children}
					</div>
				</Frame>
			</Modal >
		</div>
	);
}
