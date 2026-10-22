# Gera o PDF de 40 paginas a partir do index.html (requer: pip install playwright && playwright install chromium)
import asyncio, pathlib
from playwright.async_api import async_playwright
ROOT = pathlib.Path(__file__).resolve().parent.parent
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 1440, "height": 810})
        await pg.goto((ROOT / "index.html").as_uri(), wait_until="load")
        await pg.wait_for_timeout(800)
        await pg.pdf(path=str(ROOT / "ISO27000_Apresentacao.pdf"), width="1440px", height="810px",
                     print_background=True, prefer_css_page_size=True)
        await b.close()
asyncio.run(main())
