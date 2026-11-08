# Action1 MCP by usefulapi

Use your [Action1](https://www.action1.com) account from Claude, Cursor, or any MCP client. Read endpoints, missing updates, CVE vulnerabilities, installed software and reports. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://action1.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://action1.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http action1 https://action1.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=action1&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faction1.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "action1": {
      "url": "https://action1.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Action1 credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/action1/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Action1 region**, a **Client ID** and a **Client secret** (created under Configuration | Users & API Credentials in Action1). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `action1_list_organizations` | read | List organizations |
| `action1_get_current_user` | read | Get the API user |
| `action1_search` | read | Search Action1 |
| `action1_list_endpoints` | read | List managed endpoints |
| `action1_get_endpoint` | read | Get a managed endpoint |
| `action1_list_endpoint_groups` | read | List endpoint groups |
| `action1_list_group_endpoints` | read | List endpoints in a group |
| `action1_list_missing_updates` | read | List missing updates |
| `action1_list_package_updates` | read | List updates for a package |
| `action1_list_vulnerabilities` | read | List vulnerable software |
| `action1_get_vulnerability` | read | Get a CVE in an organization |
| `action1_list_vulnerability_endpoints` | read | List endpoints affected by a CVE |
| `action1_list_installed_software` | read | List installed software |
| `action1_list_automation_instances` | read | List automation runs |
| `action1_list_reports` | read | List reports |
| `action1_get_report_rows` | read | Get report rows |
| `action1_usage_status` | meta | Usage status (free-tier meter) |
| `action1_request_feature` | meta | Request a missing feature |
| `action1_upgrade` | meta | Upgrade to Pro or Pro+ |
| `action1_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `action1_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `action1_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `action1_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
