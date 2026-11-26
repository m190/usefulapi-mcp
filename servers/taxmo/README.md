# Taxmo MCP by usefulapi

Use your [Taxmo](https://taxmo.nl) account from Claude, Cursor, or any MCP client. Read VAT filings, invoices, contacts and bookkeeping entries, and add time entries and hours. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://taxmo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://taxmo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http taxmo https://taxmo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=taxmo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftaxmo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "taxmo": {
      "url": "https://taxmo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Taxmo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/taxmo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Taxmo API key** (create it under API Access in Taxmo). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `taxmo_get_profile` | read | Get the business profile |
| `taxmo_list_entries` | read | List bookkeeping entries |
| `taxmo_get_vat_filing` | read | Get a VAT filing |
| `taxmo_get_annual_summary` | read | Get an annual summary |
| `taxmo_list_invoices` | read | List invoices |
| `taxmo_get_invoice` | read | Get an invoice |
| `taxmo_get_invoice_by_external_id` | read | Get an invoice by your id |
| `taxmo_list_contacts` | read | List contacts |
| `taxmo_get_contact` | read | Get a contact |
| `taxmo_get_contact_by_external_id` | read | Get a contact by your id |
| `taxmo_list_projects` | read | List projects |
| `taxmo_add_time_entry` | **write** | Add a time entry |
| `taxmo_log_hours` | **write** | Log hours (urencriterium) |
| `taxmo_usage_status` | meta | Usage status (free-tier meter) |
| `taxmo_request_feature` | meta | Request a missing feature |
| `taxmo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `taxmo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `taxmo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `taxmo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `taxmo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
