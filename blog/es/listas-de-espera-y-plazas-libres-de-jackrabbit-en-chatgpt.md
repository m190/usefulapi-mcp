---
title: Listas de espera y plazas libres de Jackrabbit en ChatGPT
description: Pregunta a ChatGPT, Claude o Cursor qué clases de Jackrabbit tienen plazas libres y lista de espera, y quién es el siguiente en cada lista.
date: 2026-11-28
products: jackrabbit-class
lang: es
translation: match-jackrabbit-waitlists-to-open-class-spots-in-chatgpt
source: 9b809adec87a9cc3d8824e2fa7c3d60f491dbc212e85d967e891bb877c1034ef
---
Puedes preguntarle a ChatGPT, Claude o Cursor cuáles de tus clases de Jackrabbit tienen plazas libres mientras hay alumnos en la lista de espera. La IA lee tus clases, se queda con las que tienen plazas libres y entradas en la lista de espera, y muestra los alumnos que esperan en el orden de la lista. Después, tú inscribes a los alumnos en Jackrabbit. Añade `https://jackrabbit-class.usefulapi.io/mcp` como servidor MCP y pregunta con tus propias palabras.

## ¿Qué le pregunto para empezar?

> ¿Qué clases de Jackrabbit tienen plazas libres y alumnos en lista de espera? Dime quién espera en cada clase.

También puedes indicar una sede, un día de la semana o una sesión. Si lo pides, la IA también muestra los contactos de la familia de cada alumno que espera.

## ¿Qué hace la IA paso a paso?

1. Lee tus clases con `jackrabbit_list_classes`. Cada clase incluye su horario, sede, aula, sesión, instructores, tamaño, plazas libres, número de alumnos en lista de espera y precio. La IA puede filtrar por sede o por instructor. Una página tiene 10 clases por defecto y como máximo 100. Una llamada lee una página, y la respuesta da el número de la página siguiente, así que la IA debe volver a llamar hasta que no quede ninguna página siguiente.
2. Para encontrar los identificadores de una sede, una sesión o un instructor, lee las listas de opciones con `jackrabbit_list_options`. Para filtrar por día de la semana o por sesión, también puede usar el horario de clases de `jackrabbit_list_class_listings`.
3. Se queda con las clases que tienen plazas libres y al menos un alumno en lista de espera.
4. Para cada una de estas clases, lee la lista de espera con `jackrabbit_list_waitlist_entries`: el alumno, la fecha de entrada, la posición y las notas. Una página tiene 25 entradas por defecto y como máximo 100. La IA lee todas las páginas de cada lista de espera y después ordena las entradas por posición.
5. Si preguntas por choques de horario, lee todas las páginas de las inscripciones de un alumno en espera con `jackrabbit_list_enrollments`: las actuales (solo aquellas en las que está inscrito) y, en una segunda llamada, las futuras. Ninguna herramienta detecta los choques, así que la IA abre esas clases con `jackrabbit_get_class` y compara sus fechas de inicio y fin, sus días y sus horas.
6. Si pides los contactos de la familia, abre el alumno con `jackrabbit_get_student` y lee los contactos de la familia con `jackrabbit_list_contacts`.

Una respuesta muy grande se acorta para no superar el límite de tamaño del resultado, y la respuesta lo indica. En ese caso, la IA debería volver a pedir la misma página con un tamaño de página menor.

Las llamadas de datos de Jackrabbit que tienen éxito cuentan para tu plan. El servidor intenta reembolsar una llamada fallida.

## ¿Puede inscribir alumnos o cambiar mis clases?

No. Ninguna herramienta inscribe a un alumno, da de baja una inscripción, quita una entrada de la lista de espera ni cambia una clase. Tú inscribes en Jackrabbit a los alumnos de la lista de espera. La revisión de arriba usa solo herramientas de lectura.

El servidor tiene dos herramientas que escriben datos de Jackrabbit. `jackrabbit_create_student` añade un alumno a una familia existente, y una segunda llamada añade un segundo alumno. `jackrabbit_create_waitlist_entry` pone a un alumno en la lista de espera de una clase; no lo inscribe. Estas herramientas actúan cuando se llaman; no exigen un paso de vista previa por separado. Si eliges **Read only** (solo lectura) al conectar, el servidor oculta las herramientas de escritura y rechaza las llamadas a ellas. Tu cliente de IA puede pedirte que apruebes cada llamada a una herramienta; esto depende del cliente y de su configuración.

El servidor también tiene herramientas que no tratan datos de Jackrabbit: `jackrabbit_usage_status` muestra tu uso y plan de UsefulAPI, `jackrabbit_upgrade` devuelve un enlace de pago, `jackrabbit_cancel_subscription` cancela al final del periodo actual, y `jackrabbit_request_feature` nos envía una solicitud de función. Estas herramientas siguen disponibles en una conexión Read only. La herramienta de mejora de plan nunca genera un cargo en tu tarjeta: confirmas una compra, o un cambio de Pro a Pro+, en la página de pago de Stripe. La cancelación requiere `confirm: true`.

## ¿Qué necesito?

Un token de la Customer API de Jackrabbit. Activa la Customer API en **Jackrabbit Labs** y después crea un token en **Gear → Settings → General → API Settings** (necesitas el permiso API Settings). La API de Jackrabbit está en beta. Deja vacío el identificador de organización salvo que tengas un token corporativo. Las fichas de los alumnos pueden incluir notas de salud, y los datos que lee la IA llegan a tu cliente de IA.

Consulta los [pasos de configuración de Jackrabbit Class](/jackrabbit-class/) para ChatGPT, Claude, Cursor y otros clientes MCP.
