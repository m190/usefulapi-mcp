# Detectify MCP by usefulapi

Use your [Detectify](https://detectify.com) account from Claude, Cursor, or any MCP client. Read assets, scans and vulnerability findings, and set a finding as accepted risk, false positive or fixed. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://detectify.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://detectify.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http detectify https://detectify.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=detectify&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdetectify.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "detectify": {
      "url": "https://detectify.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Detectify credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/detectify/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Detectify API v2 key** (Connections → API Keys → API V2; team admins only). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `detectify_list_assets` | read | List root assets |
| `detectify_list_subdomains` | read | List subdomains of an asset |
| `detectify_get_asset_settings` | read | Get asset (domain) settings |
| `detectify_list_groups` | read | List groups |
| `detectify_list_group_members` | read | List group members |
| `detectify_list_team_members` | read | List team members |
| `detectify_list_scan_profiles` | read | List scan profiles |
| `detectify_list_scan_profiles_for_asset` | read | List scan profiles for an asset |
| `detectify_get_scan_profile_settings` | read | Get scan profile settings |
| `detectify_get_scan_status` | read | Get scan status |
| `detectify_get_scan_schedule` | read | Get scan schedule |
| `detectify_list_vulnerabilities` | read | List vulnerabilities |
| `detectify_get_vulnerability` | read | Get a vulnerability |
| `detectify_set_vulnerability_status` | **write** | Set a vulnerability status |
| `detectify_usage_status` | meta | Usage status (free-tier meter) |
| `detectify_request_feature` | meta | Request a missing feature |
| `detectify_upgrade` | meta | Upgrade to Pro or Pro+ |
| `detectify_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `detectify_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `detectify_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `detectify_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
