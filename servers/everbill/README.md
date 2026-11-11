# everbill MCP by usefulapi

Use your [everbill](https://www.everbill.com) account from Claude, Cursor, or any MCP client. It can read and create bills, customers and articles, and send bills by email. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://everbill.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://everbill.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http everbill https://everbill.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=everbill&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Feverbill.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "everbill": {
      "url": "https://everbill.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your everbill credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/everbill/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **everbill API key**, copied from your everbill account. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `everbill_check_connection` | read | Check connection |
| `everbill_list_bills` | read | List bills |
| `everbill_get_bill` | read | Get a bill |
| `everbill_get_bill_pdf` | read | Get a bill PDF |
| `everbill_list_customers` | read | List customers |
| `everbill_get_customer` | read | Get a customer |
| `everbill_search_customers` | read | Search customers |
| `everbill_create_customer` | **write** | Create a customer |
| `everbill_create_bill` | **write** | Create a bill |
| `everbill_send_bill_email` | **write** | Send a bill by email |
| `everbill_list_articles` | read | List articles |
| `everbill_get_article` | read | Get an article |
| `everbill_create_article` | **write** | Create an article |
| `everbill_usage_status` | meta | Usage status (free-tier meter) |
| `everbill_request_feature` | meta | Request a missing feature |
| `everbill_upgrade` | meta | Upgrade to Pro or Pro+ |
| `everbill_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `everbill_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `everbill_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `everbill_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
