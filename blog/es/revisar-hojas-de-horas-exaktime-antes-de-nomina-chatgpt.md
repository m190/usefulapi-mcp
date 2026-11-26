---
title: Revisa las hojas de horas de ExakTime antes de la nómina en ChatGPT
description: Pide a ChatGPT o Claude que revise ExakTime (Arcoro Time): horas y horas extra por empleado, marcaciones sin procesar e infracciones de pausa para comer.
date: 2026-11-19
products: exaktime
lang: es
translation: exaktime-timecards-before-payroll-in-chatgpt
source: 27c43b298aad24193fc0b1cfb4ddb4e146030f4500924a97cd984e6b40bff756
---
Puedes pedir a ChatGPT o Claude que revise las hojas de horas de una semana de pago en ExakTime (Arcoro Time) antes de procesar la nómina. La IA lee los registros de tiempo de cada empleado, suma las horas regulares y las horas extra, compara un registro con las marcaciones sin procesar del reloj cuando se lo pides y lista las infracciones de pausa para comer. Añade `https://exaktime.usefulapi.io/mcp` como conector y describe lo que necesitas.

## ¿Qué le pregunto para empezar?

> Revisa las hojas de horas de ExakTime de la semana pasada antes de procesar la nómina: horas regulares y extra por empleado e infracciones de pausa para comer.

También puedes preguntar por un empleado, una ubicación o un código de costo, o preguntar quién no ha firmado el periodo de pago.

## ¿Qué hace la IA paso a paso?

1. Lista los empleados con `exaktime_list_employees`, para relacionar los nombres con los identificadores de persona. Una página tiene 50 empleados por defecto y como máximo 100. Si hay más empleados, la IA debe hacer otra llamada para la página siguiente.
2. Lee las entradas de las hojas de horas con `exaktime_list_time_records`. La IA puede filtrar por rango de fechas de trabajo, por empleado, por ubicación y por identificador de código de costo. Cada registro muestra la fecha de trabajo, la hora de inicio y de fin, el código de costo, la ubicación y las horas regulares, extra y totales. Una llamada devuelve hasta 100 registros por defecto y como máximo 1.000. Si hay más registros que coinciden, la IA debe hacer otra llamada con el siguiente valor de salto (skip).
3. Si un registro parece incorrecto, lee las marcaciones sin procesar del reloj con `exaktime_list_time_punches`. Una marcación muestra la hora, el tipo de dispositivo, la ubicación y la diferencia con la hora de la red. Este filtro usa días UTC, así que la IA puede incluir un día más a cada lado de la semana.
4. Lista las infracciones de pausa para comer de la semana con `exaktime_list_meal_break_violations`. Cada infracción muestra el tipo, la fecha y el valor esperado y el real, y está vinculada a un registro de tiempo.
5. Si preguntas por las firmas, busca el periodo de pago con `exaktime_list_pay_periods` y lista las aprobaciones con `exaktime_list_pay_period_approvals`. La IA compara las aprobaciones con la lista de empleados para encontrar quién no ha firmado.
6. Si pides más detalle, lee los datos de empleo de una persona con `exaktime_get_employee`, o los trabajos y los códigos de costo con `exaktime_list_jobs` y `exaktime_list_cost_codes`.

Los registros de tiempo, las marcaciones, las infracciones, los periodos de pago y las aprobaciones vienen del almacén de datos de Arcoro. Arcoro lo actualiza cada noche, así que las entradas de hoy pueden faltar hasta mañana. Las llamadas de datos de ExakTime que tienen éxito cuentan para tu plan. El servidor intenta reembolsar una llamada fallida.

## ¿Puede cambiar una hoja de horas?

No. Ninguna herramienta de este servidor crea, cambia ni elimina un registro de tiempo, una marcación ni una aprobación. Ninguna herramienta elimina ningún registro. La herramienta `exaktime_query_odata` hace consultas de solo lectura sobre otros datos del almacén.

El servidor tiene seis herramientas que escriben datos de ExakTime: `exaktime_create_job`, `exaktime_update_job`, `exaktime_create_cost_code`, `exaktime_update_cost_code`, `exaktime_create_location` y `exaktime_update_location`. Actúan cuando se llaman; no exigen un paso de vista previa por separado. La revisión de arriba usa solo herramientas de lectura. Si eliges **Read only** (solo lectura) al conectar, el servidor oculta las herramientas de escritura y rechaza las llamadas a ellas. Una clave de API de Arcoro de solo lectura también bloquea las escrituras en Arcoro. Tu cliente de IA puede pedirte que apruebes cada llamada a una herramienta; esto depende del cliente y de su configuración.

El servidor también tiene herramientas que no tratan datos de ExakTime: `exaktime_usage_status` muestra tu uso y plan de UsefulAPI, `exaktime_upgrade` devuelve un enlace de pago o anula una cancelación programada, `exaktime_cancel_subscription` cancela al final del periodo actual, y `exaktime_request_feature` nos envía una solicitud de función. Estas herramientas siguen disponibles en una conexión Read only. La herramienta de mejora de plan nunca genera un cargo en tu tarjeta: confirmas una compra, o un cambio de Pro a Pro+, en la página de pago de Stripe. La cancelación requiere `confirm: true`.

## ¿Qué necesito?

Una clave de API de Arcoro. La creas en el **Arcoro API Portal** (my.arcoro.com/api/portal); si no ves el portal, pide acceso al soporte de Arcoro. Una clave de solo lectura basta para esta revisión. Las herramientas de hojas de horas leen los datos OData de Arcoro, así que la clave necesita acceso a OData.

Consulta los [pasos de configuración de ExakTime](/exaktime/) para Claude, ChatGPT, Cursor y otros clientes MCP.
