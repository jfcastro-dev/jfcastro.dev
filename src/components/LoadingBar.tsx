import { ProgressBar } from '@react95/core/';
import { useEffect, useState } from 'react';
/*
*/

interface LoadingBarProps{
    percent: number;
    title: string;
}
export default function LoadingBar({percent, title}: LoadingBarProps){

	const [currentPercent, setCurrentPercent] = useState<number>(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentPercent(previousPercent => {
				const diff = Math.round(Math.random() * 10);
				return Math.min(previousPercent + diff, percent);
			});
		}, 170);
		return () => {
			clearInterval(timer);
		};
	}, []);
	return (
		<div className='grid-container'>
			<div className='grid-item' style={{width:'200px'}} >
				{title}
			</div>
			<div className='grid-item' style={{alignItems: 'end'}} >
				<ProgressBar percent={currentPercent}/>
			</div>
		</div> );
}