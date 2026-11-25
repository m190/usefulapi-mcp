# Flagsmith MCP by usefulapi

Use your [Flagsmith](https://flagsmith.com) account from Claude, Cursor, or any MCP client. Read flags, segments, identities and the audit log, and switch a flag on or off in one environment. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://flagsmith.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://flagsmith.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http flagsmith https://flagsmith.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=flagsmith&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fflagsmith.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "flagsmith": {
      "url": "https://flagsmith.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Flagsmith credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/flagsmith/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Flagsmith organisation API token** (Organisation Settings → API Access → Create API Key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `flagsmith_list_organisations` | read | List organisations |
| `flagsmith_list_projects` | read | List projects |
| `flagsmith_get_project` | read | Get project |
| `flagsmith_list_environments` | read | List environments |
| `flagsmith_get_environment` | read | Get environment |
| `flagsmith_list_features` | read | List features |
| `flagsmith_get_feature` | read | Get feature |
| `flagsmith_list_feature_states` | read | List feature states |
| `flagsmith_list_segments` | read | List segments |
| `flagsmith_get_segment` | read | Get segment |
| `flagsmith_list_identities` | read | List identities |
| `flagsmith_list_audit_log` | read | List audit log |
| `flagsmith_set_feature_state_enabled` | **write** | Turn a flag on or off in one environment |
| `flagsmith_usage_status` | meta | Usage status (free-tier meter) |
| `flagsmith_request_feature` | meta | Request a missing feature |
| `flagsmith_upgrade` | meta | Upgrade to Pro or Pro+ |
| `flagsmith_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `flagsmith_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `flagsmith_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `flagsmith_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
