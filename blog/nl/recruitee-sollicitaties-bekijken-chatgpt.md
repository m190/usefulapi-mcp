---
title: Bekijk je Recruitee-sollicitaties in ChatGPT
description: Bereid je recruitmentoverleg voor met Claude of ChatGPT: bekijk kandidaatfasen, teamnotities, komende gesprekken en open taken in Recruitee.
date: 2026-10-31
products: recruitee
lang: nl
translation: recruitee-hiring-handover-in-claude
source: 897e05a610abc25745f492625d1bd8c0f549ef8e0194b3dc45e64bff4541965f
---
Je kunt Claude of ChatGPT vragen om een overdracht uit Recruitee voor te bereiden: de vacature opzoeken, de huidige fase van elke kandidaat bekijken en teamnotities, komende gesprekken en open taken in één antwoord samenbrengen. Voeg `https://recruitee.usefulapi.io/mcp` als koppeling toe en noem de vacature die je wilt bespreken.

## Met welke vraag begin ik?

> Toon de kandidaten voor onze vacature Customer Success Manager, hun huidige fase en alle sollicitatiegesprekken van deze week.

Vervang het voorbeeld door een vacature die je beheert. Voeg de locatie of afdeling toe als meerdere vacatures dezelfde titel hebben. Geef voor gespreksdatums ook je tijdzone aan.

## Wat leest de AI stap voor stap?

1. Hij zoekt de vacature met `recruitee_list_offers` en opent die met `recruitee_get_offer`. Recruitee noemt vacatures in de API "offers". Dat zijn vacaturegegevens, geen arbeidsvoorstellen.
2. Hij gebruikt `recruitee_list_candidates` met de gekozen vacature-ID en opent de relevante profielen met `recruitee_get_candidate`. Een kandidaat kan bij meerdere vacatures horen. De overdracht moet daarom de koppeling aan deze vacature gebruiken.
3. Hij leest bestaande teamnotities met `recruitee_list_candidate_notes`. Als je ook gespreksbeoordelingen wilt zien, kan hij `recruitee_list_evaluations` lezen en opgeslagen feedback onderscheiden van zijn eigen samenvatting.
4. Hij bekijkt met `recruitee_list_interview_events` de gesprekken per kandidaat binnen je periode en met `recruitee_list_tasks` hun onvoltooide taken.
5. Hij stelt de overdracht samen met de huidige fase, geplande gesprekken en openstaande vervolgstappen. Ontbrekende informatie blijft als zodanig zichtbaar.

Vacaturelijsten gebruiken paginanummers; kandidatenlijsten gebruiken een offset. Vraag de assistent om alle passende resultaten op te halen voordat hij de overdracht volledig noemt. Een leeg resultaat of een fout door ontbrekende rechten bewijst niet dat een kandidaat geen openstaand werk heeft.

## Kan ik een notitie opslaan of de fase van een kandidaat wijzigen?

Nadat je de kandidaat-ID en de exacte tekst hebt gecontroleerd, kun je de assistent vragen om met `recruitee_add_candidate_note` een notitie op te slaan die zichtbaar is voor het team. Met `recruitee_create_task` kan hij ook een vervolgtaak aanmaken nadat je de kandidaat, verantwoordelijke en vervaldatum hebt gekozen.

Voor een fasewijziging leest hij de koppeling van de kandidaat aan de vacature en de vacaturepipeline met `recruitee_get_pipeline_template`. Daarna roept hij `recruitee_move_candidate_stage` aan met de koppelings-ID en de ID van de doelfase. De koppelings-ID verwijst naar een kandidaat bij een specifieke vacature. Fasewijzigingen kunnen automatiseringen activeren die in Recruitee zijn ingesteld.

Deze schrijftools voeren hun wijziging uit zodra ze worden aangeroepen. Ze dwingen geen aparte voorvertoning of bevestiging af. Vraag je assistent om de exacte wijziging te tonen en op je toestemming te wachten. Beperk de eerste overdracht tot de gegevens die je nodig hebt voor het overleg en neem beslissingen over kandidaten zelf.

## Wat heb ik nodig?

Een Recruitee-bedrijfs-ID en een persoonlijk API-token. Je vindt persoonlijke API-tokens onder **Settings → Apps and plugins**. Voer de inloggegevens in op de aanmeldpagina van de koppeling. Het token gebruikt de rechten van de recruitmentrol die het heeft aangemaakt. Recruitee legt dit uit in de [handleiding voor API-tokens](https://support.recruitee.com/en/articles/8213076-faq-api).

Gebruik een AI-client die je organisatie heeft goedgekeurd voor kandidaatgegevens. Bekijk de [Recruitee-installatiestappen](/recruitee/) voor Claude, ChatGPT, Cursor en andere MCP-clients.
