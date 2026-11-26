---
title: Encuentra las facturas sin pagar de Service Fusion en ChatGPT
description: Pide a ChatGPT, Claude o Cursor que muestre las facturas de Service Fusion sin pagar, agrupadas por cliente y con el trabajo asociado a cada una.
date: 2026-11-26
products: service-fusion
lang: es
translation: find-unpaid-service-fusion-invoices-in-chatgpt
source: 5f31ce5fd58ece5b868021cb44cf0f65d5e5b7970f0e2a9dec740af7c018f2d2
---
Puedes preguntarle a ChatGPT, Claude o Cursor cuáles de tus facturas recientes de Service Fusion siguen sin pagar. La IA lee tus facturas página por página, se queda con las que no están marcadas como pagadas y las agrupa por cliente. Si lo pides, también busca el trabajo asociado a una factura. Añade `https://service-fusion.usefulapi.io/mcp` como servidor MCP y pregunta con tus propias palabras.

## ¿Qué le pregunto para empezar?

> ¿Qué facturas de Service Fusion de los últimos 30 días siguen sin pagar? Agrúpalas por cliente.

También puedes pedir solo las facturas de un cliente, consultar un periodo más largo o buscar el trabajo y los pagos asociados a una factura.

## ¿Qué hace la IA paso a paso?

1. Lee tus facturas con `servicefusion_list_invoices`. Cada factura incluye su número, total, fechas, cliente y un indicador de si está pagada. La API de Service Fusion no tiene filtros de facturas, así que la IA no puede pedir directamente las facturas sin pagar ni las de un cliente. En su lugar, ordena las facturas con la fecha más reciente primero y las lee página por página. Una página tiene 10 facturas por defecto y como máximo 50. Una llamada lee una página, y la respuesta da el número de la página siguiente. Cuando una página solo tiene facturas anteriores al periodo que pediste, la IA no necesita las páginas siguientes.
2. Se queda con las facturas que no están marcadas como pagadas y las agrupa por cliente, con el número, la fecha y el total de cada factura.
3. Para volver a ver una factura, la abre con `servicefusion_get_invoice`.
4. Para encontrar el trabajo asociado a una factura, busca trabajos por número de factura con `servicefusion_list_jobs`. La misma llamada puede incluir, para cada trabajo, los pagos, las facturas y los técnicos asignados. `servicefusion_get_job` abre un trabajo con el mismo detalle.
5. Si preguntas por un cliente, puede buscar el cliente y sus contactos con `servicefusion_list_customers` y `servicefusion_get_customer`.

Las llamadas de datos de Service Fusion que tienen éxito cuentan para tu plan, y cada página de facturas es una llamada. Pide páginas de 50 facturas y un periodo corto para usar menos llamadas. El servidor intenta reembolsar una llamada fallida.

## ¿Puede cambiar mis facturas?

Ninguna herramienta cambia, envía o elimina una factura, ni la marca como pagada. La revisión de arriba usa solo herramientas de lectura.

El servidor tiene tres herramientas que escriben datos de Service Fusion. `servicefusion_create_customer`, `servicefusion_create_job` y `servicefusion_create_estimate` crean un cliente, un trabajo o un presupuesto nuevo. Un trabajo nuevo aparece en la agenda de tu equipo. Estos registros no se pueden eliminar a través de la API, y una segunda llamada crea un segundo registro. Estas herramientas actúan cuando se llaman; no exigen un paso de vista previa por separado. Si eliges **Read only** (solo lectura) al conectar, el servidor oculta las herramientas de escritura y rechaza las llamadas a ellas. Tu cliente de IA puede pedirte que apruebes cada llamada a una herramienta; esto depende del cliente y de su configuración.

Las herramientas de tu cuenta de UsefulAPI son independientes. `servicefusion_usage_status` muestra tu uso y tu plan. `servicefusion_upgrade` da opciones de plan o un enlace de pago; el cambio de Pro a Pro+ requiere confirmación. `servicefusion_cancel_subscription` también requiere confirmación y termina la suscripción al final del periodo actual. `servicefusion_request_feature` nos envía una solicitud de función. Estas herramientas no cambian datos de Service Fusion.

## ¿Qué necesito?

Un Client ID y un Client Secret de Service Fusion. En Service Fusion, abre **Admin → Developer Settings → API Credentials** (OAuth Consumer) y copia los dos. Las credenciales actúan con los permisos de tu usuario. El acceso a la API está incluido en el plan PRO de Service Fusion; en otros planes, pide al soporte de Service Fusion que lo active.

Consulta los [pasos de configuración de Service Fusion](/service-fusion/) para ChatGPT, Claude, Cursor y otros clientes MCP.
