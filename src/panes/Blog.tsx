import Window from '@/components/Window';
import { PostData } from '@/lib/posts';
import DOMPurify from 'dompurify';
import Image from 'next/image';


interface BlogProps {
  closeWindow: () => void
  width: string
  x: string
  posts: PostData[]
}

export default function Blog ({ closeWindow, x, width, posts }: BlogProps) {
	const postImgDir = '/blog/img/';
	return (
		<Window closeWindow={closeWindow} x={x} width={width} title={'Blog'}>
			<h3>Blog</h3>
			<div>
				{posts.map(post =>
					<>
						<h4><u>{post.title}</u></h4>
						<div className='blog-image'>
							<Image
								src={postImgDir + post.image}
								alt={post.title}
								width={'800'}
								height={'450'}
							/>
						</div>
						<i>{post.attr}</i>
						<p><i>{new Date(post.date).toDateString()}</i></p>
						<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.contentHtml) }} />
						<hr className='hr hr-blurry' />
					</>
				)}
			</div>
		</Window>
	);
}
