# Text-Em-All MCP by usefulapi

Send and track Text-Em-All broadcasts, texts and contact lists. Hosted, no local install.

**Live endpoint:** `https://text-em-all.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "text-em-all": {
      "url": "https://text-em-all.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Text-Em-All credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `get_account` | read | Get account settings |
| `list_broadcasts` | read | List broadcasts |
| `get_broadcast` | read | Get a broadcast |
| `get_broadcast_details` | read | Get broadcast delivery details |
| `list_text_numbers` | read | List text numbers |
| `list_lists` | read | List contact lists |
| `get_authorization_token` | read | Get a user authorization token |
| `get_conversations_sso_url` | read | Get a single-sign-on conversations URL |
| `textemall_request` | read | Raw read request |
| `create_broadcast` | **write** | Send a broadcast |
| `send_text_message` | **write** | Send a conversation text |
| `create_draft_broadcast` | **write** | Create a draft broadcast |
| `add_account_user` | **write** | Add an account user |
| `update_account_user` | **write** | Update an account user |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
