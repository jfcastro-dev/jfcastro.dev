import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

/**
 * Determines how we format our posts.
 * id - name of file
 * date - date in format
 * title - title value
 * image - image for post
 * contentHtml - actual contents of the post
 */
export interface PostData{
    id: string;
    contentHtml: string;
	date: string;
	title: string;
	image: string;
	attr: string;
  }

const postsDirectory = path.join(process.cwd(), './public/posts');

async function getPost(fileName: string){
	// Remove ".md" from file name to get id
	const id = fileName.replace(/\.md$/, '');

	// Read markdown file as string
	const fullPath = path.join(postsDirectory, fileName);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);

	const contentHtml = processedContent.toString();
	return {
		contentHtml,
		id,
		date: matterResult.data['date'],
		title: matterResult.data['title'],
		image: matterResult.data['image'],
		attr: matterResult.data['attr'] || ''
	};

}

export async function getSortedPostsData(): Promise<PostData[]> {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory);
	const posts = fileNames.map(async (fileName) => {
		return await getPost(fileName);
	});

	return Promise.all(posts).then((allPosts)=>{
		return allPosts.sort((a, b) => {
			if (a.date < b.date) {
				return 1;
			} else {
				return -1;
			}
		});
	});
}
  