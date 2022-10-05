const qawolf = require("qawolf");

let browser;
let context;

beforeAll(async () => {
  browser = await qawolf.launch();
  context = await browser.newContext();
  await qawolf.register(context);
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("myFirstTest", async () => {
  const page = await context.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  await page.click("#root div");
  await page.press("body", "ArrowRight");
  await qawolf.scroll(page, "html", { x: 0, y: 200 });
  await page.click(".add-to-cart-button");
  await qawolf.scroll(page, "html", { x: 0, y: 332 });
  await page.click("li:nth-of-type(6) .add-to-cart-button");
  await page.click("li:nth-of-type(6) .add-to-cart-button");
  await qawolf.scroll(page, "html", { x: 0, y: 363 });
  await page.selectOption("li:nth-of-type(2) .item-quantity", "18");
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
  await page.click("text=COP");
  await page.click("li:nth-of-type(3) .add-to-cart-button");
  await page.click("li:nth-of-type(3) .add-to-cart-button");
  await page.click("li:nth-of-type(4) .add-to-cart-button");
  await page.click("text=EUR");
  await page.click(".false");
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
  await page.selectOption("li:nth-of-type(4) .item-quantity", "20");
});