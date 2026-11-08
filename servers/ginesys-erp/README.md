# Ginesys MCP by usefulapi

Use your [Ginesys](https://www.ginesys.in) account from Claude, Cursor, or any MCP client. Look up items, create sales orders, and reserve or cancel stock on sales orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ginesys-erp.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ginesys-erp.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ginesys-erp https://ginesys-erp.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ginesys-erp&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fginesys-erp.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ginesys-erp": {
      "url": "https://ginesys-erp.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Ginesys credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ginesys-erp/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Ginesys API address** (your tenant, for example https://erp.yourcompany.com) and your **Ginesys API key** (Admin → Security → API User → Add → Generate Key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ginesys_get_item` | read | Get item |
| `ginesys_create_sales_order` | **write** | Create sales order |
| `ginesys_create_reservation` | **write** | Reserve order stock |
| `ginesys_cancel_reservation` | **write** | Cancel order reservation |
| `ginesys_usage_status` | meta | Usage status (free-tier meter) |
| `ginesys_request_feature` | meta | Request a missing feature |
| `ginesys_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ginesys_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ginesys_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ginesys_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ginesys_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
