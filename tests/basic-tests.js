import { ClientFunction } from "testcafe";

fixture`Basic tests`.page`http://localhost:9080`;

// Функция для вызова вашего flatten в тестах
const getFlattened = ClientFunction(function run(arr) {
  try {
    return window.flatten(arr);
  } catch (e) {
    if (e instanceof Error) {
      e.message = "--- REDACTED ---";
      throw e;
    } else {
      throw new Error("Throwing non-errors are not supported");
    }
  }
});

test("First test", async t => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const originalArray = [1, [2], 3];
  const flattenedArray = [1, 2, 3];

  const result = await getFlattened(originalArray);

  await t.expect(result).eql(flattenedArray);
});

test("Second test", async t => {
  const originalArray = ["hi"];
  const flattenedArray = ["hi"];

  const result = await getFlattened(originalArray);

  await t.expect(result).eql(flattenedArray);
});
