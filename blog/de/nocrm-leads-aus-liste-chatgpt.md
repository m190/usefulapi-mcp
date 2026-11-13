---
title: Übernimm neue Leads aus einer Liste in noCRM.io mit ChatGPT
description: Lass ChatGPT oder Claude eine Kontaktliste mit deinen noCRM.io-Leads abgleichen, vorhandene Kontakte überspringen und neue Leads mit Zuständigen anlegen.
date: 2026-11-08
products: nocrm-io
lang: de
translation: nocrm-add-leads-from-a-list-in-chatgpt
source: 758fd3f351f7867aedbf50d687d53899f3f7daf95fa2ae68866c2831718fc1cc
---
Du kannst ChatGPT oder Claude eine Kontaktliste geben, zum Beispiel von einer Messe, aus einem E-Mail-Verlauf oder einer Tabelle, und die Kontakte als Leads in noCRM.io anlegen lassen. Bitte die KI, zuerst jede E-Mail-Adresse in deinen vorhandenen Leads zu suchen. So kannst du bereits erfasste Kontakte überspringen. Füge `https://nocrm-io.usefulapi.io/mcp` als Konnektor hinzu und beschreibe deinen Auftrag.

## Mit welcher Frage fange ich an?

> Lege diese Messekontakte als noCRM.io-Leads für anna@ourcompany.com an. Prüfe zuerst anhand der E-Mail-Adressen, welche bereits existieren, einschließlich nicht zugewiesener Leads.

Füge die Kontakte unter dem Prompt ein. Unternehmen, Name, E-Mail und Telefonnummer reichen aus. Du kannst auch eine Pipeline-Phase und ein Tag nennen, zum Beispiel „Kontaktiert“ und „messe-2026“. Auf Wunsch zeigt dir die KI vorab, welche Leads sie anlegen möchte.

## Was macht die KI Schritt für Schritt?

1. Sie findet die zuständige Person mit `nocrm_list_users` oder mit `nocrm_get_user` und der E-Mail-Adresse. Mit `nocrm_list_steps` liest sie die Pipeline-Phasen, damit sie Namen verwendet, die in deinem Konto existieren.
2. Für jeden Kontakt durchsucht sie deine Leads mit `nocrm_list_leads` und dem E-Mail-Filter. Dieser sucht in der Lead-Beschreibung und in Kommentaren. Nicht zugewiesene Leads bleiben ausgeschlossen, sofern die KI sie nicht ausdrücklich mit anfordert. Nenne sie deshalb im Prompt.
3. Bei einem Treffer kann sie den Lead mit `nocrm_get_lead` öffnen und dir zeigen, wer zuständig ist und in welcher Phase er sich befindet.
4. Für jeden neuen Kontakt legt sie mit `nocrm_create_lead` einen Lead an. Der Titel ist meist der Unternehmensname. Die Beschreibung enthält die Kontaktdaten mit einer Angabe pro Zeile im Format „Bezeichnung: Wert“, zum Beispiel „Email: ada@example.com“. So liest noCRM.io die Angaben als Felder ein.
5. Nach dem Anlegen kann sie mit `nocrm_get_lead_duplicates` nach möglichen Duplikaten suchen, mit `nocrm_add_lead_comment` eine erste Notiz hinzufügen oder den Lead mit `nocrm_add_lead_to_client_folder` einem Kundenordner zuordnen.

Eine Pipeline-Phase lässt sich nur für einen Lead mit zuständiger Person festlegen. Ohne zuständige Person wird der Lead nicht zugewiesen angelegt. Du kannst ihn später mit `nocrm_assign_lead` zuweisen.

## Kann die KI denselben Lead zweimal anlegen?

Ja. `nocrm_create_lead` ist nicht idempotent: Jeder Aufruf erstellt einen neuen Lead, und das Tool prüft nicht, ob bereits einer existiert. Die E-Mail-Suche im Prompt ist ein Schritt, den die KI auf deine Anweisung ausführt. Sie reduziert Duplikate, verhindert sie aber nicht vollständig. Wenn du nur einen Plan möchtest, bitte die KI, die neuen Leads im Chat aufzulisten und noch kein schreibendes Tool aufzurufen.

Die schreibenden Tools sind `nocrm_create_lead`, `nocrm_update_lead`, `nocrm_assign_lead`, `nocrm_add_lead_comment`, `nocrm_create_client_folder` und `nocrm_add_lead_to_client_folder`. Sie führen Änderungen aus, sobald sie aufgerufen werden, und erzwingen keine separate Vorschau oder Bestätigung. `nocrm_update_lead` hängt Text an eine Beschreibung an und ersetzt den vorhandenen Text nicht. Ein Kommentar ist eine interne Notiz und sendet nichts an den Kontakt. Dein KI-Client kann vor jedem Tool-Aufruf um Zustimmung bitten. Das hängt vom Client und seinen Einstellungen ab.

Es gibt kein Tool zum Löschen eines Leads, Kommentars oder Kundenordners.

Der Server hat außerdem Tools, die keine noCRM.io-Daten bearbeiten: `nocrm_usage_status` zeigt deine UsefulAPI-Nutzung und deinen Tarif. `nocrm_upgrade` und `nocrm_cancel_subscription` ändern deinen Tarif, und `nocrm_request_feature` sendet uns einen Funktionswunsch. Eine Kündigung und ein Wechsel von Pro zu Pro+ benötigen `confirm: true`.

## Was brauche ich dafür?

Einen noCRM.io-API-Schlüssel. Öffne in noCRM.io den Bereich **Admin**, dann **Integrations → API**, und erstelle einen Schlüssel. Dafür brauchst du Adminrechte. Du benötigst außerdem deinen Kontonamen: Bei `https://acme.nocrm.io` ist das `acme`. noCRM.io erlaubt 2000 API-Anfragen pro Tag und Konto.

Die [noCRM.io-Einrichtung](/nocrm-io/) beschreibt die Schritte für ChatGPT, Claude, Cursor und andere MCP-Clients.
