// Shared locale and URL rules. English keeps the existing unprefixed URLs.
// Product facts and machine identifiers stay in the manifest, outside translations.
export const LOCALES = {
  en: { label: "English", locale: "en-GB", promptHeading: "Which prompt do I start with?", connect: "Connect", tryIt: "Try it", copy: "Copy", copied: "Copied", breadcrumb: "Breadcrumb",
    setup: "Add this URL to Claude, ChatGPT, Cursor or any MCP client, then log in.", setupLink: "Setup steps, tools and pricing →",
    main: "Main", home: "usefulapi home", integrations: "Integrations", custom: "Custom integration →", allIntegrations: "All integrations", customPlural: "Custom integrations", privacy: "Privacy", terms: "Terms", footer: "Footer", languages: "Language",
    footerText: "Connect from Claude, ChatGPT, Cursor, or any MCP client.",
    blogTitle: "Blog: business tools in Claude and ChatGPT", blogDescription: "Short guides and real use cases: how people use their business tools from Claude, ChatGPT and other AI assistants with usefulapi MCP servers.", blogIntro: "Short guides and real use cases: business tools in Claude, ChatGPT and other AI assistants.", more: "Show more posts" },
  nl: { label: "Nederlands", locale: "nl-NL", promptHeading: "Met welke vraag begin ik?", connect: "Koppel", tryIt: "Probeer het", copy: "Kopiëren", copied: "Gekopieerd", breadcrumb: "Broodkruimelpad",
    setup: "Voeg deze URL toe aan Claude, ChatGPT, Cursor of een andere MCP-client en meld je aan.", setupLink: "Installatie, tools en abonnementen →",
    main: "Hoofdnavigatie", home: "usefulapi-startpagina", integrations: "Koppelingen", custom: "Koppeling op maat →", allIntegrations: "Alle koppelingen", customPlural: "Koppelingen op maat", privacy: "Privacy", terms: "Voorwaarden", footer: "Voettekst", languages: "Taal",
    footerText: "Maak verbinding vanuit Claude, ChatGPT, Cursor of een andere MCP-client.",
    blogTitle: "Blog: zakelijke tools in Claude en ChatGPT", blogDescription: "Korte handleidingen en praktische voorbeelden: gebruik je zakelijke tools vanuit Claude, ChatGPT en andere AI-assistenten met usefulapi MCP-servers.", blogIntro: "Korte handleidingen en praktische voorbeelden: zakelijke tools in Claude, ChatGPT en andere AI-assistenten.", more: "Meer artikelen tonen" },
  es: { label: "Español", locale: "es-ES", promptHeading: "¿Qué le pregunto para empezar?", connect: "Conecta", tryIt: "Pruébalo", copy: "Copiar", copied: "Copiado", breadcrumb: "Ruta de navegación",
    setup: "Añade esta URL a Claude, ChatGPT, Cursor u otro cliente MCP e inicia sesión.", setupLink: "Configuración, herramientas y precios →",
    main: "Navegación principal", home: "Inicio de usefulapi", integrations: "Integraciones", custom: "Integración a medida →", allIntegrations: "Todas las integraciones", customPlural: "Integraciones a medida", privacy: "Privacidad", terms: "Condiciones", footer: "Pie de página", languages: "Idioma",
    footerText: "Conecta desde Claude, ChatGPT, Cursor o cualquier cliente MCP.",
    blogTitle: "Blog: herramientas de empresa en Claude y ChatGPT", blogDescription: "Guías breves y casos prácticos: usa tus herramientas de empresa desde Claude, ChatGPT y otros asistentes de IA con los servidores MCP de usefulapi.", blogIntro: "Guías breves y casos prácticos: herramientas de empresa en Claude, ChatGPT y otros asistentes de IA.", more: "Mostrar más artículos" },
  de: { label: "Deutsch", locale: "de-DE", promptHeading: "Mit welcher Frage fange ich an?", connect: "Verbinde", tryIt: "Jetzt ausprobieren", copy: "Kopieren", copied: "Kopiert", breadcrumb: "Brotkrümelnavigation",
    setup: "Füge diese URL in Claude, ChatGPT, Cursor oder einem anderen MCP-Client hinzu und melde dich an.", setupLink: "Einrichtung, Tools und Preise →",
    main: "Hauptnavigation", home: "usefulapi-Startseite", integrations: "Integrationen", custom: "Individuelle Integration →", allIntegrations: "Alle Integrationen", customPlural: "Individuelle Integrationen", privacy: "Datenschutz", terms: "Nutzungsbedingungen", footer: "Fußzeile", languages: "Sprache",
    footerText: "Verbinde dich über Claude, ChatGPT, Cursor oder einen anderen MCP-Client.",
    blogTitle: "Blog: Business-Tools in Claude und ChatGPT", blogDescription: "Kurze Anleitungen und Praxisbeispiele: Nutze deine Business-Tools über Claude, ChatGPT und andere KI-Assistenten mit den MCP-Servern von usefulapi.", blogIntro: "Kurze Anleitungen und Praxisbeispiele: Business-Tools in Claude, ChatGPT und anderen KI-Assistenten.", more: "Weitere Artikel anzeigen" },
};

export function localizedPath(path, lang = "en") {
  if (!Object.hasOwn(LOCALES, lang)) throw new Error(`Unsupported language: ${lang}`);
  if (!/^\/(?:[a-z0-9-]+\/)*$/.test(path)) throw new Error(`Invalid page path: ${path}`);
  return lang === "en" ? path : `/${lang}${path}`;
}
export const blogIndexPath = (lang = "en") => localizedPath("/blog/", lang);
export const blogPath = (post) => localizedPath(`/blog/${post.slug}/`, post.lang);

// Every language points to itself and to all published siblings. English is the fallback.
export function alternates(variants) {
  const links = variants.map(({ lang, path }) => ({ lang, path }));
  const english = links.find((v) => v.lang === "en");
  return english ? [...links, { lang: "x-default", path: english.path }] : links;
}
