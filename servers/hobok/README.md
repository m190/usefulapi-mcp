# Hobok MCP by usefulapi

Use your [Hobok](https://hobok.se) account from Claude, Cursor, or any MCP client. It reads invoices, customers and products, and it issues invoices, records payments and queues receipt emails. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://hobok.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hobok.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hobok https://hobok.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hobok&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhobok.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hobok": {
      "url": "https://hobok.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Hobok credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hobok/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Hobok API key** (it starts with `hbk_`), created in Hobok under **Inställningar → API**. Hobok shows the key only once, and the API needs the Plus plan. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hobok_get_me` | read | Get the connected hobby business |
| `hobok_list_payment_methods` | read | List payment methods |
| `hobok_list_invoices` | read | List invoices |
| `hobok_get_invoice` | read | Get an invoice |
| `hobok_create_invoice` | **write** | Issue an invoice |
| `hobok_mark_invoice_paid` | **write** | Mark an invoice paid |
| `hobok_email_receipt` | **write** | Email a receipt |
| `hobok_list_clients` | read | List customers |
| `hobok_create_client` | **write** | Add a customer |
| `hobok_list_products` | read | List products |
| `hobok_create_product` | **write** | Add a product |
| `hobok_usage_status` | meta | Usage status (free-tier meter) |
| `hobok_request_feature` | meta | Request a missing feature |
| `hobok_upgrade` | meta | Upgrade to Pro or Pro+ |
| `hobok_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `hobok_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `hobok_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `hobok_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
