# Givecloud MCP by usefulapi

Hosted endpoint: https://givecloud.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://givecloud.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http givecloud https://givecloud.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=givecloud&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgivecloud.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "givecloud": {
      "url": "https://givecloud.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Givecloud credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/givecloud/

<!-- connect:end (generated above, edit below) -->

Connect your existing Givecloud account using the credentials described below.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `givecloud_list_supporters` | read | Search supporters |
| `givecloud_list_contributions` | read | List contributions |
| `givecloud_list_recurring_profiles` | read | List recurring donation profiles |
| `givecloud_list_products` | read | Search fundraising products |
| `givecloud_list_posts` | read | List feed posts |
| `givecloud_get_supporter` | read | Get a supporter |
| `givecloud_get_contribution` | read | Get a contribution |
| `givecloud_get_recurring_profile` | read | Get a recurring profile |
| `givecloud_get_product` | read | Get a fundraising product |
| `givecloud_get_post` | read | Get a feed post |
| `givecloud_usage_status` | meta | Usage status (free-tier meter) |
| `givecloud_request_feature` | meta | Request a missing feature |
| `givecloud_upgrade` | meta | Upgrade to Pro or Pro+ |
| `givecloud_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account/token pair) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per account/token pair) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `givecloud_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `givecloud_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `givecloud_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

Independent integration by usefulapi.
