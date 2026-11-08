# Pulseway MCP by usefulapi

Use your [Pulseway](https://www.pulseway.com) account from Claude, Cursor, or any MCP client. Read devices, alerts, antivirus status, assets and audit logs, and run automation scripts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://pulseway.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pulseway.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pulseway https://pulseway.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pulseway&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpulseway.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pulseway": {
      "url": "https://pulseway.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Pulseway credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pulseway/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Pulseway Token ID** and **Token Secret** (an API token pair from your Pulseway admin). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pulseway_get_environment` | read | Get environment |
| `pulseway_get_rate_limits` | read | Get rate limits |
| `pulseway_list_devices` | read | List devices |
| `pulseway_get_device` | read | Get a device |
| `pulseway_get_device_antivirus` | read | Get device antivirus status |
| `pulseway_list_device_notifications` | read | List device notifications |
| `pulseway_list_notifications` | read | List notifications |
| `pulseway_list_assets` | read | List assets |
| `pulseway_list_organizations` | read | List organizations |
| `pulseway_list_sites` | read | List sites |
| `pulseway_list_groups` | read | List groups |
| `pulseway_list_scripts` | read | List automation scripts |
| `pulseway_get_script_executions` | read | Get script executions on a device |
| `pulseway_list_workflows` | read | List automation workflows |
| `pulseway_run_script` | **write** | Run a script on a device (write) |
| `pulseway_list_audit_logs` | read | List audit log entries |
| `pulseway_usage_status` | meta | Usage status (free-tier meter) |
| `pulseway_request_feature` | meta | Request a missing feature |
| `pulseway_upgrade` | meta | Upgrade to Pro or Pro+ |
| `pulseway_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `pulseway_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `pulseway_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `pulseway_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
