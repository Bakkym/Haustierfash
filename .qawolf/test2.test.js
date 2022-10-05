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

test("test2", async () => {
  const page = await context.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  await page.click("li:nth-of-type(2)");
  await page.click('[src="https://i0.wp.com/wawaw.co/wp-content/uploads/2021/11/pan%CC%83oleta-navidad-blanca-.jpg?fit=1500%2C1500&ssl=1"]');
  await page.click("li:nth-of-type(2) .add-to-cart-button");
  await page.click("li:nth-of-type(3) .add-to-cart-button");
  await page.click("li:nth-of-type(4) .add-to-cart-button");
  await page.click(".add-to-cart-button");
  await page.selectOption("li:nth-of-type(3) .item-quantity", "5");
  await page.click("#search");
  await page.fill("#search", "snowm");
  await qawolf.scroll(page, "html", { x: 0, y: 974 });
  await page.click(".add-to-cart-button");
  await page.click(".add-to-cart-button");
  await page.click(".add-to-cart-button");
  await page.click(".add-to-cart-button");
});