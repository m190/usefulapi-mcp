# Auvik MCP by usefulapi

Use your [Auvik](https://www.auvik.com) account from Claude, Cursor, or any MCP client. Read tenants, devices, networks, alerts and statistics, and dismiss alerts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://auvik.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://auvik.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http auvik https://auvik.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=auvik&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fauvik.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "auvik": {
      "url": "https://auvik.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Auvik credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/auvik/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Auvik username** (your login email), an **Auvik API key** (created under your user profile) and your **Auvik region** (for example **us1**, from your web address before .my.auvik.com). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `auvik_list_tenants` | read | List tenants |
| `auvik_list_devices` | read | List devices |
| `auvik_get_device` | read | Get a device |
| `auvik_list_networks` | read | List networks |
| `auvik_get_network` | read | Get a network |
| `auvik_list_interfaces` | read | List interfaces |
| `auvik_list_alerts` | read | List alerts |
| `auvik_get_alert` | read | Get an alert |
| `auvik_dismiss_alert` | **write** | Dismiss an alert |
| `auvik_get_device_statistics` | read | Get device statistics |
| `auvik_get_client_usage` | read | Get client usage |
| `auvik_usage_status` | meta | Usage status (free-tier meter) |
| `auvik_request_feature` | meta | Request a missing feature |
| `auvik_upgrade` | meta | Upgrade to Pro or Pro+ |
| `auvik_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `auvik_upgrade` (it returns a Stripe Checkout link). Cancel any time with `auvik_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `auvik_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
