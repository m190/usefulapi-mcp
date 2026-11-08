# Infoplus MCP by usefulapi

https://infoplus.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://infoplus.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http infoplus https://infoplus.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=infoplus&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finfoplus.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "infoplus": {
      "url": "https://infoplus.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Infoplus credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/infoplus/

<!-- connect:end (generated above, edit below) -->

Connect your own Infoplus credentials through the hosted sign-in page.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `infoplus_search_warehouses` | read | Search Infoplus warehouses |
| `infoplus_get_warehouse` | read | Read an Infoplus warehouse |
| `infoplus_search_items` | read | Search Infoplus items |
| `infoplus_get_item` | read | Read an Infoplus item |
| `infoplus_search_inventory` | read | Search Infoplus inventory |
| `infoplus_get_inventory_detail` | read | Read an Infoplus inventory detail |
| `infoplus_search_orders` | read | Search Infoplus orders |
| `infoplus_get_order` | read | Read an Infoplus order |
| `infoplus_search_asns` | read | Search Infoplus asns |
| `infoplus_get_asn` | read | Read an Infoplus asn |
| `infoplus_usage_status` | meta | Usage status (free-tier meter) |
| `infoplus_request_feature` | meta | Request a missing feature |
| `infoplus_upgrade` | meta | Upgrade to Pro or Pro+ |
| `infoplus_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `infoplus_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `infoplus_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `infoplus_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
