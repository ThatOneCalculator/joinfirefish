import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
	const blog = await getCollection("blog");
	return rss({
		title: "Firefish",
		description: "Firefish's official blog",
		site: "https://joinfirefish.org",
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/en/${post.slug}/`,
			author: post.data.author,
		})),
		customData: "<language>en-us</language>",
	});
}
