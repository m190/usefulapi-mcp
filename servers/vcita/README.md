# vCita MCP by usefulapi

Use your [vCita](https://www.vcita.com) account from Claude, Cursor, or any MCP client. It reads clients, appointments, invoices, payments and estimates, and it creates or updates clients. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://vcita.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://vcita.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http vcita https://vcita.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=vcita&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvcita.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "vcita": {
      "url": "https://vcita.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your vCita credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/vcita/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **vCita business API token** (Settings → Integrations, then the Webhooks tile → Connect). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `vcita_list_clients` | read | List clients |
| `vcita_get_client` | read | Get client |
| `vcita_list_client_invoices` | read | List client invoices |
| `vcita_list_client_payments` | read | List client payments |
| `vcita_create_client` | **write** | Create client |
| `vcita_update_client` | **write** | Update client |
| `vcita_get_invoice` | read | Get invoice |
| `vcita_list_payments` | read | List payments |
| `vcita_get_payment` | read | Get payment |
| `vcita_list_estimates` | read | List estimates |
| `vcita_list_appointments` | read | List appointments |
| `vcita_get_appointment` | read | Get appointment |
| `vcita_usage_status` | meta | Usage status (free-tier meter) |
| `vcita_request_feature` | meta | Request a missing feature |
| `vcita_upgrade` | meta | Upgrade to Pro or Pro+ |
| `vcita_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `vcita_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `vcita_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `vcita_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
