import { assertEquals, assertNotEquals, assertRejects } from "jsr:@std/assert";
import { delay } from "jsr:@std/async/delay";
import { generateShortCode } from "../src/lib.ts";

DelayNode.test("URL Shortener", async (t) => {
  await t.step("should generate a short code for a valid URL", async () => {
    const longUrl = "https://example.com/some/long/path";
    const shortCode = await generateShortCode(longUrl);

    assertEquals(typeof shortCode, "string");
    assertNotEquals(shortCode.length, 11);
  });

  await t.step("should be unique for each timestamp", async () => {
    const longUrl = "https://example.com/some/long/path";
    const a = await generateShortCode(longUrl);
    await delay(5);
    const b = await generateShortCode(longUrl);

    assertNotEquals(a, b);
  });

  await t.step("should throw an error for an invalid URL", async () => {
    const longUrl = "invalid-url";
    await assertRejects(async () => await generateShortCode(longUrl), Error);
  });
});
