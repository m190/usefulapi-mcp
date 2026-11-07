# Spektrix MCP by usefulapi

Use your [Spektrix](https://www.spektrix.com) account from Claude, Cursor, or any MCP client. It reads events, performances, memberships and order changes of one Spektrix system. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://spektrix.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://spektrix.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http spektrix https://spektrix.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spektrix&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fspektrix.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "spektrix": {
      "url": "https://spektrix.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Spektrix credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/spektrix/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Spektrix client name** (the part after system.spektrix.com/ in your system address), an **API login name** and an **API secret key** for an API user. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `spektrix_list_events` | read | List events |
| `spektrix_list_event_instances` | read | List performances of an event |
| `spektrix_list_instances` | read | List performances |
| `spektrix_list_memberships` | read | List memberships |
| `spektrix_list_order_changes` | read | List order changes |
| `spektrix_usage_status` | meta | Usage status (free-tier meter) |
| `spektrix_request_feature` | meta | Request a missing feature |
| `spektrix_upgrade` | meta | Upgrade to Pro or Pro+ |
| `spektrix_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `spektrix_upgrade` (it returns a Stripe Checkout link). Cancel any time with `spektrix_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `spektrix_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
