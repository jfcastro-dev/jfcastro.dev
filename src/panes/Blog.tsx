import Window from '@/components/Window';
import { PostData } from '@/lib/posts';
import DOMPurify from 'dompurify';


interface BlogProps {
  closeWindow: () => void
  width: string
  x: string
  posts: PostData[]
}

export default function Blog ({ closeWindow, x, width, posts }: BlogProps) {
	return (
		<Window closeWindow={closeWindow} x={x} width={width} title={'Blog'}>
			<h3>Blog</h3>
			<div>
				{posts.map(post =>
					<>
						<h4><u>{post.title}</u></h4>
						<div className='blog-image'>
							<img src={`${post.image}`} style={{overflowY: 'hidden', width: '99%'}} alt="" />
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
