# ChMeetings MCP by usefulapi

Use your [ChMeetings](https://chmeetings.com) account from Claude, Cursor, or any MCP client. Read people, groups, families, events, attendance, follow-ups and giving records, and add notes, group members and follow-ups. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://chmeetings.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://chmeetings.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http chmeetings https://chmeetings.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=chmeetings&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fchmeetings.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "chmeetings": {
      "url": "https://chmeetings.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ChMeetings credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/chmeetings/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **ChMeetings API key** (Settings → Integrations → Manage API Keys; Owners and Admins only). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `chmeetings_list_people` | read | List people |
| `chmeetings_get_person` | read | Get a person |
| `chmeetings_list_person_fields` | read | List member fields |
| `chmeetings_list_person_notes` | read | List member notes |
| `chmeetings_create_person_note` | **write** | Add a note to a person |
| `chmeetings_list_groups` | read | List groups |
| `chmeetings_get_group` | read | Get a group |
| `chmeetings_list_group_people` | read | List people in groups |
| `chmeetings_add_person_to_group` | **write** | Add a person to a group |
| `chmeetings_list_families` | read | List families |
| `chmeetings_get_family` | read | Get a family |
| `chmeetings_list_events` | read | List events |
| `chmeetings_get_event` | read | Get an event |
| `chmeetings_list_event_occurrences` | read | List event occurrences |
| `chmeetings_get_occurrence` | read | Get an occurrence |
| `chmeetings_get_attendance_summary` | read | Get attendance summary |
| `chmeetings_list_attendance` | read | List attendance |
| `chmeetings_list_follow_ups` | read | List follow-ups |
| `chmeetings_list_follow_up_actions` | read | List follow-up actions |
| `chmeetings_create_follow_up` | **write** | Create a follow-up |
| `chmeetings_update_follow_up` | **write** | Update a follow-up |
| `chmeetings_list_contributions` | read | List contributions |
| `chmeetings_list_contribution_funds` | read | List contribution funds |
| `chmeetings_list_campaigns` | read | List campaigns |
| `chmeetings_list_campaign_pledges` | read | List campaign pledges |
| `chmeetings_list_organizations` | read | List organizations |
| `chmeetings_usage_status` | meta | Usage status (free-tier meter) |
| `chmeetings_request_feature` | meta | Request a missing feature |
| `chmeetings_upgrade` | meta | Upgrade to Pro or Pro+ |
| `chmeetings_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `chmeetings_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `chmeetings_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `chmeetings_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
