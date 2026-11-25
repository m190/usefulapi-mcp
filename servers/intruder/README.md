# Intruder MCP by usefulapi

Use your [Intruder](https://www.intruder.io) account from Claude, Cursor, or any MCP client. Read targets, scans, issues and fixed occurrences, and add targets, start or cancel scans. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://intruder.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://intruder.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http intruder https://intruder.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=intruder&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fintruder.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "intruder": {
      "url": "https://intruder.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Intruder credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/intruder/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Intruder API access token** (Intruder → Profile → API access tokens; only account admins can create one, and the plan must include API access). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `intruder_list_targets` | read | List targets |
| `intruder_add_target` | **write** | Add a target |
| `intruder_list_scans` | read | List scans |
| `intruder_get_scan` | read | Get a scan |
| `intruder_list_scan_schedules` | read | List scan schedules |
| `intruder_start_scan` | **write** | Start a scan |
| `intruder_cancel_scan` | **write** | Cancel a scan |
| `intruder_list_issues` | read | List issues |
| `intruder_list_issue_occurrences` | read | List issue occurrences |
| `intruder_get_occurrence_scanner_output` | read | Get occurrence scanner output |
| `intruder_list_occurrence_comments` | read | List occurrence comments |
| `intruder_add_occurrence_comment` | **write** | Add an occurrence comment |
| `intruder_list_issue_targets` | read | List targets for an issue |
| `intruder_list_fixed_occurrences` | read | List fixed occurrences |
| `intruder_list_attack_surface_services` | read | List exposed services |
| `intruder_list_licenses` | read | List licences |
| `intruder_list_tags` | read | List tags |
| `intruder_usage_status` | meta | Usage status (free-tier meter) |
| `intruder_request_feature` | meta | Request a missing feature |
| `intruder_upgrade` | meta | Upgrade to Pro or Pro+ |
| `intruder_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `intruder_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `intruder_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `intruder_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
