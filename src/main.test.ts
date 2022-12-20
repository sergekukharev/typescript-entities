import {Main} from "./main";

describe("Hello world", () => {
   test("can return hello world", () => {
       expect(new Main().helloWorld()).toBe("Hello, world!");
   });
});