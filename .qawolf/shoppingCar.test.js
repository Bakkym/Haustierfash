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

test("shoppingCar", async () => {
  const page = await context.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  await page.click("li:nth-of-type(5) .add-to-cart-button");
  await page.click("li:nth-of-type(4) .add-to-cart-button");
  await page.click("li:nth-of-type(3) .add-to-cart-button");
  await page.click("li:nth-of-type(4) .add-to-cart-button");
  await page.click("li:nth-of-type(5) .price");
  await page.click("li:nth-of-type(2) .add-to-cart-button");
  await page.click("li:nth-of-type(2) .add-to-cart-button");
  await page.click("li:nth-of-type(2) .add-to-cart-button");
  await page.click(".add-to-cart-button");
  await page.click("#cart-container");
  await page.selectOption("li:nth-of-type(3) .item-quantity", "3");
  await page.selectOption("li:nth-of-type(3) .item-quantity", "30");
  await page.selectOption("li:nth-of-type(3) .item-quantity", "31");
  await page.selectOption("li:nth-of-type(3) .item-quantity", "32");
  await page.selectOption("li:nth-of-type(3) .item-quantity", "33");
  await page.click("text=COP");
  await page.click("text=EUR");
  await page.click("#search");
  await page.fill("#search", "ch");
});