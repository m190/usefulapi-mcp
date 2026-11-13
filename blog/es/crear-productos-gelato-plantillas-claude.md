---
title: Crea productos de Gelato desde plantillas en Claude
description: Usa Claude o ChatGPT para consultar una plantilla de Gelato, elegir tallas e imágenes, crear un producto en tu tienda y comprobar su publicación.
date: 2026-11-04
products: gelato
lang: es
translation: gelato-store-products-from-templates-in-claude
source: 0b8613037e365a7a458e52018d69e7d89ac14563a5d682c998b78f3a25a43bbb
---
Puedes usar el servidor MCP de Gelato en Claude, ChatGPT o Cursor para convertir una plantilla guardada en un producto nuevo de tu tienda conectada. La IA consulta las variantes y los marcadores de posición de imágenes de la plantilla, te ayuda a elegir tallas y diseños y comprueba el producto mientras Gelato prepara sus variantes y mockups. Añade `https://gelato.usefulapi.io/mcp` como conector para empezar.

## ¿Qué le pregunto para empezar?

> Crea una camiseta oculta en mi tienda Gelato con mi plantilla y esta imagen. Muéstrame el plan y espera mi aprobación.

Incluye el ID de la tienda, el ID de la plantilla y una URL pública de tu imagen junto con la petición. Puedes pedir que te muestre los colores y tallas, el título, la descripción y la ubicación de la imagen antes de crear nada. La plantilla ya debe tener configurados el producto, los precios y los mockups en Gelato.

## ¿Qué hace la IA paso a paso?

1. Consulta tu plantilla con `gelato_get_template`, incluidos los ID de las variantes y los nombres de los marcadores de posición de imágenes.
2. Lista los productos existentes con `gelato_list_store_products` para que puedas comprobar si el producto ya existe. Si la tienda es grande, pídele que lea también las siguientes páginas.
3. Muestra en el chat los detalles propuestos para el producto. Tú eliges qué variantes de la plantilla incluir y qué imagen va en cada marcador de posición.
4. Tras tu aprobación, ejecuta `gelato_create_product_from_template` con esos datos. Si seleccionas solo algunas variantes, crea el producto con esa selección; si omites la selección, utiliza todas las variantes de la plantilla.
5. Comprueba el ID del producto devuelto con `gelato_get_store_product`. Gelato prepara las variantes y los mockups en segundo plano, por lo que la primera respuesta no significa que la publicación haya terminado.

## ¿Cuándo modifica mi tienda?

Consultar plantillas y listar productos no cambia nada. La herramienta de creación añade un producto nuevo a la tienda en cuanto se ejecuta. La revisión que pide el prompt es una instrucción para tu IA; la herramienta no incorpora un paso separado de confirmación. También se aplica la configuración de aprobación de herramientas de tu cliente.

Mantén desactivada la visibilidad en la tienda online mientras revisas el resultado. Crear un producto en la tienda no hace un pedido de impresión. El conector tiene herramientas de pedidos separadas, incluidas herramientas que pueden enviar un pedido a producción.

Este flujo crea un producto nuevo. No modifica las imágenes, los mockups ni las tallas de un anuncio existente. Comprueba el producto devuelto antes de repetir una petición de creación para evitar anuncios duplicados.

## ¿Qué necesito?

Una clave de API de Gelato de **Developer → API Keys**, una tienda conectada, una plantilla de producto guardada y una imagen en una URL pública. Copia el ID de la plantilla desde la página de plantillas de Gelato y el ID de la tienda desde la URL de su página.

Consulta los [pasos de configuración de Gelato MCP](/gelato/) para conectar Claude, ChatGPT, Cursor u otro cliente MCP. La [guía de Gelato para crear productos desde plantillas](https://dashboard.gelato.com/docs/guides/create-product-from-template/) explica cómo preparar la plantilla y sus marcadores de posición de imágenes.
