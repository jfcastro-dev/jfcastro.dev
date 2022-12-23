import Window from '../components/Window'
import posts from '../assets/post.json';
import '../misc/style.css'
import me from '../assets/me.jpg'


interface FrameProps {
  closeWindow: () => void;
  width: string;
  x: string;
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
              <img src={`${post.img}`} style={{ width: '99%' }} alt="" />
              {post.content.split('\n').map(section=>
                  <p>
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
