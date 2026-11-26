# Kolleno MCP by usefulapi

Use your [Kolleno](https://www.kolleno.com) account from Claude, Cursor, or any MCP client. Read companies, customers, invoices, credit notes, payments, matches and chasing emails, and make a few safe updates. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://kolleno.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kolleno.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kolleno https://kolleno.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kolleno&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkolleno.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kolleno": {
      "url": "https://kolleno.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Kolleno credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kolleno/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Kolleno Client ID** and **Client Secret** (Personal settings → API keys; the secret is shown once, in the link Kolleno emails you). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kolleno_list_companies` | read | List companies |
| `kolleno_get_company` | read | Get a company |
| `kolleno_list_customers` | read | List customers |
| `kolleno_get_customer` | read | Get a customer |
| `kolleno_get_customer_portal_url` | read | Get customer portal link |
| `kolleno_list_invoices` | read | List invoices |
| `kolleno_get_invoice` | read | Get an invoice |
| `kolleno_list_credit_notes` | read | List credit notes |
| `kolleno_get_credit_note` | read | Get a credit note |
| `kolleno_list_transactions` | read | List transactions |
| `kolleno_list_matches` | read | List payment matches |
| `kolleno_get_match` | read | Get a payment match |
| `kolleno_list_customer_persons` | read | List contacts of a customer |
| `kolleno_list_emails_sent` | read | List chasing emails sent |
| `kolleno_list_tags` | read | List tags |
| `kolleno_list_workflows` | read | List chasing workflows |
| `kolleno_create_customer` | **write** | Create a customer |
| `kolleno_update_customer` | **write** | Update a customer |
| `kolleno_update_customer_custom_fields` | **write** | Update customer custom fields |
| `kolleno_update_invoice` | **write** | Update an invoice |
| `kolleno_usage_status` | meta | Usage status (free-tier meter) |
| `kolleno_request_feature` | meta | Request a missing feature |
| `kolleno_upgrade` | meta | Upgrade to Pro or Pro+ |
| `kolleno_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `kolleno_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `kolleno_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `kolleno_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
