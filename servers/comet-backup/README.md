# Comet Backup MCP by usefulapi

Use your [Comet Backup](https://cometbackup.com) account from Claude, Cursor, or any MCP client. Read backup jobs, job logs, users, live devices and storage sizes of your Comet Server. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://comet-backup.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://comet-backup.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http comet-backup https://comet-backup.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=comet-backup&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcomet-backup.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "comet-backup": {
      "url": "https://comet-backup.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Comet Backup credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/comet-backup/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Comet Server address** (the public https address, for example https://backup.example.com), and the **admin account name** and **admin account password** (an admin that signs in without a TOTP code; the server's Auth Role must be enabled). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cometbackup_server_info` | read | Get server version |
| `cometbackup_list_users` | read | List users |
| `cometbackup_list_user_groups` | read | List user groups |
| `cometbackup_list_policies` | read | List policies |
| `cometbackup_list_recent_jobs` | read | List recent jobs |
| `cometbackup_list_user_jobs` | read | List jobs for a user |
| `cometbackup_list_jobs_between` | read | List jobs between two dates |
| `cometbackup_get_job` | read | Get a job |
| `cometbackup_get_job_log` | read | Get a job log |
| `cometbackup_get_server_stats` | read | Get server statistics |
| `cometbackup_list_live_devices` | read | List live devices |
| `cometbackup_list_storage_buckets` | read | List storage buckets |
| `cometbackup_usage_status` | meta | Usage status (free-tier meter) |
| `cometbackup_request_feature` | meta | Request a missing feature |
| `cometbackup_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cometbackup_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `cometbackup_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `cometbackup_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `cometbackup_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
