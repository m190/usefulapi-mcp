# When I Work MCP by usefulapi

Use [When I Work](https://wheniwork.com) from Claude, Cursor, or any MCP client — check schedules, shifts, clocked times, time-off requests, shift swaps and availability, and create, publish or update shifts.
Hosted, no local install: connect with your own When I Work credentials.

**Live endpoint:** `https://when-i-work.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/when-i-work

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://when-i-work.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http when-i-work https://when-i-work.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=when-i-work&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwhen-i-work.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "when-i-work": {
      "url": "https://when-i-work.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your When I Work credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/when-i-work/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **When I Work developer key (W-Key), email and password**, plus an optional workplace user id.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wheniwork_get_account` | read | Get the account |
| `wheniwork_list_users` | read | List users |
| `wheniwork_get_user` | read | Get one user |
| `wheniwork_list_locations` | read | List schedules (locations) |
| `wheniwork_list_positions` | read | List positions |
| `wheniwork_list_shifts` | read | List shifts |
| `wheniwork_get_shift` | read | Get one shift |
| `wheniwork_list_eligible_users_for_shift` | read | List users eligible for an open shift |
| `wheniwork_list_times` | read | List clocked times (timesheets) |
| `wheniwork_list_time_off_requests` | read | List time-off requests |
| `wheniwork_get_time_off_request` | read | Get one time-off request |
| `wheniwork_list_time_off_types` | read | List time-off types |
| `wheniwork_list_shift_swaps` | read | List shift swaps and drops |
| `wheniwork_list_availability` | read | List availability |
| `wheniwork_list_annotations` | read | List schedule annotations |
| `wheniwork_create_shift` | **write** | Create a shift |
| `wheniwork_update_shift` | **write** | Update a shift |
| `wheniwork_publish_shifts` | **write** | Publish shifts |
| `wheniwork_unpublish_shifts` | **write** | Unpublish shifts |
| `wheniwork_create_time_off_request` | **write** | Create a time-off request |
| `wheniwork_update_time_off_request` | **write** | Approve, deny or change a time-off request |
| `wheniwork_usage_status` | meta | Usage status (free-tier meter) |
| `wheniwork_request_feature` | meta | Request a missing feature |
| `wheniwork_upgrade` | meta | Upgrade to Pro (unlimited) |
| `wheniwork_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `wheniwork_upgrade` (it returns a Stripe Checkout link). Cancel any time with `wheniwork_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `wheniwork_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by When I Work.
