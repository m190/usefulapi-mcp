# SupportBee MCP by usefulapi

Use [SupportBee](https://supportbee.com) from Claude, Cursor, or any MCP client — tickets, replies, comments, labels, teams, users and reports, plus replies and ticket triage.
Hosted, no local install: connect with your own SupportBee credentials.

**Live endpoint:** `https://supportbee.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/supportbee

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://supportbee.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http supportbee https://supportbee.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=supportbee&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsupportbee.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "supportbee": {
      "url": "https://supportbee.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SupportBee credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/supportbee/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `supportbee_list_tickets` | read | List tickets |
| `supportbee_search_tickets` | read | Search tickets |
| `supportbee_get_ticket` | read | Get a ticket |
| `supportbee_list_replies` | read | List the replies of a ticket |
| `supportbee_get_reply` | read | Get one reply of a ticket |
| `supportbee_list_comments` | read | List the internal comments of a ticket |
| `supportbee_get_ticket_audit` | read | Get the audit trail of a ticket |
| `supportbee_list_labels` | read | List labels |
| `supportbee_list_teams` | read | List teams |
| `supportbee_list_users` | read | List users |
| `supportbee_get_user` | read | Get a user |
| `supportbee_list_snippets` | read | List snippets |
| `supportbee_list_forwarding_addresses` | read | List forwarding addresses |
| `supportbee_get_report` | read | Get a report |
| `supportbee_reply_to_ticket` | **write** | Reply to a ticket (sends an e-mail) |
| `supportbee_add_comment` | **write** | Add an internal comment to a ticket |
| `supportbee_add_label` | **write** | Add a label to a ticket |
| `supportbee_remove_label` | **write** | Remove a label from a ticket |
| `supportbee_assign_ticket` | **write** | Assign a ticket to a user or a team |
| `supportbee_unassign_ticket` | **write** | Remove the user or team assignment of a ticket |
| `supportbee_set_ticket_archived` | **write** | Archive or un-archive a ticket |
| `supportbee_set_ticket_answered` | **write** | Mark a ticket answered or unanswered |
| `supportbee_usage_status` | meta | Usage status (free-tier meter) |
| `supportbee_request_feature` | meta | Request a missing feature |
| `supportbee_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `supportbee_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per company) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `supportbee_upgrade` (it returns a Stripe Checkout link). Cancel any time with `supportbee_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `supportbee_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by SupportBee.
