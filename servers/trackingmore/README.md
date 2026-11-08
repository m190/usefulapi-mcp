# TrackingMore MCP by usefulapi

Use [TrackingMore](https://www.trackingmore.com) from Claude, Cursor, or any MCP client — courier detection, tracking creation and the delivery status of your shipments.
Hosted, no local install: connect with your own TrackingMore credentials.

**Live endpoint:** `https://trackingmore.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/trackingmore

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://trackingmore.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http trackingmore https://trackingmore.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=trackingmore&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftrackingmore.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "trackingmore": {
      "url": "https://trackingmore.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TrackingMore credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/trackingmore/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `trackingmore_list_couriers` | read | List supported couriers |
| `trackingmore_detect_courier` | read | Detect courier from a tracking number |
| `trackingmore_list_trackings` | read | List trackings |
| `trackingmore_get_tracking` | read | Get a shipment's tracking |
| `trackingmore_create_tracking` | **write** | Register a shipment for tracking |
| `trackingmore_update_tracking` | **write** | Update a tracking's details |
| `trackingmore_delete_tracking` | **write** | Delete a tracking |
| `trackingmore_usage_status` | meta | Usage status (free-tier meter) |
| `trackingmore_request_feature` | meta | Request a missing feature |
| `trackingmore_upgrade` | meta | Upgrade to Pro or Pro+ |
| `trackingmore_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `trackingmore_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `trackingmore_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `trackingmore_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by TrackingMore.
