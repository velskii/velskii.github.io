import {expect} from "jsr:@std/expect";
import { assertEquals, assertNotMatch, assertMatch, assertExists, assertGreater } from "jsr:@std/assert";

import { multiply } from "../src/lib.ts";

Deno.test(function addTest() {
  assertEquals(multiply(2, 2), 4);
  assertEquals(multiply(2, 3), 6);
});


Deno.test("multiply", () => {
  expect(multiply(2, 2)).toBe(4);
  expect(multiply(2, 3)).toBe(6);
});

Deno.test("mock API call", async () => {
  const mockApiCall = () => Promise.resolve(1);
  const result = await mockApiCall();
  expect(result).toBe(1);
})

Deno.test("database lib", async (t) => {
  // Setup Logic
  const db = new Map();
  await t.step("db exists", () => {
    assertExists(db);
  })

  await t.step("insert user", () => {
    db.set("user", {id: 1, name: "John"});

    assertGreater(db.size, 0);
    assertMatch(db.get("user"), {id: 1, name: "John"});
    assertNotMatch(db.get("user"), {id: 2, name: "Jeff"});
  })


})