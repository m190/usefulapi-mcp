# Release Radar MCP by usefulapi

Correlate GitHub releases with Sentry issues and PagerDuty incidents. Hosted, no local install.

**Live endpoint:** `https://release-radar.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "release-radar": {
      "url": "https://release-radar.usefulapi.io/mcp"
    }
  }
}
```

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

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
