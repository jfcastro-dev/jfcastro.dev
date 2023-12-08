import { MOBILE_THRESHOLD } from '@/constants';
import { TaskBar, List } from '@react95/core';
import { useEffect, useState } from 'react';

interface BottomNavProps{
	showAbout: () => void,
	showBlog: () => void,
	showResume: () => void,
	showDoom: () => void,
}

export default function BottomNav(props: BottomNavProps){
	const {showAbout, showBlog, showResume, showDoom} = props;

	const [disableDoom, setDisableDoom] = useState<boolean>(true);

	useEffect(()=> {
		const isFirefox = window.navigator.userAgent.indexOf('Firefox') > -1;
		const isMobile = window.innerWidth < MOBILE_THRESHOLD;
		setDisableDoom(isFirefox || isMobile);
	},[]);
   

	return(
		<>
			<TaskBar list={
				<List>
					<List.Item onClick={showAbout}>
						<img src={'/assets/icons/about.png'} className={'icon'} alt=''/>
                        About
					</List.Item>
					<List.Divider />
					<List.Item onClick={showBlog}>
						<img src={'/assets/icons/blog.png'} className={'icon'} alt=''/>
                        Blog
					</List.Item>
					<List.Divider />
					<List.Item onClick={showResume}>
						<img src={'/assets/icons/resume.png'} className={'icon'} alt=''/>
                        Resume
					</List.Item>
					<List.Divider />
					{ !disableDoom && <>
						<List.Item onClick={showDoom}>
							<img src={'/assets/icons/game.png'} className={'icon'} alt=''/>
                        Doom
						</List.Item>
						<List.Divider />
					</>}
				</List>
			}/>
    
		</>);
}