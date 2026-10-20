# Gift Up! MCP by usefulapi

Use [Gift Up!](https://www.giftup.com) from Claude, Cursor, or any MCP client — gift cards, orders, items, locations, promotions and transaction reports, read-only.
Hosted, no local install: connect with your own Gift Up! credentials.

**Live endpoint:** `https://gift-up.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/gift-up

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gift-up.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gift-up https://gift-up.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gift-up&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgift-up.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gift-up": {
      "url": "https://gift-up.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Gift Up! credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gift-up/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `giftup_get_company` | read | Get company |
| `giftup_list_gift_cards` | read | List gift cards |
| `giftup_get_gift_card` | read | Get gift card |
| `giftup_list_orders` | read | List orders |
| `giftup_get_order` | read | Get order |
| `giftup_list_items` | read | List items |
| `giftup_get_item` | read | Get item |
| `giftup_list_item_groups` | read | List item groups |
| `giftup_get_item_group` | read | Get item group |
| `giftup_list_locations` | read | List locations |
| `giftup_list_promotions` | read | List promotions |
| `giftup_list_transactions` | read | List report transactions |
| `giftup_get_transaction` | read | Get report transaction |
| `giftup_usage_status` | meta | Usage status (free-tier meter) |
| `giftup_request_feature` | meta | Request a missing feature |
| `giftup_upgrade` | meta | Upgrade to Pro (unlimited) |
| `giftup_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `giftup_upgrade` (it returns a Stripe Checkout link). Cancel any time with `giftup_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `giftup_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Gift Up!.
