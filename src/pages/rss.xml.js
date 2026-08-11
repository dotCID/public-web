import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection("blog");
  return rss({
    title: 'Astro Learners testing | Blog amateurism',
    description: 'Just following a tutorial',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),    customData: `<language>en-us</language>`,
  });
}