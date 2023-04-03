import Head from 'next/head';
import Desktop from '@/components/Desktop';
import { getSortedPostsData } from '@/lib/posts';
import { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
	const allPostsData = await getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}


export default function Home({ allPostsData }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="container">
			<Head>
				<title>James Castro</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Desktop posts={allPostsData}/>
		</div>
	);
}