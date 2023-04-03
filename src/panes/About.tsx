import Window from '../components/Window';

interface FrameProps {
  closeWindow: () => void
  width: string
  x: string
}

export default function About ({ closeWindow, x, width }: FrameProps) {
	return (
		<Window closeWindow={closeWindow} x={x} width={width} title={'About Me'}>
			<h3>Hello!</h3>
			<div className='grid-container'>
				<div className='grid-item' >
					<p>
						{`Hey, I'm James. I'm an NY-based Software Engineer @ Canon and a
                        Stony Brook Computer Science Grad. I've spent some time working
                        over at Endeavor Streaming as a QA & SDET, so I have experience with
                        testing & ensuring bug free deliverables. I love creating useful
                        tools and learning new technologies. I've worked with a lot of Python,
                        NodeJS w/ TypeScript, and cloud services like AWS & Google Cloud.`}
					</p>
				</div>  
				<div className='about'>
					<div className='grid-item'>
						<img src={'/assets/me.jpg'} style={{ width: '99%' }} alt="this is me" />
					</div>
				</div>
			</div>

			<p>
				{`When I'm not programming, working or studying, I try to keep busy by playing guitar, gardening,
                lifting weights, watching the Mets, and of course spending time with some quality friends.
                I ocassionally go on hikes, take some photos, and try my hand at some
                new recipes - results may vary on that one. Wanna connect? Add me on `}
				<a href='https://www.linkedin.com/in/james-castro-b38b0717b/'>
					{'LinkedIn here'}
				</a>
			</p>
			<div style={{paddingTop: 5}}>
				<p><b>Currently Reading: </b> NodeJS Design Patterns</p>
				<p><b>Currently Playing: </b> {'Baldur\'s Gate 3 (Early Access)'}</p>
				<p><b>Currently Watching: </b> House of the Dragon</p>
			</div>
		</Window>
	);
}
