# Qapla' MCP by usefulapi

Use your [Qapla'](https://www.qapla.com) account from Claude, Cursor, or any MCP client. Read shipments, orders, tracking changes, couriers and channel status, and import shipments by tracking number. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://qapla.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://qapla.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http qapla https://qapla.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=qapla&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fqapla.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "qapla": {
      "url": "https://qapla.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Qapla' credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/qapla/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Qapla' private API key** (Control Panel → Settings → Channels → your channel → Configure → Private API Key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `qapla_get_channel` | read | Get the channel |
| `qapla_check_channel` | read | Check channel connections |
| `qapla_get_credits` | read | Get remaining credits |
| `qapla_get_shipment` | read | Get a shipment |
| `qapla_list_shipments` | read | List shipments |
| `qapla_list_company_shipments` | read | List company shipments |
| `qapla_tracking_changes` | read | List tracking changes |
| `qapla_list_status_codes` | read | List shipment status codes |
| `qapla_get_order` | read | Get an order |
| `qapla_list_orders` | read | List orders |
| `qapla_check_label` | read | Check a label |
| `qapla_get_couriers` | read | List couriers |
| `qapla_detect_courier` | read | Detect a courier |
| `qapla_push_shipments` | **write** | Push shipments |
| `qapla_usage_status` | meta | Usage status (free-tier meter) |
| `qapla_request_feature` | meta | Request a missing feature |
| `qapla_upgrade` | meta | Upgrade to Pro or Pro+ |
| `qapla_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `qapla_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `qapla_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `qapla_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
