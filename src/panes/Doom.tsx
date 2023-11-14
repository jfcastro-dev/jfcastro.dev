import Window from '@/components/Window';

interface DoomProps {
    closeWindow: () => void;
    x: string;
}
export default function Doom(props: DoomProps){
	const {closeWindow, x} = props;
	return (
		<Window closeWindow={closeWindow} x={x} width={'820px'} title={'Doom'} borderless>
			<iframe id="jsdos" frameBorder="0"  width="800" height="480"
				src="https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fultimate-doom.jsdos?anonymous=1"
				allowFullScreen>
			</iframe>
		</Window >
	);
}