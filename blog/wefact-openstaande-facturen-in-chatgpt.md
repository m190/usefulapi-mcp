---
title: Bekijk openstaande WeFact-facturen in ChatGPT
description: Laat ChatGPT je openstaande WeFact-facturen op een rij zetten, met klant, vervaldatum en openstaand bedrag. Bekijk totalen per klant en valuta.
date: 2026-11-13
products: wefact
lang: nl
---
Je kunt ChatGPT vragen welke WeFact-facturen nog openstaan, bij welke de betaaltermijn verstreken is en hoeveel iedere klant nog moet betalen. De AI leest je facturen en maakt er een overzicht van, zonder facturen te wijzigen of herinneringen te versturen. Koppel `https://wefact.usefulapi.io/mcp` aan ChatGPT en stel je vraag in het Nederlands. Dezelfde koppeling werkt ook met Claude, Cursor en andere MCP-clients.

## Met welke vraag begin ik?

> Welke WeFact-facturen staan nog open? Toon klant, factuurnummer, vervaldatum en openstaand bedrag. Tel per klant en per valuta op.

Je kunt een klant of een periode noemen. Een periode beperkt de selectie op factuurdatum; het openstaande bedrag is de huidige stand in WeFact, geen reconstructie van het saldo op een eerdere datum. Vraag de AI om alle pagina's te lezen voordat hij een totaal geeft.

## Wat doet de AI stap voor stap?

1. Met `wefact_list_invoices` haalt de AI de verzonden en deels betaalde facturen op. Volgens de [statuslijst van WeFact](https://developer.wefact.com/variable-list) zijn dat status 2 en 3. De statusfilter neemt één code per aanroep aan, dus de AI leest beide selecties afzonderlijk. Conceptfacturen, creditfacturen, betaalde en vervallen facturen tellen niet mee als openstaande verkoopfacturen.
2. De lijst geeft onder meer het factuurnummer, de klant, de valuta, de uiterste betaaldatum, het betaalde bedrag en het openstaande bedrag. De AI houdt alleen facturen met een positief openstaand bedrag over en telt dat bedrag op, afzonderlijk per valuta. Bij een deelbetaling gebruikt hij het resterende bedrag, niet het oorspronkelijke factuurtotaal.
3. Per aanroep komen maximaal 1.000 facturen terug. De AI gebruikt de aantallen en de offset uit het antwoord om volgende pagina's op te halen. Een onvolledig overzicht moet hij als onvolledig aangeven; bedragen in verschillende valuta mag hij niet zonder wisselkoers bij elkaar optellen.
4. Voor details van één factuur gebruikt hij `wefact_get_invoice`, met het factuurnummer of de interne identifier uit de lijst. Daarmee kan hij de factuurregels, btw, betaalgegevens en verzend- of herinneringsdatums bekijken.
5. Voor extra klantgegevens gebruikt hij `wefact_list_debtors` of `wefact_get_debtor`. Zo kan hij bijvoorbeeld bij het klantnummer de bedrijfsnaam, contactpersonen en het btw-nummer opzoeken.

Laat de AI achterstallige facturen apart tonen op basis van de uiterste betaaldatum. Een factuur kan nog openstaan zonder dat de betaaltermijn verstreken is. Je kunt daarna zelf beslissen welke klanten je wilt benaderen.

## Kan de AI facturen aanpassen of herinneringen versturen?

De WeFact-datatools in deze koppeling lezen alleen. Ze kunnen geen factuur maken, wijzigen, verwijderen of als betaald markeren. Ze kunnen ook geen betalingsherinnering versturen of betaling uitvoeren. Een overzicht geeft je de informatie; opvolging doe je zelf in WeFact.

De UsefulAPI-accounttools staan hier los van. Met `wefact_usage_status` bekijk je je gebruik en abonnement. `wefact_upgrade` geeft abonnementsopties of een betaallink; een wijziging van Pro naar Pro+ vereist bevestiging. `wefact_cancel_subscription` vraagt ook om bevestiging en beëindigt het abonnement aan het einde van de lopende periode. Met `wefact_request_feature` kun je na overleg een ontbrekende functie aanvragen. Deze tools veranderen geen WeFact-facturen.

## Wat heb ik nodig?

Een WeFact-administratie met ingeschakelde API-toegang en je API-sleutel uit **Instellingen → API**. Als je een IP-whitelist gebruikt, moet die de verbinding toelaten. Deel je API-sleutel via het inlogscherm van de koppeling, niet in een chatbericht.

Bekijk de [WeFact-installatiestappen](/wefact/) voor het aansluiten van ChatGPT, Claude of Cursor. De [WeFact-documentatie over API-toegang](https://support.wefact.nl/instellingen/extern-de-gegevens-in-benaderen-api) legt uit waar je de API inschakelt.
