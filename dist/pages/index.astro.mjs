import { c as createComponent, a as addAttribute, r as renderHead, b as renderScript, d as renderTemplate } from '../chunks/astro/server_CFELGeyq.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  var sheetId = "1Ef7n23TnmRFfpdzp4D24v0kKDrBxGQnhUPI6CNOASU4";
  const apiUrl = `https://cfg_googledata.it-e3f.workers.dev/?sheet=${sheetId}&f=A3SD21`;
  const res = await fetch(apiUrl);
  const rows = await res.json();
  const metaTitle = rows.length > 0 ? `Tabella: ${rows[0].Nome}` : "Tabella Dati";
  const metaDesc = `Visualizza ${rows.length} record dal Google Sheet in tabella interattiva.`;
  return renderTemplate`<html lang="it"> <head><meta charset="UTF-8"><title>${metaTitle}</title><meta name="description"${addAttribute(metaDesc, "content")}><meta property="og:title"${addAttribute(metaTitle, "content")}><meta property="og:description"${addAttribute(metaDesc, "content")}><!-- Bootstrap CSS --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"><!-- DataTables CSS --><link href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap5.min.css" rel="stylesheet">${renderHead()}</head> <body class="container mt-5"> <h1>${metaTitle}</h1> <table id="sheetTable" class="table table-striped"> <thead> <tr> ${Object.keys(rows[0]).map((key) => renderTemplate`<th>${key}</th>`)} </tr> </thead> <tbody> ${rows.map((row) => renderTemplate`<tr> ${Object.values(row).map((val) => renderTemplate`<td>${val}</td>`)} </tr>`)} </tbody> </table> <!-- jQuery + DataTables + Bootstrap JS --> ${renderScript($$result, "C:/Users/masca/OneDrive/Documenti/HDEMIA/spazio_genesi/sito_astrotest/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/masca/OneDrive/Documenti/HDEMIA/spazio_genesi/sito_astrotest/src/pages/index.astro?astro&type=script&index=1&lang.ts")} ${renderScript($$result, "C:/Users/masca/OneDrive/Documenti/HDEMIA/spazio_genesi/sito_astrotest/src/pages/index.astro?astro&type=script&index=2&lang.ts")} ${renderScript($$result, "C:/Users/masca/OneDrive/Documenti/HDEMIA/spazio_genesi/sito_astrotest/src/pages/index.astro?astro&type=script&index=3&lang.ts")} ${renderScript($$result, "C:/Users/masca/OneDrive/Documenti/HDEMIA/spazio_genesi/sito_astrotest/src/pages/index.astro?astro&type=script&index=4&lang.ts")} </body> </html>`;
}, "C:/Users/masca/OneDrive/Documenti/HDEMIA/spazio_genesi/sito_astrotest/src/pages/index.astro", void 0);

const $$file = "C:/Users/masca/OneDrive/Documenti/HDEMIA/spazio_genesi/sito_astrotest/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
