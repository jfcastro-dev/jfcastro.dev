import { useEffect, useState } from 'react';
import BottomNav from './BottomNav';
import About from '@/panes/About';
import Resume from '@/panes/Resume';
import Blog from '@/panes/Blog';
import { PostData } from '@/lib/posts';
import { MOBILE_THRESHOLD } from '@/constants';
import { Clippy } from './Clippy';

interface DesktopProps{
	posts: PostData[];
}

export default function Desktop (props: DesktopProps) {
	const {posts} = props;
	const [defaultWidth, setDefaultWidth] = useState<string>('30vw');
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [showAbout, setShowAbout] = useState<boolean>(false);
	const [showResume, setShowResume] = useState<boolean>(false);
	const [showBlog, setShowBlog] = useState<boolean>(false);

	useEffect(() => {
		if (window.innerWidth < MOBILE_THRESHOLD) {
			setDefaultWidth('70vw');
			setShowAbout(true);
			setIsMobile(true);
		} else {
			setShowBlog(true);
			setShowAbout(true);
			setShowResume(true);
		}
	}, []);
    
	return(
		<>
			{showAbout && <About closeWindow={() => setShowAbout(false)} x={isMobile ? '15vw' : '4vw'} width={defaultWidth}/>}
			{showResume && <Resume closeWindow={() => setShowResume(false)} x={isMobile ? '15vw' : '66vw'} width={defaultWidth}/>}
			{showBlog && <Blog closeWindow={() => setShowBlog(false)} x={isMobile ? '15vw' : '35vw'} width={defaultWidth} posts={posts}/>}
			<BottomNav showAbout={() => setShowAbout(true)} showResume={()=>setShowResume(true)}
				showBlog={()=> setShowBlog(true)}/>
			<Clippy/>
		</>);
}