/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_GA: string;
	readonly VITE_RESUME_LINK: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
