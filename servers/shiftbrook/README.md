# Shiftbrook MCP by usefulapi

Use your [Shiftbrook](https://shiftbrook.com) account from Claude, Cursor, or any MCP client. Read the rota, people, leave requests and timesheets, add people and approve leave requests. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://shiftbrook.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shiftbrook.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shiftbrook https://shiftbrook.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shiftbrook&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshiftbrook.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shiftbrook": {
      "url": "https://shiftbrook.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Shiftbrook credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shiftbrook/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Shiftbrook API key** (Shiftbrook → Settings → Integrations → API, as an owner or admin). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shiftbrook_check_key` | read | Check API key |
| `shiftbrook_list_people` | read | List people |
| `shiftbrook_get_person` | read | Get a person |
| `shiftbrook_create_person` | **write** | Add a person |
| `shiftbrook_list_locations` | read | List locations |
| `shiftbrook_get_location` | read | Get a location |
| `shiftbrook_list_shifts` | read | List shifts |
| `shiftbrook_get_shift` | read | Get a shift |
| `shiftbrook_list_leave_requests` | read | List leave requests |
| `shiftbrook_get_leave_request` | read | Get a leave request |
| `shiftbrook_approve_leave_request` | **write** | Approve a leave request |
| `shiftbrook_list_timesheets` | read | List timesheets |
| `shiftbrook_get_timesheet` | read | Get a timesheet |
| `shiftbrook_list_absences` | read | List absences |
| `shiftbrook_usage_status` | meta | Usage status (free-tier meter) |
| `shiftbrook_request_feature` | meta | Request a missing feature |
| `shiftbrook_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shiftbrook_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `shiftbrook_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `shiftbrook_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `shiftbrook_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
