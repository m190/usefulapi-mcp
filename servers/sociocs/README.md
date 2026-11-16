# Sociocs MCP by usefulapi

Use your [Sociocs](https://sociocs.com/) account from Claude, Cursor, or any MCP client. Read contacts and messages, send SMS or WhatsApp messages, and delete scheduled ones. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sociocs.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sociocs.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sociocs https://sociocs.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sociocs&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsociocs.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sociocs": {
      "url": "https://sociocs.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sociocs credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sociocs/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Sociocs API key**, found in Sociocs under Profile & settings → API. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sociocs_list_channels` | read | List channels |
| `sociocs_get_channel` | read | Get a channel |
| `sociocs_list_contact_lists` | read | List contact lists |
| `sociocs_list_contacts` | read | List contacts |
| `sociocs_search_contacts` | read | Search contacts |
| `sociocs_get_contact` | read | Get a contact |
| `sociocs_list_messages` | read | List messages by date |
| `sociocs_search_messages` | read | Search messages |
| `sociocs_list_unreplied_messages` | read | List unreplied messages |
| `sociocs_list_scheduled_messages` | read | List scheduled messages |
| `sociocs_list_bulk_jobs` | read | List bulk messaging jobs |
| `sociocs_list_team_members` | read | List team members |
| `sociocs_list_webhook_subscriptions` | read | List webhook subscriptions |
| `sociocs_send_message` | **write** | Send a message |
| `sociocs_delete_scheduled_message` | **write** | Delete a scheduled message |
| `sociocs_usage_status` | meta | Usage status (free-tier meter) |
| `sociocs_request_feature` | meta | Request a missing feature |
| `sociocs_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sociocs_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sociocs_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sociocs_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sociocs_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
