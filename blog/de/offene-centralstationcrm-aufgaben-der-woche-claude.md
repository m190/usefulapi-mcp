---
title: Offene CentralStationCRM-Aufgaben der Woche in Claude prüfen
description: Frag Claude oder ChatGPT, welche CentralStationCRM-Aufgaben diese Woche offen und fällig sind, nach Tagen sortiert, mit der Person, Firma oder dem Deal dazu.
date: 2026-11-24
products: centralstationcrm
lang: de
translation: centralstationcrm-open-tasks-this-week-in-claude
source: 597f98dfadb1ed9bcb6ae34b965a4fda1941b730f0a39949c2536e9b6eb92632
---
Du kannst Claude oder ChatGPT deine Woche anhand deiner CentralStationCRM-Aufgaben planen lassen. Die KI listet deine offenen Anrufe, E-Mails, Besuche und To-dos für die Tage auf, die du nennst, sortiert sie nach Tag und sagt dir, um welche Person, Firma oder welchen Deal es bei jeder Aufgabe geht. Füge `https://centralstationcrm.usefulapi.io/mcp` als Konnektor hinzu und stelle deine Frage in normalen Worten.

## Mit welcher Frage fange ich an?

> Welche meiner CentralStationCRM-Aufgaben sind offen und diese Woche fällig? Sortiere sie nach Tag und sag mir, um wen es jeweils geht.

Du kannst auch nach den Aufgaben einer Kollegin oder eines Kollegen fragen, nach offenen Aufgaben, die vor heute fällig waren, oder nach erledigten Aufgaben, die letzte Woche fällig waren.

## Was macht die KI Schritt für Schritt?

1. Sie findet mit `centralstationcrm_get_current_user` die Person, zu der der verbundene API-Key gehört. Wenn es dein Key ist, liefert das deine Benutzer-ID, und die KI kann nur nach deinen Aufgaben fragen. Wenn der Key einer anderen Person gehört oder du nach einer Kollegin oder einem Kollegen fragst, findet die KI die richtige Person mit `centralstationcrm_list_users`.
2. Sie listet die Aufgaben mit `centralstationcrm_list_tasks` auf. Die KI ruft nur offene Aufgaben für deine Benutzer-ID ab, die diese Woche fällig sind. Jede Aufgabe zeigt die Felder, die CentralStationCRM zurückgibt, zum Beispiel den Text, die Art (task, call, email, visit, preparation oder important) und ob sie erledigt ist. Ein Fälligkeitszeitpunkt ist optional. Bei manchen Aufgaben zählt nur der Tag, nicht die Uhrzeit. Eine Seite enthält standardmäßig 50 Aufgaben und höchstens 250. Ein Aufruf liest eine Seite. Wenn die Antwort eine nächste Seitennummer nennt, muss die KI `centralstationcrm_list_tasks` erneut mit dieser Seite aufrufen.
3. Wenn eine Aufgabe mit einer Person, einer Firma oder einem Deal verknüpft ist, kann die KI diesen Datensatz mit `centralstationcrm_get_person`, `centralstationcrm_get_company` oder `centralstationcrm_get_deal` öffnen. Die KI kann im selben Aufruf verknüpfte Daten anfordern, zum Beispiel die Telefonnummern und E-Mail-Adressen einer Person. Um eine einzelne Aufgabe erneut zu lesen, verwendet sie `centralstationcrm_get_task`.
4. Sie sortiert die Aufgaben nach Tag und gibt dir eine kurze Liste: was zu tun ist, wann und für wen.

Erfolgreiche Aufrufe mit CentralStationCRM-Daten werden auf dein Tarifkontingent angerechnet. Jede Seite mit Aufgaben und jeder geöffnete Datensatz ist ein Aufruf. Der Server versucht, einen fehlgeschlagenen Aufruf wieder gutzuschreiben.

## Kann die KI meine Aufgaben ohne meine Zustimmung ändern?

Die Übersicht oben verwendet nur lesende Tools. Kein Tool löscht eine Person, eine Firma, einen Deal, eine Aufgabe oder eine Notiz.

Der Server hat diese Tools, die CentralStationCRM-Daten schreiben: `centralstationcrm_create_task` legt eine Aufgabe an, und `centralstationcrm_update_task` ändert eine Aufgabe, indem es sie zum Beispiel als erledigt markiert oder ihren Fälligkeitszeitpunkt verschiebt. `centralstationcrm_create_person`, `centralstationcrm_update_person`, `centralstationcrm_create_company`, `centralstationcrm_update_company`, `centralstationcrm_create_deal` und `centralstationcrm_update_deal` legen Kontakte, Firmen und Deals an oder ändern sie. `centralstationcrm_create_note` fügt einem Datensatz eine Notiz hinzu. Diese Tools handeln, sobald sie aufgerufen werden, und erzwingen keine separate Vorschau. Wenn du eine Änderung zuerst freigeben möchtest, bitte die KI, sie im Chat zu zeigen, bevor sie schreibt. Wenn du beim Verbinden **Read only** wählst, blendet der Server die schreibenden Tools aus und lehnt Aufrufe an sie ab. Dein KI-Client kann vor jedem Tool-Aufruf um Zustimmung bitten. Das hängt vom Client und seinen Einstellungen ab.

Der Server hat außerdem Tools, die keine CentralStationCRM-Daten bearbeiten: `centralstationcrm_usage_status` zeigt deine UsefulAPI-Nutzung und deinen Tarif, `centralstationcrm_upgrade` gibt einen Zahlungslink zurück oder hebt eine geplante Kündigung auf, `centralstationcrm_cancel_subscription` kündigt zum Ende des aktuellen Zeitraums, und `centralstationcrm_request_feature` sendet uns einen Funktionswunsch. Diese Tools bleiben auch in einer Verbindung mit **Read only** verfügbar. Das Upgrade-Tool belastet deine Karte nie: Einen Kauf oder einen Wechsel von Pro zu Pro+ bestätigst du auf der Zahlungsseite von Stripe. Eine Kündigung benötigt `confirm: true`.

## Was brauche ich dafür?

Einen CentralStationCRM-API-Key. Du findest ihn in CentralStationCRM unter **My settings** und dann **API key**. Der Key handelt mit den Rechten dieser Person.

Die [CentralStationCRM-Einrichtung](/centralstationcrm/) beschreibt die Schritte für Claude, ChatGPT, Cursor und andere MCP-Clients.
