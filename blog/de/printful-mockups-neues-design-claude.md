---
title: Erstelle Printful-Mockups in Claude oder Cursor
description: Claude, ChatGPT oder Cursor wählt ein Printful-Produkt, prüft die Druckdatei, lädt dein Design hoch, erstellt Mockups und schätzt die Bestellkosten.
date: 2026-10-16
products: printful
lang: de
translation: printful-mockups-for-a-new-design
source: 43bf2366f3c4288a59e368463f9d7df09edf0867e9f0af854c83215b2b624783
---
Du kannst Printful-Mockups für ein neues Design in Claude, ChatGPT oder Cursor erstellen. Die KI findet ein unbedrucktes Produkt und seine Varianten, prüft die Druckflächen, fügt dein Design zur Dateibibliothek hinzu und ruft die Mockup-Bilder ab. Sie kann auch die Kosten einer Bestellung schätzen. Füge zum Einstieg `https://printful.usefulapi.io/mcp` als Konnektor zu deinem KI-Client hinzu.

## Mit welcher Frage fange ich an?

> Erstelle Front-Mockups meines Designs auf einem schwarzen und einem weißen Unisex-T-Shirt von Printful und schätze die Kosten mit Versand nach Deutschland.

## Was macht die KI Schritt für Schritt?

1. Sie findet das unbedruckte Produkt mit `printful_list_catalog_categories` und `printful_list_catalog_products` und liest seine Größen und Farben mit `printful_get_catalog_product`.
2. Sie liest die Druckflächen sowie die erforderliche Pixelgröße und DPI mit `printful_get_printfiles`.
3. Sie fügt dein Design über eine öffentliche URL mit `printful_add_file` hinzu und prüft es mit `printful_get_file`, bis die Verarbeitung abgeschlossen ist.
4. Sie startet die Mockup-Erstellung mit `printful_create_mockup_task` und ruft nach Abschluss die Bildlinks mit `printful_get_mockup_task` ab.
5. Sie berechnet mit `printful_estimate_order_costs` die Kosten einer Bestellung. Dabei wird keine Bestellung angelegt.
6. Zum Vergleich liest sie deine vorhandenen Produkte: mit `printful_list_sync_products` für einen Shopify-, Etsy- oder anderen integrierten Shop, mit `printful_list_store_products` für einen Manual-order- oder API-Shop.

## Kann die KI eine Bestellung aufgeben oder Geld abbuchen?

- `printful_create_draft_order` legt eine Bestellung nur als Entwurf an. Es wird nichts berechnet oder produziert. Dieser Server hat kein Tool zum Bestätigen einer Bestellung. Du bestätigst einen Entwurf im Printful-Dashboard, wo du den zu zahlenden Betrag siehst.
- `printful_estimate_order_costs` und die Mockup-Tools legen keine Bestellung an.
- Printful erlaubt nur wenige Mockup-Aufträge pro Minute. Viele Mockups zu erstellen dauert deshalb etwas.

## Was brauche ich dafür?

Ein Printful Private Token. Erstelle es unter developers.printful.com über **Your tokens → Create** mit den benötigten Berechtigungen. Bei einem Token auf Kontoebene gibst du beim Verbinden außerdem die Store-ID an. Private Tokens laufen ab und können nicht erneuert werden: Erstelle nach Ablauf ein neues Token und verbinde dich erneut. Die [Einrichtung](/printful/) beschreibt die Schritte für Claude, ChatGPT, Cursor und andere Clients.
