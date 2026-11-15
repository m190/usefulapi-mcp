---
title: Revisa los mensajes y los SMS fallidos de Text Request en Claude
description: Pide a Claude o ChatGPT que lea los mensajes del día en Text Request, indique qué clientes esperan respuesta y liste los SMS que no llegaron.
date: 2026-11-14
products: text-request
lang: es
translation: text-request-messages-and-failed-texts-in-claude
source: 425bbaa0e519d3aacff6a7f02bfa8430f49d89ce7fce35c77d24f1fb400fa5c6
---
Puedes pedir a Claude o ChatGPT que repase los mensajes de tu panel de Text Request al final del día. La IA lee las conversaciones sin resolver, te dice qué preguntó cada cliente y lista los SMS que no llegaron. Añade `https://text-request.usefulapi.io/mcp` como conector y describe lo que necesitas.

## ¿Qué le pregunto para empezar?

> Revisa los mensajes de hoy en Text Request. ¿Qué clientes siguen esperando respuesta, qué preguntaron y cuáles de nuestros SMS no se entregaron?

También puedes indicar un panel, otro día u otra semana, una etiqueta o el número de teléfono de un cliente. Puedes pedir a la IA que redacte un borrador de respuesta para cada conversación abierta.

## ¿Qué hace la IA paso a paso?

1. Busca tus paneles con `textrequest_list_dashboards`. Cada panel tiene un id, un nombre, un número de teléfono y una zona horaria. Las demás herramientas necesitan el id del panel, así que indica el panel si tienes más de uno.
2. Lee las conversaciones con `textrequest_list_conversations`. La IA puede pedir solo las conversaciones sin resolver, buscar en ellas o filtrarlas por etiqueta. Cada conversación incluye el número de teléfono del cliente y su último mensaje, con el texto, la dirección, la hora y el estado de entrega.
3. Si el último mensaje de un cliente no basta, lee el historial con `textrequest_list_contact_messages`. Devuelve los mensajes enviados y recibidos de un número de teléfono, con el nombre del usuario que respondió.
4. Para comprobar las entregas, lee los mensajes de todo el panel con `textrequest_list_messages`. Puedes dar una hora de inicio y una de fin. Las horas están en UTC, por lo que la IA debe convertir tu día con la zona horaria del panel. Cada mensaje incluye su dirección, su estado de entrega y, cuando la entrega falló, el error de entrega.
5. Para saber por qué un cliente no recibe SMS, abre el contacto con `textrequest_get_contact`. El contacto muestra si el número se dio de baja, está bloqueado o está suprimido, además de sus etiquetas y grupos.
6. Si preguntas por los SMS previstos, lista los mensajes individuales programados con `textrequest_list_scheduled_messages`.

Las listas llegan en páginas de 25 registros, y la IA puede pedir hasta 100 por página. Si un día tiene más mensajes, la IA debe hacer otra llamada para la página siguiente, así que pídele que lea todas las páginas. Las llamadas de datos de Text Request que tienen éxito cuentan para tu plan. El servidor intenta reembolsar una llamada fallida, y las cuatro herramientas de cuenta de UsefulAPI indicadas más abajo no cuentan. Un día completo de mensajes en un panel con mucha actividad requiere muchas llamadas; un intervalo más corto requiere menos.

## ¿Puede enviar un SMS a mis clientes?

No. El servidor no tiene ninguna herramienta que envíe, programe, cambie o elimine un mensaje, ni ninguna que cambie un contacto. Todas sus herramientas de Text Request solo leen datos.

La IA puede escribir un borrador de respuesta en el chat. Después lo envías tú en Text Request. Los mensajes proceden de tus clientes, así que lee el borrador antes de usarlo.

El servidor también tiene herramientas que no tratan datos de Text Request: `textrequest_usage_status` muestra tu uso y plan de UsefulAPI, `textrequest_upgrade` devuelve un enlace de pago o cambia una suscripción existente, `textrequest_cancel_subscription` cancela al final del periodo actual, y `textrequest_request_feature` nos envía una solicitud de función. La cancelación y el cambio de Pro a Pro+ requieren `confirm: true`.

## ¿Qué necesito?

Una clave de API de Text Request, en **Integrations → API Access**. Tu cuenta de Text Request debe tener API Access activado. Los mensajes y los datos de contacto que pides pasan por UsefulAPI hasta tu cliente de IA.

Consulta los [pasos de configuración de Text Request](/text-request/) para Claude, ChatGPT, Cursor y otros clientes MCP.
