# LiveAgent MCP by usefulapi

Use your [LiveAgent](https://www.liveagent.com) account from Claude, Cursor, or any MCP client. Read tickets, messages, SLA state, contacts, agents and departments in one LiveAgent help desk, and create or update tickets. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://liveagent.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://liveagent.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http liveagent https://liveagent.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=liveagent&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fliveagent.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "liveagent": {
      "url": "https://liveagent.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your LiveAgent credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/liveagent/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **LiveAgent account name** (the part before .ladesk.com) and an **API v3 key** (Configuration → System → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `liveagent_get_api_privileges` | read | Get API key privileges |
| `liveagent_list_tickets` | read | List tickets |
| `liveagent_get_ticket` | read | Get a ticket |
| `liveagent_get_ticket_messages` | read | Get ticket messages |
| `liveagent_get_ticket_history` | read | Get ticket history |
| `liveagent_get_ticket_sla` | read | Get ticket SLA |
| `liveagent_list_contacts` | read | List contacts |
| `liveagent_get_contact` | read | Get a contact |
| `liveagent_list_agents` | read | List agents |
| `liveagent_get_agent` | read | Get an agent |
| `liveagent_list_departments` | read | List departments |
| `liveagent_list_groups` | read | List agent groups |
| `liveagent_list_companies` | read | List companies |
| `liveagent_list_tags` | read | List tags |
| `liveagent_list_predefined_answers` | read | List predefined answers |
| `liveagent_create_ticket` | **write** | Create a ticket |
| `liveagent_update_ticket` | **write** | Update a ticket |
| `liveagent_usage_status` | meta | Usage status (free-tier meter) |
| `liveagent_request_feature` | meta | Request a missing feature |
| `liveagent_upgrade` | meta | Upgrade to Pro or Pro+ |
| `liveagent_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `liveagent_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `liveagent_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `liveagent_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
