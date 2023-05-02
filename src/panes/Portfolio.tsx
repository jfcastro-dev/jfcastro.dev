import LoadingBar from '@/components/LoadingBar';
import Window from '../components/Window';
import { ProgressBar } from '@react95/core/';
import { useEffect, useState } from 'react';

interface FrameProps {
  closeWindow: () => void
  width: string
  x: string
}

export default function About ({ closeWindow, x, width }: FrameProps) {

	return (
		<Window closeWindow={closeWindow} x={x} width={width} title={'Portfolio'}>
			<h3>Portfolio</h3>
			<h5>Projects</h5>
			<h6>Streamify</h6>
			<p>
                A distributed proof of concept streaming service written in Golang.
			</p>
			<p>
				<b>Tech Used: </b> Go, AWS, Terraform, React
			</p>
			<h6>Personal Site</h6>
			<p>
				{'The website you\'re looking at! Written to host technical blog content.'}
			</p>
			<p>
				<b>Tech Used: </b> React, Next.js
			</p>
			<h5>Languages</h5>
			<p>
				{`Here are a list of languages I've worked with and how comfortable I am working with them.
                I think it's important that an engineer be adaptable & have good fundamentals,
                so that they can use any language they need to.`}
			</p>
			<LoadingBar title={'Python'} percent={80}/>
			<LoadingBar title='TypeScript/JavaScript' percent={70}/>
			<LoadingBar title={'Java'} percent={40}/>
			<LoadingBar title={'Go'} percent={30}/>
			<LoadingBar title={'Dart'} percent={25}/>

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
