# Mobile Field Report MCP by usefulapi

Use your [Mobile Field Report](https://www.mobilefieldreport.com) account from Claude, Cursor, or any MCP client. Read service requests, appointments, time events, customers, service objects, offers, invoices and projects in Mobile Field Report, and add comments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://mfr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mfr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mfr https://mfr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mfr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmfr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mfr": {
      "url": "https://mfr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Mobile Field Report credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mfr/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **e-mail address and password** of an MFR user that has the API permission (Read for lists, Edit for comments). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mfr_list_service_requests` | read | List service requests |
| `mfr_get_service_request` | read | Get a service request |
| `mfr_count_service_requests` | read | Count service requests |
| `mfr_list_comments` | read | List comments of a service request |
| `mfr_list_appointments` | read | List appointments |
| `mfr_get_appointment` | read | Get an appointment |
| `mfr_list_time_events` | read | List time events |
| `mfr_list_companies` | read | List companies |
| `mfr_get_company` | read | Get a company |
| `mfr_list_contacts` | read | List contacts |
| `mfr_list_service_objects` | read | List service objects |
| `mfr_get_service_object` | read | Get a service object |
| `mfr_list_offers` | read | List offers |
| `mfr_list_invoices` | read | List invoices |
| `mfr_get_invoice` | read | Get an invoice |
| `mfr_list_products` | read | List products |
| `mfr_list_users` | read | List users |
| `mfr_list_projects` | read | List projects |
| `mfr_create_comment` | **write** | Add a comment to a service request |
| `mfr_usage_status` | meta | Usage status (free-tier meter) |
| `mfr_request_feature` | meta | Request a missing feature |
| `mfr_upgrade` | meta | Upgrade to Pro or Pro+ |
| `mfr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `mfr_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `mfr_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `mfr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
