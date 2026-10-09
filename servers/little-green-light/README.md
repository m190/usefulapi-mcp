# Little Green Light MCP by usefulapi

Use [Little Green Light](https://www.littlegreenlight.com) from Claude, Cursor, or any MCP client — search constituents, gifts, notes and memberships, and create constituents, gifts, notes and contact reports.
Hosted, no local install: connect with your own Little Green Light credentials.

**Live endpoint:** `https://little-green-light.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/little-green-light

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://little-green-light.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http little-green-light https://little-green-light.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=little-green-light&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flittle-green-light.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "little-green-light": {
      "url": "https://little-green-light.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Little Green Light credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/little-green-light/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Little Green Light API key** (Settings > Integration settings > LGL API).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lgl_search_constituents` | read | Search constituents |
| `lgl_get_constituent` | read | Get a constituent |
| `lgl_list_constituent_gifts` | read | List a constituent's gifts |
| `lgl_search_gifts` | read | Search gifts |
| `lgl_get_gift` | read | Get a gift |
| `lgl_list_constituent_notes` | read | List a constituent's notes |
| `lgl_list_constituent_contact_reports` | read | List a constituent's contact reports |
| `lgl_list_constituent_memberships` | read | List a constituent's memberships |
| `lgl_list_appeals` | read | List appeals |
| `lgl_list_campaigns` | read | List campaigns |
| `lgl_list_funds` | read | List funds |
| `lgl_list_events` | read | List events |
| `lgl_list_groups` | read | List groups |
| `lgl_list_team_members` | read | List team members |
| `lgl_list_type_values` | read | List lookup values |
| `lgl_create_constituent` | **write** | Create a constituent |
| `lgl_update_constituent` | **write** | Update a constituent |
| `lgl_create_gift` | **write** | Record a gift |
| `lgl_create_note` | **write** | Add a note |
| `lgl_create_contact_report` | **write** | Log a contact report |
| `lgl_usage_status` | meta | Usage status (free-tier meter) |
| `lgl_request_feature` | meta | Request a missing feature |
| `lgl_upgrade` | meta | Upgrade to Pro (unlimited) |
| `lgl_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `lgl_upgrade` (it returns a Stripe Checkout link). Cancel any time with `lgl_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `lgl_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Little Green Light.
