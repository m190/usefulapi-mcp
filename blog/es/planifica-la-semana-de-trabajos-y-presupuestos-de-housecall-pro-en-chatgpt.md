---
title: Trabajos y presupuestos de la semana de Housecall Pro en ChatGPT
description: Pide a ChatGPT, Claude o Cursor los trabajos y visitas de presupuesto de Housecall Pro de esta semana, quién va a cada uno y qué trabajos siguen sin programar.
date: 2026-11-29
products: housecall-pro
lang: es
translation: plan-the-week-housecall-pro-jobs-and-estimates-in-chatgpt
source: ff12951f4a29e525e3e5b8dc604180d6e30be575c22815fd5a54855a779a66aa
---
Puedes pedirle a ChatGPT, Claude o Cursor un resumen de tu semana en Housecall Pro. La IA lee los trabajos y las visitas de presupuesto programados para esta semana, los agrupa por día y por empleado, y muestra los trabajos que todavía están sin programar. Añade `https://housecall-pro.usefulapi.io/mcp` como servidor MCP y pregunta con tus propias palabras.

## ¿Qué le pregunto para empezar?

> Muéstrame mis trabajos y presupuestos de Housecall Pro de esta semana por día e indica quién está asignado a cada uno. ¿Qué trabajos están sin programar?

También puedes pedir solo los de un empleado, los de la semana que viene, o las facturas sin pagar de los trabajos terminados.

## ¿Qué hace la IA paso a paso?

1. Lee los datos de tu empresa con `housecall_get_company`, para que "esta semana" use la zona horaria de tu empresa.
2. Lee los trabajos con `housecall_list_jobs`, filtrados por la hora de inicio programada dentro de la semana. Cada trabajo incluye su cliente, dirección, horario, empleados asignados, notas y totales. También puede filtrar por estado del trabajo (sin programar, programado, en curso, completado o cancelado) y por empleado. Una llamada lee una página, y la respuesta da el número total de páginas, así que la IA debe volver a llamar para leer la página siguiente.
3. Lee los trabajos que todavía no tienen un horario programado con `housecall_list_jobs` y el estado sin programar.
4. Lee las visitas de presupuesto de la semana con `housecall_list_estimates`, con los mismos filtros. Para ver las opciones de un presupuesto y el estado de aprobación de cada opción, lo abre con `housecall_get_estimate`.
5. Lee tus empleados con `housecall_list_employees`, para poder mostrar sus nombres y filtrar por un empleado.
6. Agrupa los trabajos y los presupuestos por día y por empleado, y muestra aparte los trabajos sin programar. Para abrir un trabajo, usa `housecall_get_job`.
7. Si pides las facturas sin pagar de los trabajos terminados, lista los trabajos completados con `housecall_list_jobs` y lee las facturas de cada trabajo con `housecall_list_job_invoices`. Se queda con las facturas que no están pagadas. Para todas las facturas abiertas de la empresa, `housecall_list_invoices` filtra por estado (por ejemplo, abierta o pendiente de pago) y por fecha. Housecall Pro da los importes en centavos, así que la IA los divide entre 100.

Una respuesta muy grande se acorta para no superar el límite de tamaño del resultado, y la respuesta lo indica. En ese caso, la IA debería volver a pedir la misma página con un tamaño de página menor.

Las llamadas de datos de Housecall Pro que tienen éxito cuentan para tu plan. El servidor intenta reembolsar una llamada fallida.

## ¿Puede cambiar mi agenda sin mi aprobación?

El resumen de arriba usa solo herramientas de lectura. Ninguna herramienta elimina un registro, registra un pago, cambia una factura, ni aprueba o rechaza un presupuesto.

El servidor tiene herramientas que escriben datos de Housecall Pro. `housecall_create_customer`, `housecall_update_customer` y `housecall_create_customer_address` crean o cambian clientes. `housecall_create_job`, `housecall_create_estimate` y `housecall_create_lead` crean registros nuevos. `housecall_add_job_note` añade una nota a un trabajo. `housecall_update_job_schedule` cambia la hora de un trabajo y puede avisar al cliente. `housecall_dispatch_job` reemplaza la lista de empleados asignados a un trabajo. Estas herramientas actúan cuando se llaman; no exigen un paso de vista previa por separado. Si eliges **Read only** (solo lectura) al conectar, el servidor oculta las herramientas de escritura y rechaza las llamadas a ellas. Tu cliente de IA puede pedirte que apruebes cada llamada a una herramienta; esto depende del cliente y de su configuración.

Las herramientas de tu cuenta de UsefulAPI son independientes. `housecall_usage_status` muestra tu uso y tu plan. `housecall_upgrade` da opciones de plan o un enlace de pago; el cambio de Pro a Pro+ requiere confirmación. `housecall_cancel_subscription` también requiere confirmación y termina la suscripción al final del periodo actual. `housecall_request_feature` nos envía una solicitud de función. Estas herramientas no cambian datos de Housecall Pro.

## ¿Qué necesito?

Una clave de API de empresa de Housecall Pro. Un administrador de la cuenta la crea en **My Apps → All Apps → API Key Management → Generate API Key**. El acceso a la API requiere el plan MAX de Housecall Pro. Escribe un identificador de empresa solo si tienes varias sedes y quieres usar una de ellas.

Consulta los [pasos de configuración de Housecall Pro](/housecall-pro/) para ChatGPT, Claude, Cursor y otros clientes MCP.
