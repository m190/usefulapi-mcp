# Solo MCP by usefulapi

Use your [Solo](https://solo.com.hr) account from Claude, Cursor, or any MCP client. Read invoices, offers, payment status and the product catalog. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://solo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://solo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http solo https://solo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=solo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsolo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "solo": {
      "url": "https://solo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Solo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/solo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Solo API token** (Solo → Postavke / Settings → API token). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `solo_list_invoices` | read | List invoices |
| `solo_get_invoice` | read | Get invoice |
| `solo_get_invoice_status` | read | Get invoice status |
| `solo_list_offers` | read | List offers |
| `solo_get_offer` | read | Get offer |
| `solo_get_offer_status` | read | Get offer status |
| `solo_list_catalog` | read | List catalog |
| `solo_usage_status` | meta | Usage status (free-tier meter) |
| `solo_request_feature` | meta | Request a missing feature |
| `solo_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `solo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `solo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `solo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `solo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
