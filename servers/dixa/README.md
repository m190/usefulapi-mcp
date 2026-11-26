# Dixa MCP by usefulapi

Use your [Dixa](https://www.dixa.com) account from Claude, Cursor, or any MCP client. Read conversations, customers, agents and queues, and add internal notes, tags or status changes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://dixa.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://dixa.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http dixa https://dixa.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=dixa&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdixa.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "dixa": {
      "url": "https://dixa.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Dixa credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/dixa/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Dixa API token** (created in the Dixa admin interface). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dixa_get_organization` | read | Get organization |
| `dixa_search_conversations` | read | Search conversations |
| `dixa_get_conversation` | read | Get a conversation |
| `dixa_list_conversation_messages` | read | List conversation messages |
| `dixa_list_conversation_notes` | read | List internal notes |
| `dixa_list_conversation_tags` | read | List conversation tags |
| `dixa_list_conversation_ratings` | read | List conversation ratings |
| `dixa_get_conversation_activity` | read | Get conversation activity log |
| `dixa_list_flows` | read | List conversation flows |
| `dixa_list_end_users` | read | List end users |
| `dixa_get_end_user` | read | Get an end user |
| `dixa_list_end_user_conversations` | read | List an end user's conversations |
| `dixa_list_agents` | read | List agents |
| `dixa_get_agent` | read | Get an agent |
| `dixa_list_agents_presence` | read | List agent presence |
| `dixa_list_teams` | read | List teams |
| `dixa_get_team` | read | Get a team |
| `dixa_list_team_members` | read | List team members |
| `dixa_list_queues` | read | List queues |
| `dixa_get_queue` | read | Get a queue |
| `dixa_list_tags` | read | List tags |
| `dixa_list_custom_attributes` | read | List custom attribute definitions |
| `dixa_list_business_hours_schedules` | read | List business hours schedules |
| `dixa_get_business_hours_status` | read | Check if business is open |
| `dixa_list_knowledge_collections` | read | List knowledge collections |
| `dixa_get_knowledge_article` | read | Get a knowledge article |
| `dixa_add_internal_note` | **write** | Add internal note |
| `dixa_close_conversation` | **write** | Close conversation |
| `dixa_reopen_conversation` | **write** | Reopen conversation |
| `dixa_tag_conversation` | **write** | Tag conversation |
| `dixa_untag_conversation` | **write** | Untag conversation |
| `dixa_usage_status` | meta | Usage status (free-tier meter) |
| `dixa_request_feature` | meta | Request a missing feature |
| `dixa_upgrade` | meta | Upgrade to Pro or Pro+ |
| `dixa_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `dixa_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `dixa_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `dixa_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
