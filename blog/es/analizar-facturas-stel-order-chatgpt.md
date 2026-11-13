---
title: Analiza facturas de STEL Order por cliente y producto en ChatGPT
description: Pide a ChatGPT o Claude que revise tus facturas de STEL Order de un periodo y agrupe los importes por cliente y por producto.
date: 2026-11-11
products: stel-order
lang: es
translation: stel-order-sales-by-client-and-product-in-chatgpt
source: 862b0562c8cb037f5adcbbce150271a3a425f3ec0a0a4d8d9b56a1b98242108f
---
Puedes pedir a ChatGPT o Claude que revise las facturas de tu cuenta de STEL Order de un periodo y sume sus importes por cliente y por producto. La IA lee las facturas y sus líneas dentro del intervalo indicado, y añade el nombre del cliente a cada total. Añade `https://stel-order.usefulapi.io/mcp` como conector y pregunta en español.

## ¿Qué le pregunto para empezar?

> Desglosa mis facturas de STEL Order de octubre por cliente y por producto, con un total para cada uno.

Indica el periodo que quieres revisar. También puedes limitar el análisis a un cliente, pedir solo los productos con más ventas o consultar qué facturas siguen pendientes de cobro.

## ¿Qué hace la IA paso a paso?

1. Puede comprobar a qué empresa pertenece la clave de API con `stelorder_get_company`.
2. Lista las facturas del periodo con `stelorder_list_ordinary_invoices`, indicando una fecha de inicio y otra de fin en UTC. Cada factura incluye su referencia, título, fecha, identificador de cliente e identificador de estado del documento. Cada llamada devuelve 100 facturas por defecto y hasta 500 como máximo. Si hay más, la IA debe realizar otra llamada con un desplazamiento mayor; pídele que lea todas las páginas.
3. La respuesta puede incluir las líneas de cada factura: nombre y referencia del artículo, unidades e importe de la línea. También puede contener el total de la factura, los impuestos, el desglose por tipo impositivo y el importe pagado. Para consultar una factura completa, utiliza `stelorder_get_ordinary_invoice`. Las llamadas de datos que terminan correctamente cuentan para tu plan; el servidor intenta devolver el uso de las llamadas fallidas. Si el periodo es amplio, empieza por un mes o por un cliente.
4. Las facturas identifican al cliente mediante un ID. La IA busca su nombre y número fiscal con `stelorder_list_clients`, o consulta un cliente concreto con `stelorder_get_client`.
5. Las líneas ya contienen el nombre y la referencia del artículo, que puede ser un producto o un servicio. Para obtener más información sobre un producto, como su categoría o si está inactivo, puede utilizar `stelorder_list_products` o `stelorder_get_product`.
6. Si también quieres saber cuánto queda por cobrar, lista los vencimientos pendientes con `stelorder_list_invoice_receipts` y los relaciona con las facturas revisadas mediante el identificador de factura de cada vencimiento.

Pide a la IA que aclare si cada total incluye impuestos. La factura proporciona por separado el total, los impuestos y su desglose. El estado del documento es un ID y este servidor no tiene una herramienta que devuelva los nombres de los estados. Si quieres excluir alguno, comprueba primero sus identificadores en STEL Order.

## ¿Puede modificar o eliminar mis facturas?

Las herramientas de facturas solo leen datos. Este servidor no tiene herramientas para crear, modificar o eliminar facturas, recibos, presupuestos, pedidos, productos o movimientos de stock.

Sí dispone de tres herramientas que escriben datos en STEL Order: `stelorder_create_client`, `stelorder_update_client` y `stelorder_create_contact`. Actúan cuando se ejecutan y no incorporan un paso separado de vista previa o confirmación. `stelorder_update_client` modifica el cliente real; los campos que no se envían conservan sus valores. Para una revisión como esta, pide a la IA que no ejecute herramientas de escritura. Tu cliente de IA puede solicitar autorización antes de cada llamada, según su configuración.

Las herramientas de tu cuenta de UsefulAPI son independientes de los datos de STEL Order. `stelorder_usage_status` muestra tu uso y plan; `stelorder_upgrade` devuelve un enlace de pago o cambia una suscripción existente; `stelorder_cancel_subscription` la cancela al final del periodo actual, y `stelorder_request_feature` permite solicitar una función. La cancelación y el cambio de Pro a Pro+ requieren confirmación.

## ¿Qué necesito?

Una clave de API de STEL Order creada desde una cuenta de superadministrador. Abre la sección de API en STEL Order y crea una clave o utiliza una existente.

Consulta los [pasos de configuración de STEL Order](/stel-order/) para ChatGPT, Claude, Cursor y otros clientes MCP.
