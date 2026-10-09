# Aircall MCP by usefulapi

Use your [Aircall](https://aircall.io) account from Claude, Cursor, or any MCP client — read calls, contacts, users, teams and numbers, and tag calls or create and update contacts. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://aircall.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://aircall.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http aircall https://aircall.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=aircall&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faircall.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "aircall": {
      "url": "https://aircall.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Aircall credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/aircall/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Aircall API ID** and **API token** (Integrations & API → API Keys). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `aircall_ping` | read | Ping |
| `aircall_get_company` | read | Get company |
| `aircall_list_users` | read | List users |
| `aircall_get_user` | read | Get user |
| `aircall_list_calls` | read | List calls |
| `aircall_get_call` | read | Get call |
| `aircall_search_calls` | read | Search calls |
| `aircall_list_numbers` | read | List numbers |
| `aircall_get_number` | read | Get number |
| `aircall_list_contacts` | read | List contacts |
| `aircall_get_contact` | read | Get contact |
| `aircall_search_contacts` | read | Search contacts |
| `aircall_list_tags` | read | List tags |
| `aircall_get_tag` | read | Get tag |
| `aircall_list_teams` | read | List teams |
| `aircall_get_team` | read | Get team |
| `aircall_get_call_transcription` | read | Get call transcription |
| `aircall_get_call_sentiments` | read | Get call sentiments |
| `aircall_get_call_topics` | read | Get call topics |
| `aircall_get_call_summary` | read | Get call summary |
| `aircall_get_call_action_items` | read | Get call action items |
| `aircall_create_contact` | **write** | Create contact |
| `aircall_update_contact` | **write** | Update contact |
| `aircall_add_call_comment` | **write** | Add call comment |
| `aircall_tag_call` | **write** | Tag call |
| `aircall_usage_status` | meta | Usage status (free-tier meter) |
| `aircall_upgrade` | meta | Upgrade to Pro (unlimited) |
| `aircall_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `aircall_upgrade` (it returns a Stripe Checkout link). Cancel any time with `aircall_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `aircall_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
