import Window from '../components/Window'
import posts from '../assets/post.json'
import '../misc/style.css'

interface FrameProps {
  closeWindow: () => void
  width: string
  x: string
}

export default function Blog ({ closeWindow, x, width }: FrameProps) {
  return (
        <Window closeWindow={closeWindow} x={x} width={width} title={'Blog'}>
            <h4>Blog</h4>
            <div>
            {posts.map(post =>
            <>
              <u><h5>{post.title}</h5></u>
              <i>{post.date}</i>
              <div className='img'>
              <img src={`${post.img.path}`} style={{ overflowY: 'hidden', width: '99%' }} alt="" />
              </div>
              <div style={{ marginBottom: '2vh' }}><i>{post.img.attr}</i></div>
              {post.content.split('\n').map(section =>
                  <p key={post.post_id}>
                  {section}
                  </p>
              )}
              <hr className='hr hr-blurry' />
            </>
            )}
            </div>
        </Window>
  )
}
