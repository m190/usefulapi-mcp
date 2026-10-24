# Papershift MCP by usefulapi

Read Papershift absences, vacation, time tracking and shifts; request and review absences.

**Live endpoint:** `https://papershift.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/papershift

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://papershift.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http papershift https://papershift.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=papershift&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpapershift.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "papershift": {
      "url": "https://papershift.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Papershift credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/papershift/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Papershift **API key** (Account settings → API; Account Admin only, API add-on required).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `papershift_get_account` | read | Get account |
| `papershift_list_locations` | read | List locations |
| `papershift_get_location` | read | Get location |
| `papershift_list_working_areas` | read | List working areas |
| `papershift_list_users` | read | List employees |
| `papershift_get_user` | read | Get employee |
| `papershift_list_tags` | read | List tags |
| `papershift_list_absence_types` | read | List absence types |
| `papershift_list_absences` | read | List absences |
| `papershift_get_absence` | read | Get absence |
| `papershift_list_vacation_entitlements` | read | List vacation entitlements |
| `papershift_list_time_trackings` | read | List time trackings |
| `papershift_get_time_tracking` | read | Get time tracking |
| `papershift_list_evaluations` | read | List evaluations (daily hours) |
| `papershift_list_target_hours` | read | List target hours |
| `papershift_list_payrolls` | read | List payrolls |
| `papershift_list_shifts` | read | List shifts |
| `papershift_get_shift` | read | Get shift |
| `papershift_list_shift_assignments` | read | List shift assignments |
| `papershift_list_availabilities` | read | List availabilities |
| `papershift_create_absence` | **write** | Create absence |
| `papershift_review_absence` | **write** | Confirm, reject or reset an absence |
| `papershift_create_time_tracking` | **write** | Create time tracking |
| `papershift_confirm_time_tracking` | **write** | Confirm time tracking |
| `papershift_create_shift` | **write** | Create shift |
| `papershift_assign_user_to_shift` | **write** | Assign employee to shift |
| `papershift_usage_status` | meta | Usage status (free-tier meter) |
| `papershift_request_feature` | meta | Request a missing feature |
| `papershift_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `papershift_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `papershift_upgrade` (it returns a Stripe Checkout link). Cancel any time with `papershift_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `papershift_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Papershift.
