# eventOne MCP by usefulapi

Use your [eventOne](https://geteventone.com) account from Claude, Cursor, or any MCP client. Read events, the programme, registrations, people, promo codes and attendance. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://eventone.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://eventone.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http eventone https://eventone.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=eventone&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Feventone.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "eventone": {
      "url": "https://eventone.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your eventOne credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/eventone/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **eventOne personal access token** (eventOne account page → **Personal access tokens**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `eventone_get_me` | read | Get my account |
| `eventone_list_orgs` | read | List organizations |
| `eventone_get_org` | read | Get an organization |
| `eventone_list_events` | read | List events |
| `eventone_get_event` | read | Get an event |
| `eventone_search_events` | read | Search events |
| `eventone_list_days` | read | List event days |
| `eventone_list_timeslots` | read | List timeslots |
| `eventone_list_sessions` | read | List sessions |
| `eventone_list_speakers` | read | List speakers |
| `eventone_list_tracks` | read | List tracks |
| `eventone_list_rooms` | read | List rooms |
| `eventone_list_exhibitors` | read | List exhibitors and sponsors |
| `eventone_list_forms` | read | List registration forms |
| `eventone_list_promos` | read | List promo codes |
| `eventone_list_registration_orders` | read | List registration orders |
| `eventone_list_tickets` | read | List tickets |
| `eventone_list_people` | read | List people |
| `eventone_get_event_attendance` | read | Get session attendance |
| `eventone_list_messages` | read | List push messages |
| `eventone_usage_status` | meta | Usage status (free-tier meter) |
| `eventone_request_feature` | meta | Request a missing feature |
| `eventone_upgrade` | meta | Upgrade to Pro or Pro+ |
| `eventone_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `eventone_upgrade` (it returns a Stripe Checkout link). Cancel any time with `eventone_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `eventone_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
