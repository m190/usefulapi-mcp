# ChurchSuite MCP by usefulapi

Use [ChurchSuite](https://churchsuite.com) from Claude, Cursor, or any MCP client — read ChurchSuite contacts, children, small groups, rotas, events and attendance; add contact notes.
Hosted, no local install: connect with your own ChurchSuite credentials.

**Live endpoint:** `https://churchsuite.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/churchsuite

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://churchsuite.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http churchsuite https://churchsuite.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=churchsuite&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fchurchsuite.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "churchsuite": {
      "url": "https://churchsuite.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ChurchSuite credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/churchsuite/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **ChurchSuite API user's client ID and client secret**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `churchsuite_get_account` | read | Get church account |
| `churchsuite_list_sites` | read | List sites |
| `churchsuite_list_contacts` | read | List address book contacts |
| `churchsuite_get_contact` | read | Get a contact |
| `churchsuite_list_contact_notes` | read | List contact notes |
| `churchsuite_add_contact_note` | **write** | Add a note to a contact |
| `churchsuite_list_contact_tags` | read | List address book tags |
| `churchsuite_list_children` | read | List children |
| `churchsuite_get_child` | read | Get a child |
| `churchsuite_list_children_groups` | read | List children's groups |
| `churchsuite_list_small_groups` | read | List small groups |
| `churchsuite_get_small_group` | read | Get a small group |
| `churchsuite_list_small_group_members` | read | List small group members |
| `churchsuite_list_events` | read | List calendar events |
| `churchsuite_get_event` | read | Get a calendar event |
| `churchsuite_list_event_categories` | read | List event categories |
| `churchsuite_list_ministries` | read | List rota ministries |
| `churchsuite_list_ministry_teams` | read | List ministry teams |
| `churchsuite_list_ministry_members` | read | List ministry members |
| `churchsuite_list_unavailability` | read | List rota unavailability |
| `churchsuite_list_service_plans` | read | List service plans |
| `churchsuite_list_plan_items` | read | List service plan items |
| `churchsuite_list_giving_funds` | read | List giving funds |
| `churchsuite_list_gatherings` | read | List attendance gatherings |
| `churchsuite_list_attendance_records` | read | List attendance records |
| `churchsuite_usage_status` | meta | Usage status (free-tier meter) |
| `churchsuite_request_feature` | meta | Request a missing feature |
| `churchsuite_upgrade` | meta | Upgrade to Pro or Pro+ |
| `churchsuite_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per church account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per church account) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `churchsuite_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `churchsuite_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `churchsuite_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by ChurchSuite.
