# Dead Man's Snitch MCP by usefulapi

Use [Dead Man's Snitch](https://deadmanssnitch.com) from Claude, Cursor, or any MCP client — your cron and heartbeat monitors (snitches), their status and tags, plus creating and pausing snitches.
Hosted, no local install: connect with your own Dead Man's Snitch credentials.

**Live endpoint:** `https://dead-mans-snitch.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/dead-mans-snitch

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://dead-mans-snitch.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http dead-mans-snitch https://dead-mans-snitch.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=dead-mans-snitch&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdead-mans-snitch.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "dead-mans-snitch": {
      "url": "https://dead-mans-snitch.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Dead Man's Snitch credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/dead-mans-snitch/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `deadmanssnitch_list_snitches` | read | List snitches |
| `deadmanssnitch_get_snitch` | read | Get snitch |
| `deadmanssnitch_create_snitch` | **write** | Create snitch |
| `deadmanssnitch_update_snitch` | **write** | Update snitch |
| `deadmanssnitch_add_tags` | **write** | Add tags |
| `deadmanssnitch_remove_tag` | **write** | Remove tag |
| `deadmanssnitch_pause_snitch` | **write** | Pause snitch |
| `deadmanssnitch_unpause_snitch` | **write** | Unpause snitch |
| `deadmanssnitch_usage_status` | meta | Usage status (free-tier meter) |
| `deadmanssnitch_request_feature` | meta | Request a missing feature |
| `deadmanssnitch_upgrade` | meta | Upgrade to Pro (unlimited) |
| `deadmanssnitch_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `deadmanssnitch_upgrade` (it returns a Stripe Checkout link). Cancel any time with `deadmanssnitch_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `deadmanssnitch_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Dead Man's Snitch.
