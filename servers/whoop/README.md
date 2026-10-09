# WHOOP MCP by usefulapi

Read WHOOP recovery, sleep, cycles, workouts and body measurements. Hosted, no local install.

**Live endpoint:** `https://whoop.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://whoop.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http whoop https://whoop.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=whoop&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwhoop.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "whoop": {
      "url": "https://whoop.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your WHOOP credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/whoop/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **WHOOP credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `whoop_get_profile` | read | Get profile |
| `whoop_body_measurement` | read | Get body measurement |
| `whoop_list_cycles` | read | List cycles |
| `whoop_get_cycle` | read | Get cycle |
| `whoop_get_cycle_recovery` | read | Get cycle recovery |
| `whoop_list_recoveries` | read | List recoveries |
| `whoop_list_sleep` | read | List sleep |
| `whoop_get_sleep` | read | Get sleep |
| `whoop_list_workouts` | read | List workouts |
| `whoop_get_workout` | read | Get workout |
| `whoop_usage_status` | meta | Usage status (free-tier meter) |
| `whoop_upgrade` | meta | Upgrade to Pro (unlimited) |
| `whoop_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `whoop_upgrade` (it returns a Stripe Checkout link). Cancel any time with `whoop_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `whoop_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
