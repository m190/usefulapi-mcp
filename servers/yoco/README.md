# Yoco MCP by usefulapi

Use your [Yoco](https://www.yoco.com) account from Claude, Cursor, or any MCP client. Read payments, orders, refunds and payouts, and create or delete payment links. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://yoco.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://yoco.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http yoco https://yoco.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=yoco&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fyoco.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "yoco": {
      "url": "https://yoco.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Yoco credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/yoco/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Yoco personal API key** (create a personal application in the Yoco Developer Console at developer.yoco.com/ui, grant the business read scopes you need, and copy its key; Yoco shows the key once; add business/orders:write only to create or delete payment links). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `yoco_list_payments` | read | List payments |
| `yoco_get_payment` | read | Get a payment |
| `yoco_list_orders` | read | List orders |
| `yoco_get_order` | read | Get an order |
| `yoco_list_refunds` | read | List refunds |
| `yoco_get_refund` | read | Get a refund |
| `yoco_list_payouts` | read | List payouts |
| `yoco_get_payout` | read | Get a payout |
| `yoco_list_payout_entries` | read | List payout entries |
| `yoco_list_payment_links` | read | List payment links |
| `yoco_get_payment_link` | read | Get a payment link |
| `yoco_create_payment_link` | **write** | Create a payment link |
| `yoco_delete_payment_link` | **write** | Delete a payment link |
| `yoco_list_items` | read | List catalogue items |
| `yoco_get_item` | read | Get a catalogue item |
| `yoco_list_locations` | read | List locations |
| `yoco_get_location` | read | Get a location |
| `yoco_usage_status` | meta | Usage status (free-tier meter) |
| `yoco_request_feature` | meta | Request a missing feature |
| `yoco_upgrade` | meta | Upgrade to Pro or Pro+ |
| `yoco_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `yoco_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `yoco_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `yoco_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
