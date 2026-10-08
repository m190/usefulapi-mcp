# All Quiet MCP by usefulapi

Manage [All Quiet](https://allquiet.app) incident management and on-call from Claude, Cursor, or any MCP
client — list, create and update incidents, see who's on call, run on-call reports, and set on-call
overrides. Hosted, no local install: connect with your All Quiet API key.

**Live endpoint:** `https://all-quiet.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://all-quiet.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http all-quiet https://all-quiet.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=all-quiet&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fall-quiet.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "all-quiet": {
      "url": "https://all-quiet.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/all-quiet/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **All Quiet API key** (All Quiet → Settings → API keys). It's validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `allquiet_list_incidents` | read | List incidents |
| `allquiet_get_incident` | read | Get incident |
| `allquiet_get_incident_markdown` | read | Get incident as markdown |
| `allquiet_who_is_on_call` | read | Who is on call |
| `allquiet_on_call_report` | read | On-call report |
| `allquiet_list_teams` | read | List teams |
| `allquiet_list_users` | read | List users |
| `allquiet_list_on_call_overrides` | read | List on-call overrides |
| `allquiet_create_incident` | **write** | Create incident |
| `allquiet_update_incident` | **write** | Update incident |
| `allquiet_create_on_call_override` | **write** | Create on-call override |
| `allquiet_usage_status` | meta | Usage status (free-tier meter) |
| `allquiet_upgrade` | meta | Upgrade to Pro (unlimited) |
| `allquiet_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `allquiet_upgrade` (it returns a Stripe Checkout link). Cancel any time with `allquiet_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `allquiet_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
