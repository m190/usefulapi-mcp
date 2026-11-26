# Vero MCP by usefulapi

Use your [Vero](https://www.getvero.com) account from Claude, Cursor, or any MCP client. It creates and updates customer profiles, tracks events, edits customer tags and unsubscribes customers from email. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://vero.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://vero.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http vero https://vero.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=vero&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvero.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "vero": {
      "url": "https://vero.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Vero credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/vero/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Vero Track API key** (Settings → Track API Keys in Vero 1.0, or Settings → Project → API Keys → Tracking Keys in Vero 2.0). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `vero_identify_user` | **write** | Create or update a Vero user |
| `vero_track_event` | **write** | Track a Vero event |
| `vero_unsubscribe_user` | **write** | Unsubscribe a Vero user |
| `vero_edit_user_tags` | **write** | Add or remove Vero tags |
| `vero_usage_status` | meta | Usage status (free-tier meter) |
| `vero_request_feature` | meta | Request a missing feature |
| `vero_upgrade` | meta | Upgrade to Pro or Pro+ |
| `vero_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `vero_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `vero_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `vero_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
