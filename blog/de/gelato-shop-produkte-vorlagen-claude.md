---
title: Erstelle Gelato-Shop-Produkte aus Vorlagen in Claude
description: Nutze Claude oder ChatGPT, um eine Gelato-Vorlage zu lesen, Größen und Motive auszuwählen, ein Shop-Produkt anzulegen und den Status zu prüfen.
date: 2026-11-04
products: gelato
lang: de
translation: gelato-store-products-from-templates-in-claude
source: 0b8613037e365a7a458e52018d69e7d89ac14563a5d682c998b78f3a25a43bbb
---
Mit dem Gelato-MCP-Server in Claude, ChatGPT oder Cursor kannst du aus einer gespeicherten Gelato-Vorlage ein neues Produkt in deinem verbundenen Shop erstellen. Die KI liest die Varianten und Bildplatzhalter der Vorlage, hilft bei der Auswahl von Größen und Motiven und prüft das Produkt, während Gelato Varianten und Mockups vorbereitet. Füge zum Einstieg `https://gelato.usefulapi.io/mcp` als Konnektor hinzu.

## Mit welcher Frage fange ich an?

> Erstelle in meinem Gelato-Shop ein verborgenes T-Shirt aus meiner Vorlage und diesem Motiv. Zeige mir den Plan und warte auf meine Zustimmung.

Gib mit der Frage die Store-ID, die Vorlagen-ID und eine öffentliche URL zu deinem Motiv an. Du kannst dir vor dem Anlegen Farben und Größen, Titel, Beschreibung und Bildplatzierung zeigen lassen. In deiner Gelato-Vorlage sollten Produkt, Preise und Mockups bereits eingerichtet sein.

## Was macht die KI Schritt für Schritt?

1. Sie liest deine Vorlage mit `gelato_get_template`, einschließlich der Varianten-IDs und der Namen der Bildplatzhalter.
2. Sie liest vorhandene Produkte mit `gelato_list_store_products`, damit du prüfen kannst, ob das Produkt bereits existiert. Bitte sie bei einem großen Shop, auch die nächsten Seiten abzurufen.
3. Sie zeigt die vorgeschlagenen Produktdetails im Chat. Du wählst aus, welche Vorlagenvarianten enthalten sein sollen und welches Bild in welchen Platzhalter gehört.
4. Nach deiner Zustimmung ruft sie `gelato_create_product_from_template` mit diesen Angaben auf. Wenn du nur bestimmte Varianten auswählst, wird das Produkt mit dieser Auswahl erstellt. Ohne Auswahl verwendet das Tool alle Varianten der Vorlage.
5. Sie prüft die zurückgegebene Produkt-ID mit `gelato_get_store_product`. Gelato bereitet Varianten und Mockups im Hintergrund vor. Die erste Antwort bedeutet deshalb noch nicht, dass die Veröffentlichung abgeschlossen ist.

## Wann wird mein Shop verändert?

Das Lesen von Vorlagen und Auflisten von Produkten ändert nichts. Das Erstellungstool legt ein neues Shop-Produkt an, sobald es aufgerufen wird. Die Prüfung im Prompt ist eine Anweisung an deine KI; das Tool erzwingt keine separate Bestätigung. Die Einstellungen deines Clients zur Freigabe von Tools gelten ebenfalls.

Lass die Sichtbarkeit im Onlineshop ausgeschaltet, während du das Ergebnis prüfst. Ein Shop-Produkt anzulegen löst keine Druckbestellung aus. Der Konnektor hat separate Bestelltools, darunter auch Tools, die eine Bestellung zur Produktion einreichen können.

Dieser Ablauf erstellt ein neues Produkt. Er bearbeitet weder Motive noch Mockups oder Größen eines bestehenden Angebots. Prüfe das zurückgegebene Produkt, bevor du einen Erstellungsauftrag wiederholst, um doppelte Angebote zu vermeiden.

## Was brauche ich dafür?

Einen Gelato-API-Schlüssel aus **Developer → API Keys**, einen verbundenen Shop, eine gespeicherte Produktvorlage und ein Motiv unter einer öffentlichen URL. Kopiere die Vorlagen-ID von Gelatos Vorlagenseite und die Store-ID aus der URL der Shop-Seite.

Die [Gelato-MCP-Einrichtung](/gelato/) beschreibt die Schritte für Claude, ChatGPT, Cursor und andere MCP-Clients. Gelatos [Anleitung zum Erstellen von Produkten aus Vorlagen](https://dashboard.gelato.com/docs/guides/create-product-from-template/) erklärt, wie du die Vorlage und ihre Bildplatzhalter vorbereitest.
