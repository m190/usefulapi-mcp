# e-conomic MCP by usefulapi

**Status: not available yet.** This connector waits for app approval by e-conomic. This page explains what it will do, how you connect it and how you disconnect it. Questions: [support@usefulapi.io](mailto:support@usefulapi.io).

## What it does

The connector links your e-conomic agreement to your own AI assistant, for example Claude or ChatGPT. You ask questions about your books in plain language, and the assistant reads the answers from e-conomic.

- Read: customers, suppliers, products, accounts, accounting years, journals, and draft, booked, unpaid and overdue invoices.
- Write, only when you ask in the chat: create a customer, a product or a draft invoice. Clients such as Claude ask you before each write.
- It never books an invoice, never sends an invoice and never posts entries. Every booking stays in e-conomic.

## Who it is for

Companies that already use e-conomic and an AI assistant that supports remote MCP servers.

## How to connect

- Add the UsefulAPI app to your e-conomic agreement with the install link. The link appears on this page when e-conomic approves the app.
- e-conomic then shows an agreement grant token. Copy it.
- In your AI client, add the connector URL `https://visma-e-conomic.usefulapi.io/mcp`.
- The client opens a usefulapi sign-in page. Paste the grant token there.

## How to disconnect

- Remove the connector in your AI client. The client then stops all calls.
- To end the access completely, remove the UsefulAPI app in e-conomic: All settings, then Extensions, then Apps, then Revoke access. The grant token stops working at once.
- To connect again, add the app again in e-conomic and paste the new grant token.

## Your data

- usefulapi reads e-conomic data only when your assistant calls a tool, and passes the result to your assistant.
- usefulapi does not store your e-conomic data and does not use it to train models. We keep only the encrypted grant token, usage counts and short-lived technical records.
- Your AI provider keeps the chat under your own account and its settings.

See the [Privacy Policy](/privacy/) and the [Terms of Service](/terms/).
