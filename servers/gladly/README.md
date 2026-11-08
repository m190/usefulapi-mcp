# Gladly MCP by usefulapi

Use your [Gladly](https://www.gladly.com) account from Claude, Cursor, or any MCP client. Find customers, read conversations, items and tasks, and add internal notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://gladly.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gladly.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gladly https://gladly.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gladly&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgladly.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gladly": {
      "url": "https://gladly.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Gladly credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gladly/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Gladly organization**, an **agent email** and an **API token** (Gladly → Settings → API). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gladly_get_organization` | read | Get the organization |
| `gladly_list_agents` | read | List agents |
| `gladly_get_agent` | read | Get an agent |
| `gladly_list_inboxes` | read | List inboxes |
| `gladly_get_inbox` | read | Get an inbox |
| `gladly_list_topics` | read | List topics |
| `gladly_list_audiences` | read | List audiences |
| `gladly_find_customers` | read | Find customers |
| `gladly_get_customer` | read | Get a customer |
| `gladly_list_customer_conversations` | read | List conversations of a customer |
| `gladly_get_conversation` | read | Get a conversation |
| `gladly_list_conversation_items` | read | List the timeline of a conversation |
| `gladly_get_conversation_item` | read | Get a conversation item |
| `gladly_list_customer_tasks` | read | List tasks of a customer |
| `gladly_get_task` | read | Get a task |
| `gladly_add_conversation_note` | **write** | Add an internal note to a conversation |
| `gladly_usage_status` | meta | Usage status (free-tier meter) |
| `gladly_request_feature` | meta | Request a missing feature |
| `gladly_upgrade` | meta | Upgrade to Pro or Pro+ |
| `gladly_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `gladly_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `gladly_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `gladly_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
