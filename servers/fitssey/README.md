# Fitssey MCP by usefulapi

Hosted at https://fitssey.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fitssey.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fitssey https://fitssey.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fitssey&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffitssey.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fitssey": {
      "url": "https://fitssey.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Fitssey credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fitssey/

<!-- connect:end (generated above, edit below) -->

Connect a dedicated Fitssey API key and Studio UUID. Read-only tools cover studio schedules, capacity, catalogs and reports. Each report reads one page; customer contact fields and private notes are omitted. API key replacement creates a separate billing identity.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fitssey_list_classes` | read | List classes |
| `fitssey_list_locations` | read | List locations |
| `fitssey_list_staff` | read | List staff |
| `fitssey_list_products` | read | List products |
| `fitssey_get_product` | read | Get product |
| `fitssey_list_pricing_options` | read | List pricing options |
| `fitssey_get_pricing_option` | read | Get pricing option |
| `fitssey_list_contracts` | read | List contracts |
| `fitssey_get_contract` | read | Get contract |
| `fitssey_get_schedule` | read | Get schedule |
| `fitssey_list_courses` | read | List courses |
| `fitssey_get_schedule_event` | read | Get schedule event |
| `fitssey_get_client_visits_report` | read | Get client visits report |
| `fitssey_get_sales_report` | read | Get sales report |
| `fitssey_get_active_passes_report` | read | Get active passes report |
| `fitssey_usage_status` | meta | Usage status (free-tier meter) |
| `fitssey_request_feature` | meta | Request a missing feature |
| `fitssey_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fitssey_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per Studio UUID and API key) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per Studio UUID and API key) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `fitssey_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `fitssey_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `fitssey_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
