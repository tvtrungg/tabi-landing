import { TPostData } from '@/types';
import fs from 'fs'
import matter from 'gray-matter'

const getPosts = (lang: string): TPostData[] => {
  const folder = `data/contents/${lang}`;
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((filename) => filename.endsWith(".md"));
  const posts = markdownFiles.map((filename) => {
    const fileContents = fs.readFileSync(`${folder}/${filename}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      data: {
        title: matterResult.data.title,
        description: matterResult.data.description,
        slug: filename.replace(".md", ""),
        date: matterResult.data.date,
        thumbnail: matterResult.data.thumbnail,
      },
      content: matterResult.content,
    }
  });

  return posts.sort((a, b) => a.data.date < b.data.date ? 1 : -1);
}

export default getPosts;