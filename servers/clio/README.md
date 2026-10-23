# Clio MCP by usefulapi

Work with your firm's [Clio Manage](https://www.clio.com) data from Claude, Cursor, or any MCP client — look up matters, contacts, time and expense entries, tasks, calendar entries, bills, document details (names and metadata, never file contents) and notes; create contacts, matters, time entries, tasks, notes and calendar entries and update tasks. It never deletes anything, changes a bill or touches payments or trust accounts. Hosted, no local install: connect with your Clio account over OAuth.

**Live endpoint:** `https://clio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/clio

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://clio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http clio https://clio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=clio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fclio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "clio": {
      "url": "https://clio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Clio account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/clio/

<!-- connect:end (generated above, edit below) -->

On first connect you'll be sent to Clio to sign in and approve access; no API keys to paste. For Clio accounts in
the US region. The server can do only what your Clio user is allowed to do. You can revoke the access any time in
Clio. One subscription covers one Clio user in one firm.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `clio_who_am_i` | read | Who am I |
| `clio_list_users` | read | List users |
| `clio_list_matters` | read | List matters |
| `clio_get_matter` | read | Get one matter |
| `clio_list_contacts` | read | List contacts |
| `clio_get_contact` | read | Get one contact |
| `clio_list_activities` | read | List activities (time and expenses) |
| `clio_list_tasks` | read | List tasks |
| `clio_list_calendar_entries` | read | List calendar entries |
| `clio_list_bills` | read | List bills |
| `clio_get_bill` | read | Get one bill |
| `clio_list_documents` | read | List documents |
| `clio_list_notes` | read | List notes |
| `clio_create_contact` | **write** | Create a contact |
| `clio_create_matter` | **write** | Create a matter |
| `clio_create_time_entry` | **write** | Record a time entry |
| `clio_create_task` | **write** | Create a task |
| `clio_update_task` | **write** | Update a task |
| `clio_create_note` | **write** | Create a note |
| `clio_create_calendar_entry` | **write** | Create a calendar entry |
| `clio_usage_status` | meta | Usage status (free-tier meter) |
| `clio_request_feature` | meta | Request a missing feature |
| `clio_upgrade` | meta | Upgrade to Pro (unlimited) |
| `clio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `clio_upgrade` (it returns a Stripe Checkout link). Cancel any time with `clio_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `clio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). This repo contains documentation only; the server is hosted.
