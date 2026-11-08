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
| `cliniko_get_account` | read | Get account details |
| `cliniko_list_patients` | read | List patients |
| `cliniko_get_patient` | read | Get a patient |
| `cliniko_list_appointments` | read | List appointments |
| `cliniko_get_appointment` | read | Get an appointment |
| `cliniko_list_practitioners` | read | List practitioners |
| `cliniko_list_businesses` | read | List businesses |
| `cliniko_list_appointment_types` | read | List appointment types |
| `cliniko_list_products` | read | List products |
| `cliniko_list_invoices` | read | List invoices |
| `cliniko_get_invoice` | read | Get an invoice |
| `cliniko_list_treatment_notes` | read | List treatment notes |
| `cliniko_get_treatment_note` | read | Get a treatment note |
| `cliniko_list_available_times` | read | List available times |
| `cliniko_next_available_time` | read | Next available time |
| `cliniko_create_patient` | **write** | Create a patient |
| `cliniko_create_appointment` | **write** | Create an appointment |
| `cliniko_list_unavailable_block_types` | read | List unavailable block types |
| `cliniko_list_unavailable_blocks` | read | List unavailable blocks |
| `cliniko_create_unavailable_block` | **write** | Create an unavailable block |
| `cliniko_archive_unavailable_block` | **write** | Archive an unavailable block |
| `cliniko_usage_status` | meta | Usage status (free-tier meter) |
| `cliniko_request_feature` | meta | Request a missing feature |
| `cliniko_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cliniko_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `cliniko_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `cliniko_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `cliniko_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
