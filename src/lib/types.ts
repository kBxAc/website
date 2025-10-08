// src/lib/types.ts
export interface Member {
	id: string;
	role: string;
	pfp: string; // URL for the profile picture
	tagline: string; // A short, descriptive quote
	skills: string[];
	bio: string;
}
