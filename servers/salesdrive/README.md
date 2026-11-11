# SalesDrive MCP by usefulapi

Use your [SalesDrive](https://salesdrive.ua) account from Claude, Cursor, or any MCP client. Read and update orders, add order notes, and look up order statuses and managers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://salesdrive.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://salesdrive.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http salesdrive https://salesdrive.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=salesdrive&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsalesdrive.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "salesdrive": {
      "url": "https://salesdrive.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SalesDrive credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/salesdrive/

<!-- connect:end (generated above, edit below) -->

On first connect you provide **your SalesDrive subdomain** (the `mycompany` in `mycompany.salesdrive.me`) and **an API key**, which you create in SalesDrive under Установки → Загальні налаштування і інтеграції → Інші сервіси → API → API-ключі. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `salesdrive_list_orders` | read | List orders |
| `salesdrive_get_order` | read | Get an order |
| `salesdrive_list_statuses` | read | List order statuses |
| `salesdrive_list_payment_methods` | read | List payment methods |
| `salesdrive_list_delivery_methods` | read | List delivery methods |
| `salesdrive_find_contact_by_phone` | read | Find a contact by phone |
| `salesdrive_update_order` | **write** | Update an order |
| `salesdrive_add_order_note` | **write** | Add a note to an order |
| `salesdrive_usage_status` | meta | Usage status (free-tier meter) |
| `salesdrive_request_feature` | meta | Request a missing feature |
| `salesdrive_upgrade` | meta | Upgrade to Pro or Pro+ |
| `salesdrive_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `salesdrive_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `salesdrive_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `salesdrive_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
