# Zulu MCP by usefulapi

Use your [Zulu](https://zulu.ie) account from Claude, Cursor, or any MCP client. It reads invoices, payments, customers and plan usage. It creates customers, draft invoices and payments. It does not issue or e-mail invoices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://zulu.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zulu.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zulu https://zulu.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zulu&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzulu.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zulu": {
      "url": "https://zulu.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zulu credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zulu/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Zulu API key** (Settings → API keys; needs the Scale plan) and your **Business ID** (it starts with `business_`). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zulu_get_business` | read | Get the business |
| `zulu_get_plan` | read | Get the plan and usage |
| `zulu_list_invoices` | read | List invoices |
| `zulu_get_invoice` | read | Get an invoice |
| `zulu_get_invoice_summary` | read | Get the invoice summary |
| `zulu_next_invoice_number` | read | Suggest the next invoice number |
| `zulu_list_invoice_payments` | read | List payments received |
| `zulu_list_invoice_sends` | read | List invoice e-mails |
| `zulu_list_customers` | read | List customers |
| `zulu_create_customer` | **write** | Create a customer |
| `zulu_update_customer` | **write** | Update a customer |
| `zulu_create_invoice_draft` | **write** | Create a draft invoice |
| `zulu_record_invoice_payment` | **write** | Record a payment |
| `zulu_usage_status` | meta | Usage status (free-tier meter) |
| `zulu_request_feature` | meta | Request a missing feature |
| `zulu_upgrade` | meta | Upgrade to Pro or Pro+ |
| `zulu_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `zulu_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `zulu_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `zulu_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
