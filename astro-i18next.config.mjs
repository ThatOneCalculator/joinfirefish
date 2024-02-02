import fs from "node:fs";

const localeFiles = fs.readdirSync("./src/locales");
const supportedLanguages = localeFiles.map((localeFile) => {
	// Strip ".json" from filename
	return localeFile.substring(localeFile.length - 5, 0);
});

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
	defaultLocale: "en",
	locales: supportedLanguages,
	i18nextServer: {
		backend: {
			loadPath: "./src/locales/{{lng}}.json",
		},
		postProcess: "decode",
	},
	i18nextServerPlugins: {
		// Decode html entities, e.g. &shy; to encourage where a word should
		// break.
		decode: "i18next-decode-postprocessor",
	},
};
