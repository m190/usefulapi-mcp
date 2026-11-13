---
title: Bekijk het Shiftbase-rooster per afdeling in Claude
description: Laat Claude of ChatGPT het Shiftbase-rooster per afdeling tonen, met uren, open diensten en afwezigheden, en op jouw verzoek een dienst verplaatsen.
date: 2026-10-17
products: shiftbase
lang: nl
translation: shiftbase-weekly-schedule-overview
source: b9d601edca17db21c56a959e08bda69e0c54299d3d57d155d77b78f95b147921
---
Je kunt het Shiftbase-rooster bekijken vanuit Claude of ChatGPT. De AI toont de diensten van een afdeling voor een week, wie wanneer werkt en hoeveel uur, en welke diensten openstaan. Ook kun je de afwezigheden laten opzoeken. Als je daarom vraagt, kan de AI een dienst verplaatsen. Voeg `https://shiftbase.usefulapi.io/mcp` als koppeling toe aan je AI-client om te beginnen.

## Met welke vraag begin ik?

> Toon het Shiftbase-rooster voor volgende week van de afdeling Amsterdam, met uren per medewerker, open diensten en goedgekeurde afwezigheden.

## Wat doet de AI stap voor stap?

1. Hij haalt de afdelingen op met `shiftbase_list_departments` en de teams met `shiftbase_list_teams`.
2. Met `shiftbase_list_rosters` leest hij de geplande diensten voor een periode van maximaal 62 dagen: datum, tijden, pauze, medewerker, team en uren.
3. Hij koppelt de gebruikers-ID's aan namen met `shiftbase_list_users`.
4. Hij leest de open diensten met `shiftbase_list_open_shifts` en de afwezigheden met `shiftbase_list_absences`.
5. Op jouw verzoek verplaatst hij een dienst naar een andere datum, tijd of medewerker met `shiftbase_update_roster`.

## Kan de AI het rooster per ongeluk wijzigen?

- De tools in stap 1 tot en met 4 lezen alleen gegevens.
- `shiftbase_update_roster` wijzigt een dienst. Bij een terugkerende dienst kan de wijziging alleen voor die datum gelden, voor die datum en alle volgende diensten, of voor de hele reeks. Geef aan welke optie je bedoelt.
- `shiftbase_create_roster` voegt een dienst toe. Een medewerker krijgt alleen een melding als de aanroep daarom vraagt.
- Je AI-client kan voor elke aanroep die gegevens aanmaakt of wijzigt om toestemming vragen. Dat hangt af van de client en de instellingen. De tools zelf vragen niet apart om toestemming.

## Wat heb ik nodig?

Een Shiftbase-API-sleutel. Maak die aan in het App Center bij **Public API**. De API vereist de uitbreiding **App Center Plus**. Voor open diensten en afwezigheden heb je ook het Shiftbase-abonnement **Basic** of hoger nodig.

Bekijk de [installatiestappen voor Shiftbase](/shiftbase/) voor Claude, ChatGPT, Cursor en andere clients.
