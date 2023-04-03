import { TaskBar, List } from '@react95/core';

interface BottomNavProps{
	isMobile: boolean
}

export default function BottomNav({isMobile}: BottomNavProps){

	const placeholder = () =>{
		console.log('click');
	};
	/*
        Yes, importing these icons in the old syle instead of  next/Image preloading them
        is bad practice. However, these images are 32x32. It feels absolutely redundant to preload.
    */
	return(
		<>
			<TaskBar list={
				<List>
					<List.Item onClick={placeholder}>
						<img src={'/assets/icons/about.png'} className={'icon'} alt=''/>
                        About
					</List.Item>
					<List.Divider />
					<List.Item onClick={placeholder}>
						<img src={'/assets/icons/blog.png'} className={'icon'} alt=''/>
                        Blog
					</List.Item>
					<List.Divider />
					<List.Item onClick={placeholder}>
						<img src={'/assets/icons/resume.png'} className={'icon'} alt=''/>
                        Resume
					</List.Item>
					<List.Divider />
					
					{isMobile? 
						<></>
						:
						<List.Item onClick={placeholder}>
							<img src={'/assets/icons/game.png'} className={'icon'} alt=''/>
							Doom
						</List.Item>}
				</List>

			}/>
    
		</>);
}