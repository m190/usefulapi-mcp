---
title: Revisa los próximos alquileres de Booqable y sus facturas en ChatGPT
description: Pregunta a ChatGPT o Claude qué pedidos de alquiler de Booqable empiezan esta semana, qué contiene cada pedido y qué facturas siguen sin pagar.
date: 2026-11-17
products: booqable
lang: es
translation: booqable-upcoming-rentals-and-invoices-in-chatgpt
source: 59b121f03f760ed7f43c50765ad76a483071d05fd3cb501391ca424c758c8d7f
---
Puedes pedir a ChatGPT o Claude que prepare los alquileres de los próximos días a partir de tu cuenta de Booqable. La IA busca los pedidos que empiezan en un periodo, lee los datos del cliente y las líneas de cada pedido, y comprueba las facturas y los pagos. Añade `https://booqable.usefulapi.io/mcp` como conector y describe lo que necesitas.

## ¿Qué le pregunto para empezar?

> ¿Qué pedidos de Booqable empiezan esta semana? Para cada uno, muestra el cliente, los artículos y si la factura está pagada.

También puedes pedir los pedidos que terminan esta semana, los de un cliente, los de un estado como reserved o los de una etiqueta.

## ¿Qué hace la IA paso a paso?

1. Busca los pedidos con `booqable_list_orders`. La IA puede filtrar por el inicio o el fin del periodo de alquiler, por estado, por estado de pago, por cliente y por etiqueta, y puede buscar por número de pedido, nombre o correo del cliente. Una página tiene 25 pedidos por defecto y como máximo 100. Cada llamada lee una página, así que si hay más pedidos que coinciden, la IA debe hacer otra llamada para la página siguiente.
2. Abre cada pedido con `booqable_get_order`. Por defecto la respuesta incluye el cliente y las líneas del pedido, y muestra los totales, el depósito y el estado de pago. La IA también puede pedir los pagos, los documentos y las notas del pedido en la misma llamada.
3. Comprueba las facturas con `booqable_list_documents`. Esta herramienta lista facturas, presupuestos y contratos, y puede filtrar por pedido, por cliente, por tipo de documento y por estado, por ejemplo pago pendiente.
4. Si pides más detalle, lista los pagos con `booqable_list_payments`, o los productos reservados en cada pedido y cuántos siguen fuera o ya se han devuelto con `booqable_list_plannings`.
5. `booqable_get_company` muestra el nombre de tu empresa, la moneda y la zona horaria. La IA puede llamarla primero para comprobar la conexión.

Las llamadas de datos de Booqable que tienen éxito cuentan para tu plan. El servidor intenta reembolsar una llamada fallida.

## ¿Puede cambiar un pedido o cobrar un pago?

No puede cobrar un pago. Las herramientas de Booqable pueden leer pagos, pero no pueden cobrar ni reembolsar un pago ni finalizar una factura. Ninguna herramienta elimina un registro ni cancela un pedido.

El servidor tiene estas herramientas que escriben datos de Booqable: `booqable_create_customer`, `booqable_update_customer`, `booqable_create_order`, `booqable_update_order`, `booqable_book_product`, `booqable_transition_order_status` y `booqable_create_note`. Actúan cuando se llaman; no exigen un paso de vista previa por separado. La revisión de arriba usa solo herramientas de lectura. Si eliges **Read only** (solo lectura) al conectar, el servidor oculta las herramientas de escritura y rechaza las llamadas a ellas. Tu cliente de IA puede pedirte que apruebes cada llamada a una herramienta; esto depende del cliente y de su configuración.

El servidor también tiene herramientas que no tratan datos de Booqable: `booqable_usage_status` muestra tu uso y plan de UsefulAPI, `booqable_upgrade` devuelve un enlace de pago o cambia una suscripción existente, `booqable_cancel_subscription` cancela al final del periodo actual, y `booqable_request_feature` nos envía una solicitud de función. Estas herramientas siguen disponibles en una conexión Read only. Un cambio a un plan superior puede generar un cargo en tu tarjeta. La cancelación y el cambio de Pro a Pro+ requieren `confirm: true`.

## ¿Qué necesito?

El identificador de tu empresa en Booqable (acme, de acme.booqable.com) y un token de acceso. El token se crea en Booqable, en **Settings → User settings → Authentication methods**. Booqable incluye el acceso a la API en sus planes Grow y Scale.

Consulta los [pasos de configuración de Booqable](/booqable/) para Claude, ChatGPT, Cursor y otros clientes MCP.
