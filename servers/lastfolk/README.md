# LastFolk MCP by usefulapi

Use your [LastFolk](https://lastfolk.com) account from Claude, Cursor, or any MCP client. Price, dispatch, track and cancel same-day courier deliveries. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://lastfolk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://lastfolk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http lastfolk https://lastfolk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=lastfolk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flastfolk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "lastfolk": {
      "url": "https://lastfolk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your LastFolk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/lastfolk/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **LastFolk API key** (created in your LastFolk dashboard and shown once; it starts with `lf_test_` or `lf_live_`). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lastfolk_whoami` | read | Check API key identity |
| `lastfolk_check_environment` | read | Check key and courier account environment |
| `lastfolk_create_quote` | read | Price a delivery quote |
| `lastfolk_list_deliveries` | read | List deliveries |
| `lastfolk_get_delivery` | read | Get delivery details |
| `lastfolk_create_delivery` | **write** | Dispatch a delivery (creates a courier job) |
| `lastfolk_cancel_delivery` | **write** | Cancel a delivery |
| `lastfolk_get_billing_profile` | read | Get billing profile |
| `lastfolk_update_billing_profile` | **write** | Update billing profile |
| `lastfolk_usage_status` | meta | Usage status (free-tier meter) |
| `lastfolk_request_feature` | meta | Request a missing feature |
| `lastfolk_upgrade` | meta | Upgrade to Pro or Pro+ |
| `lastfolk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `lastfolk_upgrade` (it returns a Stripe Checkout link). Cancel any time with `lastfolk_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `lastfolk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
