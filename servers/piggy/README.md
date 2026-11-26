# Leat MCP by usefulapi

Use your [Leat](https://www.leat.com) account from Claude, Cursor, or any MCP client. Read loyalty contacts, points, tiers, orders and rewards, and add or reverse points after you confirm. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://piggy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://piggy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http piggy https://piggy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=piggy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpiggy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "piggy": {
      "url": "https://piggy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Leat credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/piggy/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Leat Personal Access Token** (Leat Business Dashboard, Marketplace, Private App). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `piggy_list_contacts` | read | List contacts |
| `piggy_find_contact` | read | Find contact by email |
| `piggy_get_contact` | read | Get contact |
| `piggy_get_contact_identifiers` | read | Get contact identifiers |
| `piggy_get_credit_balance` | read | Get credit balance |
| `piggy_get_prepaid_balance` | read | Get prepaid balance |
| `piggy_get_contact_tier` | read | Get contact tier |
| `piggy_list_loyalty_transactions` | read | List loyalty transactions |
| `piggy_list_orders` | read | List orders |
| `piggy_find_order` | read | Find order by external id |
| `piggy_get_order` | read | Get order |
| `piggy_get_direct_points_transaction` | read | Get direct points transaction |
| `piggy_create_contact` | **write** | Create contact |
| `piggy_add_direct_points` | **write** | Add or subtract points |
| `piggy_reverse_direct_points` | **write** | Reverse points transaction |
| `piggy_usage_status` | meta | Usage status (free-tier meter) |
| `piggy_request_feature` | meta | Request a missing feature |
| `piggy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `piggy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `piggy_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `piggy_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `piggy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
