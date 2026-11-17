---
title: Consulta el stock de Finale Inventory por ubicación en Claude
description: Pregunta a Claude o ChatGPT cuánto stock de un producto tienes en cada ubicación de Finale Inventory, con las cantidades pedidas y reservadas.
date: 2026-11-16
products: finale-inventory
lang: es
translation: finale-inventory-stock-by-location-in-claude
source: 03a8d76b08e765832ee320f8a6e5a6a49831c6a69e6fcd971002b31dd3c07946
---
Puedes preguntar a Claude o ChatGPT cuánto stock tienes en Finale Inventory, producto por producto y ubicación por ubicación. La IA lee tus ubicaciones y las entradas de stock de Finale, las suma por ubicación y muestra la cantidad en almacén junto a las cantidades pedidas y reservadas. Añade `https://finale-inventory.usefulapi.io/mcp` como conector y describe lo que necesitas.

## ¿Qué le pregunto para empezar?

> ¿Cuánto stock del SKU 1042 tenemos en cada ubicación de Finale? Muestra las cantidades en almacén, pedidas y reservadas.

También puedes preguntar por varios productos o por las entradas de stock de una ubicación, por ejemplo el almacén principal.

## ¿Qué hace la IA paso a paso?

1. Lista tus ubicaciones y sububicaciones con `finale_list_facilities`. Cada ubicación tiene un nombre y una URL de ubicación. Las demás herramientas de stock usan esa URL para identificar la ubicación.
2. Si das el nombre de un producto y no su SKU, busca el producto con `finale_list_products`. Esta herramienta filtra por el id exacto del producto, por estado y por la fecha de la última actualización. No busca por nombre, así que en un catálogo grande la IA puede necesitar varias llamadas para encontrar un producto. `finale_get_product` muestra un producto completo, por ejemplo sus proveedores y sus reglas de reposición.
3. Para un producto, llama a `finale_get_product_stock`. La herramienta suma las entradas de stock de Finale y devuelve los totales y las mismas tres cifras por ubicación: cantidad en almacén, cantidad pedida (órdenes de compra confirmadas) y cantidad reservada (órdenes de venta confirmadas).
4. Para una ubicación, llama a `finale_list_inventory_items` con la URL de la ubicación. Recibes una entrada por producto, lote y orden, con las mismas tres cantidades. El filtro coincide solo con esa ubicación: una sububicación es otra ubicación, así que la IA la pide por separado. Por defecto llegan 100 entradas, y la IA puede pedir hasta 1000. La respuesta indica si hay más entradas que coinciden.
5. Pone los nombres de las ubicaciones del paso 1 en lugar de las URL, así la respuesta muestra nombres y no URL.

Finale no tiene ningún filtro para su colección de stock. Por eso cada llamada a `finale_get_product_stock` o `finale_list_inventory_items` descarga la colección completa, y Finale la cuenta como una lectura de colección. Finale permite unas 300 lecturas de colección por hora en cada cuenta. Pregunta por pocos productos a la vez, no por todo tu catálogo producto tras producto. Las llamadas de datos de Finale que tienen éxito cuentan para tu plan. El servidor intenta reembolsar una llamada fallida.

## ¿Puede cambiar mi stock?

No. El servidor no tiene ninguna herramienta que cambie el stock, registre un recuento, despache un pedido o elimine un registro.

`finale_create_draft_purchase_order` escribe datos de Finale. Crea una orden de compra para un proveedor como borrador. El borrador no se confirma, no se recibe ni se envía al proveedor, y no cambia el stock. Tú lo revisas y lo confirmas en Finale. La herramienta actúa cuando se llama; no exige un paso de vista previa por separado. Si eliges **Read only** (solo lectura) al conectar, el servidor oculta esta herramienta y rechaza las llamadas a ella. Tu cliente de IA puede pedirte que apruebes cada llamada a una herramienta; esto depende del cliente y de su configuración.

El servidor también tiene herramientas que no tratan datos de Finale: `finale_usage_status` muestra tu uso y plan de UsefulAPI, `finale_upgrade` devuelve un enlace de pago o cambia una suscripción existente, `finale_cancel_subscription` cancela al final del periodo actual, y `finale_request_feature` nos envía una solicitud de función. Estas herramientas siguen disponibles en una conexión Read only. Un cambio a un plan superior puede generar un cargo en tu tarjeta. La cancelación y el cambio de Pro a Pro+ requieren `confirm: true`.

## ¿Qué necesito?

El nombre de tu cuenta de Finale (la parte que va después de app.finaleinventory.com/ en tu dirección de Finale), una clave de API y su secreto. La clave se crea en Finale, en **Application settings → Users → API keys**; para ello necesitas el permiso Manage users and permissions. Una clave de Finale tiene acceso completo a la cuenta, y el acceso a la API depende de tu plan de Finale.

Consulta los [pasos de configuración de Finale Inventory](/finale-inventory/) para Claude, ChatGPT, Cursor y otros clientes MCP.
