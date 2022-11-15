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

test("haustierfashTest", async () => {
  const page = await context.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  await page.click("text=SHOP");
  await page.click('text="ABOUT US"');
  await page.click("text=REGISTER");
  await page.click("text=HOME");
  await qawolf.scroll(page, "html", { x: 0, y: 1949 });
});