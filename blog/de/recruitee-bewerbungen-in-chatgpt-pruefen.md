---
title: Prüfe deine Recruitee-Bewerbungen in ChatGPT
description: Bereite mit Claude oder ChatGPT dein Recruiting-Meeting vor: prüfe Bewerbungsphasen, Teamnotizen, anstehende Interviews und offene Aufgaben in Recruitee.
date: 2026-10-31
products: recruitee
lang: de
translation: recruitee-hiring-handover-in-claude
source: 897e05a610abc25745f492625d1bd8c0f549ef8e0194b3dc45e64bff4541965f
---
Du kannst Claude oder ChatGPT bitten, eine Übergabe aus Recruitee vorzubereiten: die Stelle finden, die aktuelle Phase jeder Bewerbung prüfen und Teamnotizen, anstehende Interviews sowie offene Aufgaben in einer Antwort zusammenfassen. Füge `https://recruitee.usefulapi.io/mcp` als Konnektor hinzu und nenne die Stelle, die du besprechen möchtest.

## Mit welcher Frage fange ich an?

> Zeige die Bewerbungen für unsere Stelle als Customer Success Manager, ihre aktuelle Phase und alle Interviews in dieser Woche.

Ersetze das Beispiel durch eine Stelle, die du betreust. Ergänze Standort oder Abteilung, wenn mehrere Stellen denselben Titel haben. Gib für Interviewtermine auch deine Zeitzone an.

## Was liest die KI Schritt für Schritt?

1. Sie sucht die Stelle mit `recruitee_list_offers` und öffnet sie mit `recruitee_get_offer`. Recruitee nennt Stellen in seiner API „offers“. Gemeint sind Stellendatensätze, keine Vertragsangebote.
2. Sie verwendet `recruitee_list_candidates` mit der ausgewählten Stellen-ID und öffnet die relevanten Profile mit `recruitee_get_candidate`. Eine Person kann sich auf mehrere Stellen bewerben. Die Zusammenfassung muss deshalb ihre Zuordnung zu dieser Stelle verwenden.
3. Sie liest vorhandene Teamnotizen mit `recruitee_list_candidate_notes`. Wenn du auch Interviewbewertungen anforderst, kann sie `recruitee_list_evaluations` lesen und gespeicherte Bewertungen von ihrer eigenen Zusammenfassung unterscheiden.
4. Sie prüft mit `recruitee_list_interview_events` die Interviews jeder Person im angegebenen Zeitraum und mit `recruitee_list_tasks` deren unerledigte Aufgaben.
5. Sie erstellt die Übergabe mit aktueller Phase, geplanten Interviews und offenen nächsten Schritten. Fehlende Angaben bleiben als solche erkennbar.

Stellenlisten verwenden Seitennummern, Bewerberlisten einen Offset. Bitte den Assistenten, alle passenden Ergebnisse abzurufen, bevor er die Übergabe als vollständig bezeichnet. Ein leeres Ergebnis oder ein Berechtigungsfehler beweist nicht, dass für eine Person keine Aufgaben offen sind.

## Kann ich eine Notiz speichern oder eine Bewerbungsphase ändern?

Nachdem du die Personen-ID und den genauen Text geprüft hast, kannst du mit `recruitee_add_candidate_note` eine für das Team sichtbare Notiz speichern lassen. Mit `recruitee_create_task` kann die KI auch eine Folgeaufgabe anlegen, sobald du Person, zuständige Person und Fälligkeitsdatum ausgewählt hast.

Für einen Phasenwechsel liest sie die Stellenzuordnung der Person und mit `recruitee_get_pipeline_template` die Pipeline der Stelle. Anschließend ruft sie `recruitee_move_candidate_stage` mit der Zuordnungs-ID und der Zielphasen-ID auf. Die Zuordnungs-ID bezeichnet eine Person bei einer bestimmten Stelle. Phasenwechsel können in Recruitee eingerichtete Automatisierungen auslösen.

Diese schreibenden Tools führen Änderungen aus, sobald sie aufgerufen werden. Sie erzwingen keine zusätzliche Vorschau oder Bestätigung. Bitte deinen Assistenten, die genaue Änderung anzuzeigen und deine Zustimmung abzuwarten. Beschränke die erste Übergabe auf die für das Meeting nötigen Daten und triff Einstellungsentscheidungen selbst.

## Was brauche ich dafür?

Eine Recruitee-Unternehmens-ID und ein persönliches API-Token. Persönliche API-Tokens findest du unter **Settings → Apps and plugins**. Gib die Zugangsdaten auf der Anmeldeseite des Konnektors ein. Das Token verwendet die Berechtigungen der Recruiting-Rolle, die es erstellt hat. Recruitee erläutert dies in seiner [Anleitung zu API-Tokens](https://support.recruitee.com/en/articles/8213076-faq-api).

Verwende einen KI-Client, den deine Organisation für Bewerberdaten freigegeben hat. Die [Recruitee-Einrichtung](/recruitee/) beschreibt die Schritte für Claude, ChatGPT, Cursor und andere MCP-Clients.
