# Cliniko MCP by usefulapi

Manage your Cliniko practice — patients, appointments, availability, invoices and treatment notes — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Cliniko API key.

**Live endpoint:** `https://cliniko.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/cliniko

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cliniko.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cliniko https://cliniko.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cliniko&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcliniko.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cliniko": {
      "url": "https://cliniko.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Cliniko credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cliniko/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Cliniko API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cliniko_get_account` | read | Get account |
| `cliniko_list_patients` | read | List patients |
| `cliniko_get_patient` | read | Get patient |
| `cliniko_list_appointments` | read | List appointments |
| `cliniko_get_appointment` | read | Get appointment |
| `cliniko_list_practitioners` | read | List practitioners |
| `cliniko_list_businesses` | read | List businesses |
| `cliniko_list_appointment_types` | read | List appointment types |
| `cliniko_list_products` | read | List products |
| `cliniko_list_invoices` | read | List invoices |
| `cliniko_get_invoice` | read | Get invoice |
| `cliniko_list_treatment_notes` | read | List treatment notes |
| `cliniko_get_treatment_note` | read | Get treatment note |
| `cliniko_list_available_times` | read | List available times |
| `cliniko_next_available_time` | read | Next available time |
| `cliniko_create_patient` | **write** | Create patient |
| `cliniko_create_appointment` | **write** | Create appointment |
| `cliniko_usage_status` | meta | Usage status (free-tier meter) |
| `cliniko_upgrade` | meta | Upgrade to Pro (unlimited) |
| `cliniko_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `cliniko_upgrade` (it returns a Stripe Checkout link). Cancel any time with `cliniko_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `cliniko_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
