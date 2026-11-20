---
title: Fasse offene eDesk-Tickets in ChatGPT zusammen
description: Frag ChatGPT oder Claude, welche eDesk-Supporttickets offen sind, was jeder Kunde geschrieben hat und um welche Bestellung es geht, bevor du antwortest.
date: 2026-11-23
products: edesk
lang: de
translation: summarize-open-edesk-tickets-in-chatgpt
source: 3fbaf539d3794307cac6ce0e2dfca863a0b79c672c14c4a897723dccfe5c8801
---
Du kannst ChatGPT oder Claude deine offenen eDesk-Tickets durchgehen lassen, bevor du mit dem Antworten beginnst. Die KI listet die Tickets aus allen deinen Verkaufskanälen auf, öffnet jedes Ticket, liest die Nachrichten des Kunden und sagt dir in wenigen Zeilen, was jeder Kunde möchte. Füge `https://edesk.usefulapi.io/mcp` als Konnektor hinzu und stelle deine Frage in normalen Worten.

## Mit welcher Frage fange ich an?

> Welche eDesk-Tickets sind offen und wurden seit gestern aktualisiert? Sag mir bei jedem, was der Kunde möchte.

Du kannst auch nach einem Status wie Unread oder Pending fragen, nach einem Tickettyp wie ReturnRequest, nach einem Kanal wie deinem Amazon-Shop oder nach den Tickets einer bestimmten Person im Team.

## Was macht die KI Schritt für Schritt?

1. Sie findet die Tickets mit `edesk_list_tickets`. Die KI kann nach Status, Tickettyp, Kanal, zuständiger Person, Kontakt, verknüpfter Bestellung und dem Datum der letzten Aktualisierung filtern. Die Antwort zeigt den Betreff, den Kanal, die zuständige Person, die verknüpfte Bestellung und die IDs der Nachrichten. Eine Seite enthält standardmäßig 25 Tickets und höchstens 100. Ein Aufruf liest eine Seite. Wenn mehr Tickets passen, muss die KI `edesk_list_tickets` erneut mit der nächsten Seitennummer aufrufen.
2. Sie öffnet jedes Ticket mit `edesk_get_ticket`. Das zeigt den Status, die zuständige Person, die Tags, die benutzerdefinierten Felder, die verknüpfte Bestellung und die IDs aller Nachrichten im Ticket.
3. Sie liest die Nachrichten mit `edesk_get_message`. Ein Aufruf liest eine Nachricht oder interne Notiz mit Text, Richtung, Verfasser und Anhängen. Die KI liest so viele Nachrichten, wie sie braucht, um das Anliegen zu verstehen. Dann gibt sie dir für jedes passende Ticket eine kurze Zusammenfassung.
4. Wenn es in einem Ticket um eine Bestellung geht und du nach Details fragst, öffnet sie die Bestellung mit `edesk_get_sales_order`. Das zeigt die Artikel, die Beträge, die Adressen, die Sendungsnummern und die Lieferdaten.
5. Damit sie Namen statt IDs zeigen kann, liest sie bei Bedarf deine Kanäle mit `edesk_list_channels` und dein Team mit `edesk_list_users`.

Erfolgreiche Aufrufe mit eDesk-Daten werden auf dein Tarifkontingent angerechnet. Jedes geöffnete Ticket und jede gelesene Nachricht ist ein Aufruf. Der Server versucht, einen fehlgeschlagenen Aufruf wieder gutzuschreiben.

## Kann die KI einem Kunden ohne meine Zustimmung antworten?

Die Übersicht oben verwendet nur lesende Tools. Kein Tool löscht ein Ticket, eine Nachricht oder eine Bestellung.

Der Server hat diese Tools, die eDesk-Daten schreiben: `edesk_update_ticket` ändert Status, zuständige Person, Tags oder Betreff eines Tickets. `edesk_add_ticket_note` und `edesk_add_order_note` fügen interne Notizen hinzu, die nicht an den Kunden gehen. `edesk_reply_to_ticket` sendet eine Antwort an die Standardempfänger des Kanals. Bei einem Mirakl-Kanal kann die Einstellung „Default messages recipients“ den Kunden, den Betreiber oder beide auswählen, und die API kann die Empfänger nicht wählen. Wenn die Empfänger wichtig sind, verwende das Antwortfeld in eDesk. eDesk stellt die Antwort zur Zustellung an den Marktplatz- oder E-Mail-Kanal in die Warteschlange, und danach lässt sie sich nicht mehr zurückholen. Diese Tools handeln, sobald sie aufgerufen werden, und erzwingen keine separate Vorschau. Wenn du den Text zuerst freigeben möchtest, bitte die KI, einen Entwurf im Chat zu schreiben. Wenn du beim Verbinden **Read only** wählst, blendet der Server die schreibenden Tools aus und lehnt Aufrufe an sie ab. Dein KI-Client kann vor jedem Tool-Aufruf um Zustimmung bitten. Das hängt vom Client und seinen Einstellungen ab.

Der Server hat außerdem Tools, die keine eDesk-Daten bearbeiten: `edesk_usage_status` zeigt deine UsefulAPI-Nutzung und deinen Tarif, `edesk_upgrade` gibt einen Zahlungslink zurück oder ändert ein bestehendes Abonnement, `edesk_cancel_subscription` kündigt zum Ende des aktuellen Zeitraums, und `edesk_request_feature` sendet uns einen Funktionswunsch. Diese Tools bleiben auch in einer Verbindung mit **Read only** verfügbar. Ein Upgrade kann deine Karte belasten. Eine Kündigung und ein Wechsel von Pro zu Pro+ benötigen `confirm: true`.

## Was brauche ich dafür?

Einen eDesk-API-Token. Du erstellst ihn unter **dashboard.edesk.com/api-token**. Die eDesk-API ist Teil des Enterprise-Tarifs, und der Token handelt mit den Rechten der Person, die ihn erstellt hat.

Die [eDesk-Einrichtung](/edesk/) beschreibt die Schritte für ChatGPT, Claude, Cursor und andere MCP-Clients.
