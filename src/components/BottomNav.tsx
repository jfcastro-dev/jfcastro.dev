import { TaskBar, List } from '@react95/core';

interface BottomNavProps{
	showAbout: () => void,
	showBlog: () => void,
	showResume: () => void,
}

export default function BottomNav(props: BottomNavProps){
	const {showAbout, showBlog, showResume} = props;

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
				</List>
			}/>
		</>);
}