# Eurosender MCP by usefulapi

Use your [Eurosender](https://www.eurosender.com) account from Claude, Cursor, or any MCP client. Get shipping quotes, book and cancel parcel shipments, track them, and download their labels. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://eurosender.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://eurosender.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http eurosender https://eurosender.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=eurosender&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Feurosender.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "eurosender": {
      "url": "https://eurosender.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Eurosender credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/eurosender/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Eurosender API key** and an **environment** (Production or Sandbox). The key comes from a Eurosender Business Account with API access that Eurosender approved. A Production key books live shipments. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `eurosender_list_countries` | read | List countries |
| `eurosender_list_cities` | read | List cities |
| `eurosender_list_regions` | read | List regions |
| `eurosender_get_quote` | read | Get a shipping quote |
| `eurosender_validate_order` | read | Validate an order (no booking) |
| `eurosender_create_order` | **write** | Create an order (books and charges a shipment) |
| `eurosender_cancel_order` | **write** | Cancel an order |
| `eurosender_get_tracking` | read | Get tracking |
| `eurosender_get_order_labels` | read | Get shipping labels |
| `eurosender_usage_status` | meta | Usage status (free-tier meter) |
| `eurosender_request_feature` | meta | Request a missing feature |
| `eurosender_upgrade` | meta | Upgrade to Pro or Pro+ |
| `eurosender_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `eurosender_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `eurosender_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `eurosender_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
