---
title: Crea mockups de Printful desde Claude o Cursor
description: Claude, ChatGPT o Cursor puede elegir un producto de Printful, comprobar el archivo, subir tu diseño, crear mockups y estimar el coste del pedido.
date: 2026-10-16
products: printful
lang: es
translation: printful-mockups-for-a-new-design
source: 43bf2366f3c4288a59e368463f9d7df09edf0867e9f0af854c83215b2b624783
---
Puedes crear mockups de Printful para un diseño nuevo desde Claude, ChatGPT o Cursor. La IA busca un producto sin imprimir y sus variantes, comprueba las áreas de impresión, añade tu diseño a la biblioteca de archivos y obtiene las imágenes de los mockups. También puede estimar el coste de un pedido. Añade `https://printful.usefulapi.io/mcp` como conector a tu cliente de IA para empezar.

## ¿Qué le pregunto para empezar?

> Crea mockups frontales de mi diseño en una camiseta unisex negra y otra blanca de Printful y estima el coste con envío a Alemania.

## ¿Qué hace la IA paso a paso?

1. Busca el producto sin imprimir con `printful_list_catalog_categories` y `printful_list_catalog_products` y consulta sus tallas y colores con `printful_get_catalog_product`.
2. Consulta las áreas de impresión, el tamaño necesario en píxeles y los DPI con `printful_get_printfiles`.
3. Añade tu diseño desde una URL pública con `printful_add_file` y lo comprueba con `printful_get_file` hasta que termina el procesamiento.
4. Inicia la creación de mockups con `printful_create_mockup_task` y obtiene los enlaces de las imágenes con `printful_get_mockup_task` cuando la tarea ha terminado.
5. Calcula el coste de un pedido con `printful_estimate_order_costs`. Esto no crea ningún pedido.
6. Consulta tus productos existentes para compararlos: `printful_list_sync_products` para una tienda integrada como Shopify o Etsy y `printful_list_store_products` para una tienda Manual-order o API.

## ¿Puede la IA hacer un pedido o cobrarme?

- `printful_create_draft_order` crea un pedido solo como borrador, sin cobrar ni producir nada. Este servidor no tiene una herramienta para confirmar pedidos. Tú confirmas el borrador en el panel de Printful, donde puedes ver el importe.
- `printful_estimate_order_costs` y las herramientas de mockups no crean pedidos.
- Printful limita las tareas de mockups a unas pocas por minuto, por lo que crear muchos mockups lleva tiempo.

## ¿Qué necesito?

Un Printful Private Token. Créalo en developers.printful.com desde **Your tokens → Create**, con los permisos necesarios. Para un token de cuenta, introduce también el ID de la tienda al conectar. Los tokens privados caducan y no se pueden renovar: cuando caduque el tuyo, crea otro y vuelve a conectar. Consulta los [pasos de configuración](/printful/) para Claude, ChatGPT, Cursor y otros clientes.
