import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';

const BASE = 'http://localhost:8080';
const OUT = '/opt/cursor/artifacts/screenshots';
const VIEWPORT = { width: 390, height: 844, deviceScaleFactor: 2 };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const routes = [
  ['01-splash', '#/'],
  ['02-home', '#/home'],
  ['03-create-request', '#/create'],
  ['04-bids', '#/bids'],
  ['05-profile', '#/profile'],
  ['06-chat-locked', '#/chat_locked'],
];

await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport(VIEWPORT);

for (const [name, hash] of routes) {
  await page.goto(`${BASE}/${hash}`, { waitUntil: 'networkidle0' });
  await sleep(name === '01-splash' ? 400 : 900);
  await page.screenshot({ path: `${OUT}/${name}.png` });
}

await browser.close();
console.log('Screenshots saved to', OUT);
