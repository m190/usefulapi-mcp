# Text-Em-All MCP by usefulapi

Send and track Text-Em-All broadcasts, texts and contact lists. Hosted, no local install.

**Live endpoint:** `https://text-em-all.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://text-em-all.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http text-em-all https://text-em-all.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=text-em-all&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftext-em-all.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "text-em-all": {
      "url": "https://text-em-all.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Text-Em-All credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/text-em-all/

<!-- connect:end (generated above, edit below) -->

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
| `text_em_all_usage_status` | meta | Usage status (free-tier meter) |
| `text_em_all_request_feature` | meta | Request a missing feature |
| `text_em_all_upgrade` | meta | Upgrade to Pro (unlimited) |
| `text_em_all_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `text_em_all_upgrade` (it returns a Stripe Checkout link). Cancel any time with `text_em_all_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `text_em_all_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
