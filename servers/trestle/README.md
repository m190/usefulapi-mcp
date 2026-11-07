# Trestle MCP by usefulapi

Use your [Trestle](https://trestleiq.com) account from Claude, Cursor, or any MCP client. Validate phone numbers and check US numbers for TCPA litigator risk. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://trestle.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://trestle.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http trestle https://trestle.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=trestle&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftrestle.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "trestle": {
      "url": "https://trestle.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Trestle credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/trestle/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Trestle API key** (copy it from the Trestle portal at portal.trestleiq.com). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `trestle_validate_phone` | read | Validate a phone number |
| `trestle_check_tcpa_litigator` | read | Check a US number for TCPA litigator risk |
| `trestle_usage_status` | meta | Usage status (free-tier meter) |
| `trestle_request_feature` | meta | Request a missing feature |
| `trestle_upgrade` | meta | Upgrade to Pro or Pro+ |
| `trestle_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `trestle_upgrade` (it returns a Stripe Checkout link). Cancel any time with `trestle_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `trestle_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
