# HelpCrunch MCP by usefulapi

Manage HelpCrunch chats, customers, agents and knowledge-base articles. Hosted, no local install.

**Live endpoint:** `https://helpcrunch.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "helpcrunch": {
      "url": "https://helpcrunch.usefulapi.io/mcp"
    }
  }
}
```

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

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
