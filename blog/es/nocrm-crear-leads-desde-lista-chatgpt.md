---
title: Añade leads a noCRM.io desde una lista en ChatGPT
description: Pide a ChatGPT o Claude que compare una lista de contactos con tus leads de noCRM.io, omita los existentes y cree los nuevos con responsable y etiquetas.
date: 2026-11-08
products: nocrm-io
lang: es
translation: nocrm-add-leads-from-a-list-in-chatgpt
source: 758fd3f351f7867aedbf50d687d53899f3f7daf95fa2ae68866c2831718fc1cc
---
Puedes dar a ChatGPT o Claude una lista de contactos, por ejemplo de una feria, de un hilo de correo o de una hoja de cálculo, y pedirle que los añada a noCRM.io como leads. Pídele que busque primero cada email en tus leads existentes: así puedes omitir los contactos que ya tienes. Añade `https://nocrm-io.usefulapi.io/mcp` como conector y describe lo que necesitas.

## ¿Qué le pregunto para empezar?

> Añade estos contactos de la feria a noCRM.io como leads para anna@ourcompany.com. Comprueba primero por email cuáles existen ya, incluidos los leads sin asignar.

Pega los contactos debajo del prompt. Basta con empresa, nombre, email y teléfono. También puedes indicar una etapa del embudo y una etiqueta, como «Contactado» y «feria-2026». Puedes pedir a la IA que te muestre los leads que piensa crear antes de hacerlo.

## ¿Qué hace la IA paso a paso?

1. Busca al responsable con `nocrm_list_users` o con `nocrm_get_user` y su email, y consulta las etapas del embudo con `nocrm_list_steps` para utilizar nombres que existan en tu cuenta.
2. Para cada contacto, busca en tus leads con `nocrm_list_leads` y el filtro de email. Este filtro busca en la descripción del lead y en sus comentarios. Los leads sin asignar quedan excluidos salvo que la IA los solicite también, por lo que debes mencionarlos en el prompt.
3. Si encuentra una coincidencia, puede abrir el lead con `nocrm_get_lead` e indicarte quién es su responsable y en qué etapa está.
4. Para cada contacto nuevo, crea un lead con `nocrm_create_lead`. El título suele ser el nombre de la empresa. La descripción contiene los datos de contacto, uno por línea con el formato «Etiqueta: valor», por ejemplo «Email: ada@example.com», para que noCRM.io los reconozca como campos.
5. Tras crear un lead, puede buscar posibles duplicados con `nocrm_get_lead_duplicates`, añadir una primera nota con `nocrm_add_lead_comment` o guardar el lead en una carpeta de cliente con `nocrm_add_lead_to_client_folder`.

Solo se puede establecer una etapa del embudo en un lead que tenga responsable. Sin responsable, se crea sin asignar y puedes asignarlo después con `nocrm_assign_lead`.

## ¿Puede crear el mismo lead dos veces?

Sí. `nocrm_create_lead` no es idempotente: cada llamada crea un lead nuevo y la herramienta no comprueba si ya existe. La búsqueda por email del prompt anterior es un paso que la IA hace porque se lo pides. Reduce los duplicados, pero no los evita por completo. Si solo quieres un plan, pide a la IA que muestre la lista de leads nuevos en el chat y que todavía no ejecute herramientas de escritura.

Las herramientas de escritura son `nocrm_create_lead`, `nocrm_update_lead`, `nocrm_assign_lead`, `nocrm_add_lead_comment`, `nocrm_create_client_folder` y `nocrm_add_lead_to_client_folder`. Actúan en cuanto se ejecutan y no incorporan un paso separado de vista previa o confirmación. `nocrm_update_lead` añade texto al final de una descripción y nunca sustituye el texto existente. Un comentario es una nota interna y no envía nada al contacto. Tu cliente de IA puede pedir autorización antes de cada llamada, según el cliente y su configuración.

No hay ninguna herramienta que elimine un lead, un comentario o una carpeta de cliente.

El servidor también tiene herramientas que no tratan datos de noCRM.io: `nocrm_usage_status` muestra tu uso y plan de UsefulAPI, `nocrm_upgrade` y `nocrm_cancel_subscription` cambian tu plan, y `nocrm_request_feature` nos envía una solicitud de función. La cancelación y el cambio de Pro a Pro+ requieren `confirm: true`.

## ¿Qué necesito?

Una clave de API de noCRM.io. Abre la sección **Admin**, después **Integrations → API**, y genera una clave; solo pueden hacerlo los administradores. También necesitas el nombre de tu cuenta: `acme` para `https://acme.nocrm.io`. noCRM.io permite 2000 peticiones de API al día por cuenta.

Consulta los [pasos de configuración de noCRM.io](/nocrm-io/) para ChatGPT, Claude, Cursor y otros clientes MCP.
