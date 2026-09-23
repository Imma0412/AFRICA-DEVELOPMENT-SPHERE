import { createClient } from "@sanity/client";

// Same Sanity project used by the main ads-summit site — one shared
// content backend. Configure via .env (see .env.example).
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2025-01-01",
      useCdn: true,
    })
  : null;

export type Speaker = {
  _id: string;
  name: string;
  role?: string;
  photo?: { asset?: { url?: string } };
  bio?: string;
};

export type Webinar = {
  _id: string;
  title: string;
  tagline?: string;
  description?: string;
  date?: string;
  lumaEventUrl?: string;
  speakers?: Speaker[];
  agenda?: { time?: string; title?: string; description?: string }[];
};

const FEATURED_WEBINAR_QUERY = `
  *[_type == "webinar" && isFeatured == true][0]{
    _id,
    title,
    tagline,
    description,
    date,
    lumaEventUrl,
    "speakers": speakers[]->{
      _id,
      name,
      role,
      "photo": photo.asset->{url},
      bio
    },
    agenda
  }
`;

const ALL_WEBINARS_QUERY = `
  *[_type == "webinar"] | order(date desc){
    _id,
    title,
    tagline,
    description,
    date,
    lumaEventUrl,
    "speakers": speakers[]->{
      _id,
      name,
      role,
      "photo": photo.asset->{url},
      bio
    },
    agenda
  }
`;

export async function getFeaturedWebinar(): Promise<Webinar | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<Webinar | null>(FEATURED_WEBINAR_QUERY);
  } catch (err) {
    console.error("Failed to fetch featured webinar from Sanity:", err);
    return null;
  }
}

export async function getAllWebinars(): Promise<Webinar[]> {
  if (!sanityClient) return [];
  try {
    return (await sanityClient.fetch<Webinar[]>(ALL_WEBINARS_QUERY)) ?? [];
  } catch (err) {
    console.error("Failed to fetch webinars from Sanity:", err);
    return [];
  }
}
