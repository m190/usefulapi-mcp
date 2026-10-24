# Eventee MCP by usefulapi

Read an Eventee event's program, participants and reviews; create sessions, speakers; invite.

**Live endpoint:** `https://eventee.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/eventee

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://eventee.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http eventee https://eventee.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=eventee&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Feventee.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "eventee": {
      "url": "https://eventee.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Eventee credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/eventee/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Eventee event's **API token** (in the Eventee admin, in the event's settings; each event has its own token).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `eventee_get_program` | read | Get event program |
| `eventee_list_participants` | read | List participants |
| `eventee_list_registrations` | read | List registrations |
| `eventee_list_groups` | read | List attendee groups |
| `eventee_list_reviews` | read | List session reviews |
| `eventee_list_partners` | read | List partners |
| `eventee_create_session` | **write** | Create session |
| `eventee_update_session` | **write** | Update session |
| `eventee_delete_session` | **write** | Delete session |
| `eventee_create_hall` | **write** | Create hall |
| `eventee_create_break` | **write** | Create break |
| `eventee_create_label` | **write** | Create label |
| `eventee_create_speaker` | **write** | Create speaker |
| `eventee_invite_attendees` | **write** | Invite attendees |
| `eventee_register_people` | **write** | Pre-register people |
| `eventee_check_in_attendee` | **write** | Check in attendee |
| `eventee_remove_attendee` | **write** | Remove attendee |
| `eventee_remove_registration` | **write** | Remove registration |
| `eventee_usage_status` | meta | Usage status (free-tier meter) |
| `eventee_request_feature` | meta | Request a missing feature |
| `eventee_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `eventee_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `eventee_upgrade` (it returns a Stripe Checkout link). Cancel any time with `eventee_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `eventee_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Eventee.
