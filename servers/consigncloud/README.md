# ConsignCloud MCP by usefulapi

Use your [ConsignCloud](https://www.consigncloud.com) account from Claude, Cursor, or any MCP client. Read items, sales, consignor accounts and store totals, and add items and item notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://consigncloud.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://consigncloud.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http consigncloud https://consigncloud.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=consigncloud&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fconsigncloud.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "consigncloud": {
      "url": "https://consigncloud.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ConsignCloud credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/consigncloud/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **ConsignCloud store API key** (create it under **Settings → Apps → API & Webhooks**, after you enable the app). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `consigncloud_get_store` | read | Get store |
| `consigncloud_list_items` | read | List items |
| `consigncloud_get_item` | read | Get item |
| `consigncloud_create_item` | **write** | Create item |
| `consigncloud_list_sales` | read | List sales |
| `consigncloud_get_sale` | read | Get sale |
| `consigncloud_get_sales_summary` | read | Get sales summary |
| `consigncloud_list_accounts` | read | List accounts |
| `consigncloud_get_account` | read | Get account |
| `consigncloud_add_item_note` | **write** | Add item note |
| `consigncloud_list_locations` | read | List locations |
| `consigncloud_list_item_categories` | read | List item categories |
| `consigncloud_search` | read | Search store |
| `consigncloud_usage_status` | meta | Usage status (free-tier meter) |
| `consigncloud_request_feature` | meta | Request a missing feature |
| `consigncloud_upgrade` | meta | Upgrade to Pro or Pro+ |
| `consigncloud_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `consigncloud_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `consigncloud_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `consigncloud_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
