import Window from '@/components/Window';
import { PostData } from '@/lib/posts';
import DOMPurify from 'dompurify';
import Image from 'next/image';
import { useState } from 'react';


interface BlogProps {
  closeWindow: () => void
  width: string
  x: string
  posts: PostData[]
}

export default function Blog ({ closeWindow, x, width, posts }: BlogProps) {
	const postImgDir = '/blog/img/';
	const [page, setPage] = useState<number>(0);

	const handlePostChange = (postNumber: number) => {
		if (postNumber >= 0 && postNumber < posts.length){
			setPage(postNumber);
		}
	};
	return (
		<Window closeWindow={closeWindow} x={x} width={width} title={'Blog'}>
			<h3>Blog</h3>
			<div>
				<h4><u>{posts[page].title}</u></h4>
				<div className='blog-image'>
					<Image
						src={postImgDir + posts[page].image}
						alt={posts[page].title}
						width={'800'}
						height={'450'}
					/>
				</div>
				<i>{posts[page].attr}</i>
				<p><i>{new Date(posts[page].date).toDateString()}</i></p>
				<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(posts[page].contentHtml) }} />
				<hr className='hr hr-blurry' />
				<span>
					{page > 0 && <button style={{float:'right'}} onClick={()=>handlePostChange(page-1)}>Next Post</button>}
					{page < posts.length-1 && <button style={{float:'left'}} onClick={()=>handlePostChange(page+1)}>Previous Post</button>}
				</span>
			</div>
		</Window>
	);
}
