// @ts-check
import { defineConfig } from "astro/config";
import { storyblok } from "@storyblok/astro";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "STORYBLOK");
const { STORYBLOK_DELIVERY_API_TOKEN } = loadEnv(import.meta.env.MODE, process.cwd(), "");
import mkcert from "vite-plugin-mkcert";

// https://astro.build/config
export default defineConfig({
	integrations: [
		storyblok({
			accessToken: env.STORYBLOK_DELIVERY_API_TOKEN,
			livePreview: true,
			components: {
				page: "storyblok/Page",
				grid: "storyblok/Grid",
				feature: "storyblok/Feature",
				teaser: "storyblok/Teaser",
			},
			apiOptions: {
				region: "eu",
			},
		}),
	],
	output: "server",
	vite: {
		plugins: [mkcert()],
	},
});
