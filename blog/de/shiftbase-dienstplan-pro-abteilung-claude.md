---
title: Lies den Shiftbase-Dienstplan pro Abteilung in Claude
description: Claude oder ChatGPT zeigt dir den Shiftbase-Dienstplan mit Arbeitsstunden, offenen Schichten und Abwesenheiten und verschiebt auf Wunsch Schichten.
date: 2026-10-17
products: shiftbase
lang: de
translation: shiftbase-weekly-schedule-overview
source: b9d601edca17db21c56a959e08bda69e0c54299d3d57d155d77b78f95b147921
---
Du kannst den Shiftbase-Dienstplan in Claude oder ChatGPT lesen. Die KI zeigt die Schichten einer Abteilung für eine Woche, wer wann wie viele Stunden arbeitet und welche Schichten unbesetzt sind. Sie kann auch Abwesenheiten abrufen. Auf deinen Wunsch verschiebt sie eine Schicht. Füge zum Einstieg `https://shiftbase.usefulapi.io/mcp` als Konnektor zu deinem KI-Client hinzu.

## Mit welcher Frage fange ich an?

> Zeige den Shiftbase-Dienstplan für nächste Woche für die Abteilung Amsterdam, mit Gesamtstunden pro Person, offenen Schichten und genehmigten Abwesenheiten.

## Was macht die KI Schritt für Schritt?

1. Sie liest die Abteilungen mit `shiftbase_list_departments` und die Teams mit `shiftbase_list_teams`.
2. Mit `shiftbase_list_rosters` liest sie geplante Schichten für einen Zeitraum von höchstens 62 Tagen: Datum, Uhrzeiten, Pause, Person, Team und Stunden.
3. Mit `shiftbase_list_users` ordnet sie den Benutzer-IDs Namen zu.
4. Sie liest offene Schichten mit `shiftbase_list_open_shifts` und Abwesenheiten mit `shiftbase_list_absences`.
5. Auf deinen Wunsch verschiebt sie mit `shiftbase_update_roster` eine Schicht auf ein anderes Datum, eine andere Uhrzeit oder eine andere Person.

## Kann die KI den Dienstplan versehentlich ändern?

- Die Tools in Schritt 1 bis 4 lesen ausschließlich Daten.
- `shiftbase_update_roster` ändert eine Schicht. Bei wiederkehrenden Schichten kann die Änderung nur dieses Datum, dieses Datum und alle folgenden Schichten oder die gesamte Serie betreffen. Gib an, welche Möglichkeit du möchtest.
- `shiftbase_create_roster` legt eine Schicht an. Eine Benachrichtigung wird nur gesendet, wenn der Aufruf dies anfordert.
- Dein KI-Client kann vor jedem Aufruf, der Daten anlegt oder ändert, um Zustimmung bitten. Das hängt vom Client und seinen Einstellungen ab. Die Tools selbst fragen nicht gesondert nach.

## Was brauche ich dafür?

Einen Shiftbase-API-Schlüssel. Erstelle ihn unter **Settings → App center → Public API → Add**. Die API benötigt die Erweiterung **App Center Plus**. Für offene Schichten und Abwesenheiten brauchst du außerdem den Shiftbase-Tarif **Basic** oder höher.

Die [Shiftbase-Einrichtung](/shiftbase/) beschreibt die Schritte für Claude, ChatGPT, Cursor und andere Clients.
