# UseResponse MCP by usefulapi

Use your [UseResponse](https://www.useresponse.com) account from Claude, Cursor, or any MCP client. Read tickets, topics, comments, users, communities, reports and live chats, and create tickets or comments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://useresponse.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://useresponse.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http useresponse https://useresponse.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=useresponse&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fuseresponse.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "useresponse": {
      "url": "https://useresponse.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your UseResponse credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/useresponse/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **UseResponse subdomain** (the acme part of acme.useresponse.com) and your **API key** (User profile → Options → API Settings). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `useresponse_get_current_user` | read | Get the current user |
| `useresponse_search_objects` | read | Search tickets and topics |
| `useresponse_list_tickets` | read | List tickets |
| `useresponse_get_object` | read | Get a ticket or topic |
| `useresponse_get_object_comments` | read | List comments on a ticket or topic |
| `useresponse_list_comments` | read | List comments |
| `useresponse_get_object_changelog` | read | Get a ticket or topic history |
| `useresponse_list_object_custom_fields` | read | List ticket and topic custom fields |
| `useresponse_search_users` | read | Search users |
| `useresponse_get_user` | read | Get a user |
| `useresponse_get_user_activity` | read | List a user's objects |
| `useresponse_list_user_custom_fields` | read | List user custom fields |
| `useresponse_list_categories` | read | List categories |
| `useresponse_list_statuses` | read | List statuses |
| `useresponse_list_forums` | read | List communities |
| `useresponse_list_reports` | read | List reports |
| `useresponse_get_report_objects` | read | Get report rows |
| `useresponse_list_chats` | read | List live chats |
| `useresponse_get_chat` | read | Get a live chat |
| `useresponse_get_chat_messages` | read | Get live chat messages |
| `useresponse_create_object` | **write** | Create a ticket or topic |
| `useresponse_create_comment` | **write** | Add a comment |
| `useresponse_usage_status` | meta | Usage status (free-tier meter) |
| `useresponse_request_feature` | meta | Request a missing feature |
| `useresponse_upgrade` | meta | Upgrade to Pro or Pro+ |
| `useresponse_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `useresponse_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `useresponse_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `useresponse_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
