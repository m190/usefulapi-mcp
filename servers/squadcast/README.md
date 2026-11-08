# Squadcast MCP by usefulapi

Manage [Squadcast](https://www.squadcast.com) on-call from Claude, Cursor, or any MCP client — read
incidents, services, teams, on-call schedules and escalation policies, and acknowledge, resolve or
note incidents. Hosted, no local install: connect with your Squadcast API refresh token.

**Live endpoint:** `https://squadcast.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://squadcast.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http squadcast https://squadcast.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=squadcast&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsquadcast.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "squadcast": {
      "url": "https://squadcast.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Squadcast credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/squadcast/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Squadcast API Refresh Token** (Squadcast → generate an API
Refresh Token). It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `squadcast_list_incidents` | read | List incidents |
| `squadcast_get_incident` | read | Get incident |
| `squadcast_get_incident_events` | read | Get incident events |
| `squadcast_list_incident_notes` | read | List incident notes |
| `squadcast_list_services` | read | List services |
| `squadcast_get_service` | read | Get service |
| `squadcast_list_users` | read | List users |
| `squadcast_get_user` | read | Get user |
| `squadcast_list_teams` | read | List teams |
| `squadcast_get_team` | read | Get team |
| `squadcast_list_squads` | read | List squads |
| `squadcast_list_schedules` | read | List schedules (on-call) |
| `squadcast_list_escalation_policies` | read | List escalation policies |
| `squadcast_acknowledge_incident` | **write** | Acknowledge incident |
| `squadcast_resolve_incident` | **write** | Resolve incident |
| `squadcast_add_incident_note` | **write** | Add incident note |
| `squadcast_usage_status` | meta | Usage status (free-tier meter) |
| `squadcast_request_feature` | meta | Request a missing feature |
| `squadcast_upgrade` | meta | Upgrade to Pro or Pro+ |
| `squadcast_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `squadcast_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `squadcast_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `squadcast_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
