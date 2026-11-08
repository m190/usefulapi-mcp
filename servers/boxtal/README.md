# Boxtal MCP by usefulapi

Use your [Boxtal](https://www.boxtal.com) account from Claude, Cursor, or any MCP client. Find parcel points, read shipping orders, tracking and shipping documents, and create or cancel shipping orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://boxtal.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://boxtal.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http boxtal https://boxtal.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=boxtal&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fboxtal.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "boxtal": {
      "url": "https://boxtal.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Boxtal credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/boxtal/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Boxtal access key** and a **Boxtal secret key** from a v3 API application in your Boxtal developer app (production keys only). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `boxtal_list_content_categories` | read | List content categories |
| `boxtal_find_parcel_points` | read | Find parcel points |
| `boxtal_get_shipping_order` | read | Get a shipping order |
| `boxtal_get_tracking` | read | Get shipment tracking |
| `boxtal_get_shipping_documents` | read | Get shipping documents |
| `boxtal_create_shipping_order` | **write** | Create and order a shipment |
| `boxtal_cancel_shipping_order` | **write** | Cancel a shipping order |
| `boxtal_usage_status` | meta | Usage status (free-tier meter) |
| `boxtal_request_feature` | meta | Request a missing feature |
| `boxtal_upgrade` | meta | Upgrade to Pro or Pro+ |
| `boxtal_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `boxtal_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `boxtal_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `boxtal_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
