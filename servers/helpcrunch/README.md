# HelpCrunch MCP by usefulapi

Manage HelpCrunch chats, customers, agents and knowledge-base articles. Hosted, no local install.

**Live endpoint:** `https://helpcrunch.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://helpcrunch.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http helpcrunch https://helpcrunch.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=helpcrunch&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhelpcrunch.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "helpcrunch": {
      "url": "https://helpcrunch.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/helpcrunch/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **HelpCrunch credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `helpcrunch_list_customers` | read | List customers |
| `helpcrunch_get_customer` | read | Get customer |
| `helpcrunch_list_chats` | read | List chats |
| `helpcrunch_get_chat` | read | Get chat |
| `helpcrunch_get_chat_messages` | read | Get chat messages |
| `helpcrunch_list_agents` | read | List agents |
| `helpcrunch_list_departments` | read | List departments |
| `helpcrunch_list_applications` | read | List applications |
| `helpcrunch_get_organization` | read | Get organization |
| `helpcrunch_create_message` | **write** | Create message |
| `helpcrunch_update_chat_status` | **write** | Update chat status |
| `helpcrunch_assign_chat` | **write** | Assign chat |
| `helpcrunch_usage_status` | meta | Usage status (free-tier meter) |
| `helpcrunch_upgrade` | meta | Upgrade to Pro (unlimited) |
| `helpcrunch_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `helpcrunch_upgrade` (it returns a Stripe Checkout link). Cancel any time with `helpcrunch_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `helpcrunch_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
