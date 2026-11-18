# myClub MCP by usefulapi

Use your [myClub](https://www.myclub.fi) account from Claude, Cursor, or any MCP client. Read events, courses, members, groups and venues, and create or update events. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://myclub.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://myclub.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http myclub https://myclub.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=myclub&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmyclub.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "myclub": {
      "url": "https://myclub.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your myClub credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/myclub/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **club name** (the part before .myclub.fi) and a **myClub API key**, which a club admin creates. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `myclub_get_club` | read | Get club information |
| `myclub_list_events` | read | List events |
| `myclub_get_event` | read | Get an event |
| `myclub_list_courses` | read | List courses |
| `myclub_get_course` | read | Get a course |
| `myclub_list_members` | read | List members |
| `myclub_search_members` | read | Find members by name |
| `myclub_get_member` | read | Get a member |
| `myclub_list_groups` | read | List groups |
| `myclub_list_group_memberships` | read | List a group's memberships |
| `myclub_list_venues` | read | List venues |
| `myclub_list_event_categories` | read | List event categories |
| `myclub_list_notifications` | read | List notifications |
| `myclub_create_event` | **write** | Create an event |
| `myclub_update_event` | **write** | Update an event |
| `myclub_usage_status` | meta | Usage status (free-tier meter) |
| `myclub_request_feature` | meta | Request a missing feature |
| `myclub_upgrade` | meta | Upgrade to Pro or Pro+ |
| `myclub_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `myclub_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `myclub_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `myclub_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
