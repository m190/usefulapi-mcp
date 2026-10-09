# Release Radar MCP by usefulapi

Correlate GitHub releases with Sentry issues and PagerDuty incidents. Hosted, no local install.

**Live endpoint:** `https://release-radar.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://release-radar.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http release-radar https://release-radar.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=release-radar&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frelease-radar.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "release-radar": {
      "url": "https://release-radar.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Release Radar credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/release-radar/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Release Radar credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `whats_broken_since_last_deploy` | **write** | What's broken since the last deploy? |
| `incident_snapshot` | **write** | Current incident snapshot |
| `oncall_handoff` | **write** | On-call handoff briefing |
| `github_latest_deploy` | **write** | Latest GitHub deploy/release |
| `sentry_recent_issues` | **write** | Recent unresolved Sentry issues |
| `release_radar_usage_status` | meta | Usage status (free-tier meter) |
| `release_radar_upgrade` | meta | Upgrade to Pro (unlimited) |
| `release_radar_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `release_radar_upgrade` (it returns a Stripe Checkout link). Cancel any time with `release_radar_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `release_radar_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
