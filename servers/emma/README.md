# Emma MCP by usefulapi

Connect at `https://emma.usefulapi.io/mcp`.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://emma.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http emma https://emma.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=emma&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Femma.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "emma": {
      "url": "https://emma.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Emma credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/emma/

<!-- connect:end (generated above, edit below) -->

Connect your Emma credentials to access your account through usefulapi.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `emma_list_groups` | read | List groups |
| `emma_get_group` | read | Get a group |
| `emma_list_group_members` | read | List group members |
| `emma_list_members` | read | List members |
| `emma_get_member` | read | Get a member |
| `emma_find_member_by_email` | read | Find a member by email |
| `emma_get_member_groups` | read | Get a member's groups |
| `emma_get_member_mailings` | read | Get a member's mailing history |
| `emma_list_fields` | read | List member fields |
| `emma_get_import` | read | Get an import |
| `emma_list_mailings` | read | List mailings |
| `emma_get_mailing` | read | Get a mailing |
| `emma_list_mailing_members` | read | List a mailing's members |
| `emma_get_response_summary` | read | Account response summary |
| `emma_get_mailing_response` | read | Get a mailing's response |
| `emma_list_mailing_links` | read | List a mailing's link clicks |
| `emma_list_mailing_activity` | read | List mailing activity |
| `emma_list_searches` | read | List saved searches |
| `emma_get_search_members` | read | List a search's members |
| `emma_usage_status` | meta | Usage status (free-tier meter) |
| `emma_request_feature` | meta | Request a missing feature |
| `emma_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `emma_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per connected account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |

Pro covers this server only. Subscribe with `emma_upgrade` (it returns a Stripe Checkout link). Cancel any time with `emma_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `emma_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
