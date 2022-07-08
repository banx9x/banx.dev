import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

interface PostContent {
  meta: PostMeta;
  content: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  image: string;
  excerpt: string;
  publishedAt: string;
  categories: string[];
  series: string;
}

export const getSortedPosts = (): PostMeta[] => {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const md = fs.readFileSync(path.join(postsDirectory, filename), 'utf-8');

    const [slug, ext] = filename.split('.');

    const { data, content } = matter(md);

    return {
      slug,
      title: data.title,
      description: data.description,
      image: data.image,
      excerpt: data.excerpt,
      publishedAt: data.publishedAt,
      categories: data.categories.sort(),
      series: data.series,
    };
  });

  posts.sort(({ publishedAt: a }, { publishedAt: b }) => {
    return new Date(b).getTime() - new Date(a).getTime();
  });

  return posts;
};

export const getPaths = () => {
  const files = fs.readdirSync(postsDirectory);

  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace('.mdx', ''),
      },
    };
  });

  return paths;
};

export const getPostBySlug = (slug: string): PostContent => {
  const md = fs.readFileSync(path.join(postsDirectory, slug + '.mdx'));

  const { data, content } = matter(md);

  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      image: data.image,
      excerpt: data.excerpt,
      publishedAt: data.publishedAt,
      categories: data.categories.sort(),
      series: data.series,
    },
    content,
  };
};
