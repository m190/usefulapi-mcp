# Healthchecks.io MCP by usefulapi

Manage [Healthchecks.io](https://healthchecks.io) from Claude, Cursor, or any MCP client — manage cron/heartbeat checks, read pings and flips, and pause/resume/delete checks. Hosted, no local install: connect with your Healthchecks.io API token.

**Live endpoint:** `https://healthchecksio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://healthchecksio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http healthchecksio https://healthchecksio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=healthchecksio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhealthchecksio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "healthchecksio": {
      "url": "https://healthchecksio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Healthchecks.io credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/healthchecksio/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Healthchecks.io API token** (Healthchecks.io → Settings → API Access).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `healthchecksio_list_checks` | read | List checks |
| `healthchecksio_get_check` | read | Get check |
| `healthchecksio_list_pings` | read | List pings |
| `healthchecksio_get_ping_body` | read | Get ping body |
| `healthchecksio_list_flips` | read | List flips |
| `healthchecksio_list_integrations` | read | List integrations |
| `healthchecksio_list_badges` | read | List badges |
| `healthchecksio_create_check` | **write** | Create check |
| `healthchecksio_update_check` | **write** | Update check |
| `healthchecksio_pause_check` | **write** | Pause check |
| `healthchecksio_resume_check` | **write** | Resume check |
| `healthchecksio_delete_check` | **write** | Delete check |
| `healthchecksio_usage_status` | meta | Usage status (free-tier meter) |
| `healthchecksio_upgrade` | meta | Upgrade to Pro (unlimited) |
| `healthchecksio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `healthchecksio_upgrade` (it returns a Stripe Checkout link). Cancel any time with `healthchecksio_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `healthchecksio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
