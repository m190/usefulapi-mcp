# BailaYa MCP by usefulapi

Use your [BailaYa](https://www.bailaya.com) account from Claude, Cursor, or any MCP client. Read the schedule, students, team and packages of your dance studio, and add or change classes, events and students. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bailaya.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bailaya.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bailaya https://bailaya.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bailaya&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbailaya.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bailaya": {
      "url": "https://bailaya.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your BailaYa credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bailaya/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **BailaYa studio API key** (BailaYa → Settings → API keys; it starts with `bya_live_`). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bailaya_list_classes` | read | List classes |
| `bailaya_get_class` | read | Get a class |
| `bailaya_list_events` | read | List events |
| `bailaya_get_event` | read | Get an event |
| `bailaya_list_students` | read | List students |
| `bailaya_get_student` | read | Get a student |
| `bailaya_list_team_members` | read | List team members |
| `bailaya_get_team_member` | read | Get a team member |
| `bailaya_list_instructors` | read | List instructors |
| `bailaya_get_instructor` | read | Get an instructor |
| `bailaya_list_packages` | read | List class packages |
| `bailaya_get_package` | read | Get a class package |
| `bailaya_list_rooms` | read | List rooms |
| `bailaya_get_room` | read | Get a room |
| `bailaya_list_locations` | read | List locations |
| `bailaya_get_location` | read | Get a location |
| `bailaya_list_dance_types` | read | List dance types |
| `bailaya_create_class` | **write** | Create a class |
| `bailaya_update_class` | **write** | Update a class |
| `bailaya_delete_class` | **write** | Delete a class |
| `bailaya_create_event` | **write** | Create an event |
| `bailaya_update_event` | **write** | Update an event |
| `bailaya_create_student` | **write** | Create a student |
| `bailaya_update_student` | **write** | Update a student |
| `bailaya_usage_status` | meta | Usage status (free-tier meter) |
| `bailaya_request_feature` | meta | Request a missing feature |
| `bailaya_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bailaya_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `bailaya_upgrade` (it returns a Stripe Checkout link). Cancel any time with `bailaya_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `bailaya_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
