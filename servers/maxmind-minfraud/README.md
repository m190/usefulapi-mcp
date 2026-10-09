# MaxMind minFraud MCP by usefulapi

Score transactions for fraud risk with MaxMind minFraud from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your MaxMind account ID + license key.

**Live endpoint:** `https://maxmind-minfraud.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/maxmind-minfraud

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://maxmind-minfraud.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http maxmind-minfraud https://maxmind-minfraud.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=maxmind-minfraud&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmaxmind-minfraud.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "maxmind-minfraud": {
      "url": "https://maxmind-minfraud.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MaxMind minFraud credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/maxmind-minfraud/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your MaxMind account ID and license key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `minfraud_score` | read | minFraud risk score |
| `minfraud_insights` | read | minFraud Insights (detailed risk) |
| `minfraud_factors` | read | minFraud Factors (risk reasons + subscores) |
| `minfraud_report_transaction` | **write** | Report a transaction outcome |
| `maxmind_minfraud_usage_status` | meta | Usage status (free-tier meter) |
| `maxmind_minfraud_request_feature` | meta | Request a missing feature |
| `maxmind_minfraud_upgrade` | meta | Upgrade to Pro (unlimited) |
| `maxmind_minfraud_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `maxmind_minfraud_upgrade` (it returns a Stripe Checkout link). Cancel any time with `maxmind_minfraud_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `maxmind_minfraud_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
