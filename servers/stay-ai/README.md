# Stay AI MCP by usefulapi

Use your [Stay AI](https://stay.ai) account from Claude, Cursor, or any MCP client. Read subscriptions, customers, orders, billing attempts and selling plans, and end subscriptions or skip a delivery. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://stay-ai.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://stay-ai.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http stay-ai https://stay-ai.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=stay-ai&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstay-ai.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "stay-ai": {
      "url": "https://stay-ai.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Stay AI credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/stay-ai/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Stay API key** (Stay → Settings → API Keys, with the scopes you need, for example Read Subscriptions). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `stayai_list_subscriptions` | read | List subscriptions |
| `stayai_get_subscription` | read | Get a subscription |
| `stayai_list_customers` | read | List customers |
| `stayai_list_orders` | read | List subscription orders |
| `stayai_list_billing_attempts` | read | List billing attempts |
| `stayai_list_catalog` | read | List catalog products |
| `stayai_get_catalog_product` | read | Get a catalog product |
| `stayai_list_selling_plan_groups` | read | List selling plan groups |
| `stayai_get_selling_plan_group` | read | Get a selling plan group |
| `stayai_end_subscription` | **write** | End a Stay subscription |
| `stayai_skip_line` | **write** | Skip a subscription line |
| `stayai_usage_status` | meta | Usage status (free-tier meter) |
| `stayai_request_feature` | meta | Request a missing feature |
| `stayai_upgrade` | meta | Upgrade to Pro or Pro+ |
| `stayai_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `stayai_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `stayai_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `stayai_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
