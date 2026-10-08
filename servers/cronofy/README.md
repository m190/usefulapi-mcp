# Cronofy MCP by usefulapi

Read your calendars, events and free/busy, and create or delete events, from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Cronofy access token.

**Live endpoint:** `https://cronofy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/cronofy

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cronofy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cronofy https://cronofy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cronofy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcronofy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cronofy": {
      "url": "https://cronofy.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cronofy/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Cronofy access token. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cronofy_get_account` | read | Get account |
| `cronofy_get_userinfo` | read | Get userinfo |
| `cronofy_list_calendars` | read | List calendars |
| `cronofy_list_profiles` | read | List profiles |
| `cronofy_read_events` | read | Read events |
| `cronofy_get_free_busy` | read | Get free busy |
| `cronofy_upsert_event` | **write** | Upsert event |
| `cronofy_delete_event` | **write** | Delete event |
| `cronofy_usage_status` | meta | Usage status (free-tier meter) |
| `cronofy_upgrade` | meta | Upgrade to Pro (unlimited) |
| `cronofy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `cronofy_upgrade` (it returns a Stripe Checkout link). Cancel any time with `cronofy_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `cronofy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
