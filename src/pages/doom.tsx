import Window from '../components/Window'
import '../misc/style.css'

interface FrameProps {
  closeWindow: () => void;
  width: string;
  x: string;
}

export default function Doom ({ closeWindow, x, width }: FrameProps) {
  return (
        <Window closeWindow={closeWindow} x={x} width={width} title={'Doom'}>
            <iframe id="jsdos" frameBorder="0"  width="600" height="500"
            src="https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fultimate-doom.jsdos?anonymous=1"
            allowFullScreen>
        </iframe>
        </Window>
  )
}
