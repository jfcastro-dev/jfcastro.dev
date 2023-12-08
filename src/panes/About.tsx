import Window from '../components/Window';
import Image from 'next/image';

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
						{`Hey, I'm James. I'm an NY-based Software Engineer @ Canon, former SDET @ Endeavor and
                        Stony Brook Alum. As a software engineer, I'm always looking to continue
						learning & getting better. I have professional experience with TypeScript & Python, and have become
						a Go hobbyist. `}
					</p>
				</div>  
				<div className='about'>
					<div className='grid-item'>
						<Image
							src={'/assets/me.jpg'}
							alt={'me'}
							width={'796'}
							height={'745'}
						/>
					</div>
				</div>
			</div>

			<p>
				{`When I'm not programming or working, I try to keep busy by playing guitar, gardening,
                lifting weights, watching the Mets, and of course spending time with some quality friends.
                I ocassionally go on hikes, take some photos, and like to try my hand at some
                new recipes - results may vary on that one. Wanna connect? Add me on `}
				<a href='https://www.linkedin.com/in/james-castro-b38b0717b/'>
					{'LinkedIn here'}
				</a>
			</p>
			<div className='padded-section'>
				<p><b>Currently Reading: </b> Outlive by Peter Attia </p>
				<p><b>Currently Playing: </b> {'Baldur\'s Gate 3'}</p>
			</div>
		</Window>
	);
}
