---
title: Clientes de esta semana en Text Request: ponte al día con Claude
description: Pide a Claude o ChatGPT que te diga qué clientes te escribieron esta semana, de qué trata cada conversación y qué clientes siguen esperando tu respuesta.
date: 2026-11-25
products: text-request
lang: es
translation: text-request-customer-threads-this-week-in-claude
source: a40a60543e6aaa678921b1f062762228cf936f060638775334a2201662e36d04
---
Puedes pedir a Claude o ChatGPT que te ponga al día con tus conversaciones de Text Request, cliente por cliente. La IA busca los contactos que tuvieron mensajes en los días que indiques, lee el historial de conversación de cada uno y te dice qué quiere cada cliente y quién sigue esperando respuesta. Añade `https://text-request.usefulapi.io/mcp` como conector y describe lo que necesitas.

## ¿Qué le pregunto para empezar?

> ¿Qué clientes nos escribieron por Text Request desde el lunes? Resume cada conversación y dime quién sigue esperando respuesta.

También puedes indicar un panel, una etiqueta o un grupo, pedir solo los contactos sin resolver o dar el número de teléfono de un cliente.

## ¿Qué hace la IA paso a paso?

1. Busca tus paneles con `textrequest_list_dashboards`. Cada panel tiene un id, un nombre, un número de teléfono y una zona horaria. Las demás herramientas necesitan el id del panel, así que indica el panel si tienes más de uno.
2. Busca los contactos con `textrequest_list_contacts`. La IA puede filtrar por la hora del último mensaje, por etiqueta, por grupo, por estado de resolución y por nombre o número de teléfono. Las horas están en UTC, por lo que la IA debe convertir "desde el lunes" con la zona horaria del panel. Cada contacto muestra el nombre, el número de teléfono, las etiquetas, los grupos, la nota, el estado de resolución, la hora del último mensaje enviado y del último recibido, y el número de mensajes. El filtro por el último mensaje cuenta los mensajes en ambas direcciones. Por eso la IA conserva solo los contactos cuyo último mensaje recibido llegó el lunes o después, según la zona horaria del panel.
3. Lee el historial de cada contacto con `textrequest_list_contact_messages`. Una llamada devuelve una página de los mensajes enviados y recibidos de un número de teléfono, con el texto, la dirección, la hora, el estado de entrega y, cuando existe, el nombre de usuario de la persona que respondió.
4. Para comprobar un cliente por su número de teléfono, abre el contacto con `textrequest_get_contact`. El contacto muestra si el número se dio de baja, está bloqueado o está suprimido, y por qué está suprimido.
5. Te da un resumen breve de cada cliente. Busca mensajes de clientes que no tienen una respuesta tuya posterior, también de clientes a los que nunca respondiste. Después lee el texto de los mensajes y el estado de resolución antes de decirte quién sigue esperando respuesta.

Las listas llegan en páginas de 25 registros, y la IA puede pedir hasta 100 por página. Si coinciden más registros, la IA debe hacer otra llamada para la página siguiente, así que pídele que lea todas las páginas. Las llamadas de datos de Text Request que tienen éxito cuentan para tu plan, y cada página de contactos y cada página del historial de un contacto es una llamada. El servidor intenta reembolsar una llamada fallida. Una semana con mucha actividad y muchos clientes requiere muchas llamadas; un intervalo más corto o una sola etiqueta requiere menos.

## ¿Puede enviar SMS a mis clientes?

No. El servidor no tiene ninguna herramienta que envíe, programe, cambie o elimine un mensaje, ni ninguna que cambie un contacto. Todas sus herramientas de Text Request solo leen datos.

La IA puede escribir un borrador de respuesta en el chat. Después lo envías tú en Text Request. Los mensajes proceden de tus clientes, así que lee el borrador antes de usarlo.

El servidor también tiene herramientas que no tratan datos de Text Request: `textrequest_usage_status` muestra tu uso y plan de UsefulAPI, `textrequest_upgrade` devuelve un enlace de pago o cambia una suscripción existente, `textrequest_cancel_subscription` cancela al final del periodo actual, y `textrequest_request_feature` nos envía una solicitud de función. Un cambio a un plan superior puede generar un cargo en tu tarjeta. La cancelación y el cambio de Pro a Pro+ requieren `confirm: true`.

## ¿Qué necesito?

Una clave de API de Text Request, en **Integrations → API Access**. Tu cuenta de Text Request debe tener API Access activado. Los mensajes y los datos de contacto que pides pasan por UsefulAPI hasta tu cliente de IA.

Consulta los [pasos de configuración de Text Request](/text-request/) para Claude, ChatGPT, Cursor y otros clientes MCP. Para revisar los mensajes de un día y los SMS fallidos, consulta [Revisa los mensajes y los SMS fallidos de Text Request en Claude](/es/blog/revisar-mensajes-text-request-claude/).
