# Evobulut MCP by usefulapi

Use your [Evobulut](https://evobulut.com) account from Claude, Cursor, or any MCP client. Read customers, stock, invoices, quotes, orders and leads, and create company cards and tasks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://evobulut.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://evobulut.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http evobulut https://evobulut.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=evobulut&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fevobulut.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "evobulut": {
      "url": "https://evobulut.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Evobulut credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/evobulut/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Evobulut user code** and **Evobulut password** of a dedicated Evobulut user. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `evobulut_list_customers` | read | List customers |
| `evobulut_get_customer` | read | Get a customer |
| `evobulut_create_customer` | **write** | Create a company card |
| `evobulut_list_stock` | read | List stock items |
| `evobulut_get_stock` | read | Get a stock item |
| `evobulut_get_stock_by_warehouse` | read | Get stock by warehouse |
| `evobulut_list_invoices` | read | List invoices |
| `evobulut_get_invoice` | read | Get an invoice |
| `evobulut_list_invoice_payments` | read | List invoice payments |
| `evobulut_list_quotes` | read | List quotes |
| `evobulut_get_quote` | read | Get a quote |
| `evobulut_list_orders` | read | List orders |
| `evobulut_list_tasks` | read | List tasks |
| `evobulut_create_task` | **write** | Create a task |
| `evobulut_list_leads` | read | List leads |
| `evobulut_usage_status` | meta | Usage status (free-tier meter) |
| `evobulut_request_feature` | meta | Request a missing feature |
| `evobulut_upgrade` | meta | Upgrade to Pro or Pro+ |
| `evobulut_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `evobulut_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `evobulut_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `evobulut_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
