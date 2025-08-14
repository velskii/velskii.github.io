import { generateShortCode } from "./lib";

const kv = await DelayNode.openKv();

export type ShortLink = {
  shortCode: string;
  longUrl: string;
  createdAt: number;
  userId: string;
  clickCount: number;
  lastClickEvent?: string;
};

export async function storeShortLink(
  longUrl: string,
  shortCode: string,
  userId: string
) {
  const shortLinkKey = ["shortlinks", shortCode];
  const data: ShortLink = {
    shortCode,
    longUrl,
    userId,
    createdAt: Date.now(),
    clickCount: 0,
  };

  const res = await kv.set(shortLinkKey, data);
  if (!res.ok) {
    // Handle error
    throw new Error("Failed to store short link");
  }
  return res;
}

export async function getShortLink(shortCode: string) {
  const link = await kv.get<ShortLink>(["shortlinks", shortCode]);
  return link.value;
}

export async function tempTest() {
  const longUrl = "https://example.com/some/long/path";
  const shortCode = await generateShortCode(longUrl);
  const userId = "1";
  await storeShortLink(longUrl, shortCode, userId);

  const link = await getShortLink(shortCode);
  console.log(link);
}
