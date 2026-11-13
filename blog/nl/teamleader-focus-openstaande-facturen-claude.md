---
title: Bekijk openstaande Teamleader Focus-facturen in Claude
description: Laat Claude of ChatGPT openstaande Teamleader Focus-facturen tonen, bedragen per klant bekijken en een taak voor opvolging aanmaken.
date: 2026-10-24
products: teamleader-focus
lang: nl
translation: teamleader-outstanding-invoices
source: baa9ca0c23a93c64442e9c8b4ff6ed58a55c57cf582a0d3b0048dfcd1e6634cc
---
Je kunt Claude of ChatGPT vragen welke Teamleader Focus-facturen nog niet betaald zijn en welke klanten je nog geld verschuldigd zijn. De AI leest de facturen, ontvangen betalingen en vervaldatums en kan een taak voor opvolging aanmaken. Voeg `https://teamleader-focus.usefulapi.io/mcp` als koppeling toe aan je AI-client om te beginnen.

## Met welke vraag begin ik?

> Welke facturen staan nog open? Groepeer per klant, toon achterstallige bedragen en maak voor morgen een beltaak voor de klant met de grootste schuld.

## Wat doet de AI stap voor stap?

1. Hij haalt de openstaande facturen op met `teamleader_list_invoices`, inclusief bedragen en vervaldatums.
2. Hij leest een volledige factuur met `teamleader_get_invoice`, inclusief ontvangen betalingen.
3. Hij bekijkt de deals van de klant met `teamleader_list_deals` en de projecten met `teamleader_list_projects`.
4. Op jouw verzoek maakt hij een taak aan met `teamleader_create_task`. Daarvoor is een werktype nodig, dat hij ophaalt met `teamleader_list_work_types`.

## Wat kan de AI wijzigen in Teamleader?

- Hij kan contacten, bedrijven, deals, taken, notities, agenda-afspraken en tijdregistraties aanmaken en taken als voltooid markeren.
- Hij kan geen facturen wijzigen, verwijderen, boeken, versturen of crediteren.
- Hij kan alleen doen wat jouw Teamleader-gebruiker mag doen. Je kunt de toegang intrekken in Teamleader onder **Settings → Integrations**.

## Wat heb ik nodig?

Een Teamleader Focus-gebruiker. Je meldt je aan bij Teamleader en geeft toestemming voor de toegang. Een API-sleutel is niet nodig. Bekijk de [installatiestappen](/teamleader-focus/) voor Claude, ChatGPT, Cursor en andere clients.
