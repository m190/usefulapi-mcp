# ViralSweep MCP by usefulapi

https://viralsweep.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://viralsweep.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http viralsweep https://viralsweep.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=viralsweep&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fviralsweep.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "viralsweep": {
      "url": "https://viralsweep.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ViralSweep credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/viralsweep/

<!-- connect:end (generated above, edit below) -->

Connect your own ViralSweep credentials through the hosted sign-in page.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `viralsweep_list_brands` | read | List ViralSweep brands |
| `viralsweep_list_promotions` | read | List ViralSweep promotions |
| `viralsweep_list_entries` | read | Read ViralSweep promotion entries |
| `viralsweep_list_winners` | read | Read ViralSweep winners |
| `viralsweep_usage_status` | meta | Usage status (free-tier meter) |
| `viralsweep_request_feature` | meta | Request a missing feature |
| `viralsweep_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `viralsweep_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `viralsweep_upgrade` (it returns a Stripe Checkout link). Cancel any time with `viralsweep_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `viralsweep_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
