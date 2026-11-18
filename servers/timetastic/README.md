# Timetastic MCP by usefulapi

Use your [Timetastic](https://timetastic.co.uk/) account from Claude, Cursor, or any MCP client. Read who is off, leave requests, leave types, allowances and public holidays, and request, approve or decline leave. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://timetastic.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://timetastic.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http timetastic https://timetastic.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=timetastic&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftimetastic.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "timetastic": {
      "url": "https://timetastic.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Timetastic credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/timetastic/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Timetastic API token**, which an admin creates in Timetastic under **Settings → Integrations → Set up API & Webhooks**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `timetastic_list_users` | read | List users |
| `timetastic_get_user` | read | Get user |
| `timetastic_list_leave_types` | read | List leave types |
| `timetastic_list_leave_requests` | read | List leave requests |
| `timetastic_get_leave_request` | read | Get leave request |
| `timetastic_list_absences` | read | Who is off |
| `timetastic_list_public_holidays` | read | List public holidays |
| `timetastic_get_user_allowance` | read | Get user allowance |
| `timetastic_request_leave` | **write** | Request leave |
| `timetastic_approve_or_decline_leave` | **write** | Approve or decline leave |
| `timetastic_usage_status` | meta | Usage status (free-tier meter) |
| `timetastic_request_feature` | meta | Request a missing feature |
| `timetastic_upgrade` | meta | Upgrade to Pro or Pro+ |
| `timetastic_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `timetastic_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `timetastic_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `timetastic_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
