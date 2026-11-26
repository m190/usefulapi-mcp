---
title: Revisa los tickets abiertos de Enchant en Cursor
description: Pide a Cursor, Claude o ChatGPT que liste los tickets abiertos de Enchant, lea cada conversación y resuma en pocas líneas qué necesita cada cliente.
date: 2026-11-25
products: enchant
lang: es
translation: review-open-enchant-tickets-in-cursor
source: d559d0f7c2b112bd3dd042669fb5e3824ce1bbd1395c7fa61c8f28e7b43c6361
---
Puedes pedir a Cursor, Claude o ChatGPT que revise tus tickets abiertos de Enchant antes de empezar a responder. La IA lista los tickets abiertos, abre cada conversación y te dice en pocas líneas qué necesita cada cliente. Añade `https://enchant.usefulapi.io/mcp` como servidor MCP y pregunta con tus propias palabras.

## ¿Qué le pregunto para empezar?

> ¿Qué tickets de Enchant están abiertos? Lee cada conversación y dime qué necesita el cliente.

También puedes pedir solo los tickets sin asignar, los tickets de un agente, de una bandeja de entrada o de una etiqueta, o los tickets actualizados desde ayer.

## ¿Qué hace la IA paso a paso?

1. Busca los tickets con `enchant_list_tickets`. La IA puede filtrar por estado (abierto, en espera o cerrado), por bandeja de entrada, por agente asignado (o sin asignar), por etiqueta, por tipo de ticket como correo o chat, y por la fecha en que se creó o se actualizó por última vez un ticket. Por defecto, los tickets más recientes aparecen primero. Cada resultado tiene un resumen corto del ticket. Una página tiene 10 tickets por defecto y como máximo 100. Una llamada lee una página, así que si hay más tickets que coinciden, la IA debe hacer otra llamada para la página siguiente. La paginación por número de página llega hasta 10.000 resultados; a partir de ahí, la IA filtra por fecha de creación.
2. Abre cada ticket con `enchant_get_ticket` y pide los mensajes. Así ve la conversación completa: los correos del cliente, tus respuestas y las notas internas. En la misma llamada, la IA también puede pedir el cliente, el agente asignado, la bandeja de entrada y las etiquetas. Enchant cuenta un crédito de API adicional por cada uno de estos datos que pide la IA.
3. Para mostrar nombres en lugar de identificadores, puede leer tus agentes con `enchant_list_users`.
4. Si preguntas por un cliente, lo busca por su dirección de correo con `enchant_list_customers` y abre su perfil con `enchant_get_customer`.
5. Te da una nota corta para cada ticket: quién escribió, qué necesita y qué queda pendiente.

Las llamadas de datos de Enchant que tienen éxito cuentan para tu plan, y abrir cada ticket para leerlo requiere una llamada. El servidor intenta reembolsar una llamada fallida.

## ¿Puede responder a un cliente sin mi aprobación?

La revisión de arriba usa solo herramientas de lectura. Ninguna herramienta elimina un ticket.

El servidor tiene herramientas que escriben datos de Enchant. `enchant_reply_to_ticket` envía un correo real a la dirección que indica la IA. `enchant_add_note` añade una nota interna que no se envía al cliente. `enchant_update_ticket` cambia el estado, el agente, la bandeja de entrada, el asunto o las etiquetas de un ticket, y puede marcar un ticket como spam o moverlo a la papelera. `enchant_add_ticket_labels` y `enchant_remove_ticket_labels` cambian etiquetas. `enchant_create_ticket`, `enchant_create_customer`, `enchant_update_customer` y `enchant_add_customer_contact` crean o cambian registros, y `enchant_delete_customer_contact` quita un contacto de un cliente. Estas herramientas actúan cuando se llaman; no exigen un paso de vista previa por separado. Si quieres aprobar una respuesta primero, pide a la IA que escriba un borrador en el chat. Si eliges **Read only** (solo lectura) al conectar, el servidor oculta las herramientas de escritura y rechaza las llamadas a ellas. Tu cliente de IA puede pedirte que apruebes cada llamada a una herramienta; esto depende del cliente y de su configuración.

Las herramientas de tu cuenta de UsefulAPI son independientes. `enchant_usage_status` muestra tu uso y tu plan. `enchant_upgrade` da opciones de plan o un enlace de pago; el cambio de Pro a Pro+ requiere confirmación. `enchant_cancel_subscription` también requiere confirmación y termina la suscripción al final del periodo actual. `enchant_request_feature` nos envía una solicitud de función. Estas herramientas no cambian datos de Enchant.

## ¿Qué necesito?

El identificador de tu mesa de ayuda Enchant (**acme** para acme.enchant.com) y un token de acceso a la API. Para el token, instala la app **API** en **Settings → Apps** de tu mesa de ayuda y copia su token de acceso. La API está disponible en los planes de pago de Enchant.

Consulta los [pasos de configuración de Enchant](/enchant/) para Cursor, Claude, ChatGPT y otros clientes MCP.
