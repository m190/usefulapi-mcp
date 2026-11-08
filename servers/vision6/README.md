# Vision6 MCP by usefulapi

Read Vision6 lists, contacts, messages and reports; update contacts; send transactional email/SMS.

**Live endpoint:** `https://vision6.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/vision6

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://vision6.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http vision6 https://vision6.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=vision6&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvision6.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "vision6": {
      "url": "https://vision6.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Vision6 credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/vision6/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your Vision6 **REST API endpoint** and a REST-compatible **API key** (both shown in Vision6 under Integrations → API Keys).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `vision6_get_account` | read | Get API key details |
| `vision6_list_lists` | read | List contact lists |
| `vision6_get_list` | read | Get a contact list |
| `vision6_list_list_fields` | read | List a list's fields |
| `vision6_list_folders` | read | List folders |
| `vision6_list_contacts` | read | List contacts |
| `vision6_get_contact` | read | Get a contact |
| `vision6_list_messages` | read | List messages |
| `vision6_get_message` | read | Get a message |
| `vision6_get_message_sender_defaults` | read | Get default sender details |
| `vision6_list_reports` | read | List send reports |
| `vision6_get_report` | read | Get a send report |
| `vision6_list_sent_contacts` | read | List contacts a message was sent to |
| `vision6_list_transactional_groups` | read | List transactional groups |
| `vision6_get_transactional_group` | read | Get a transactional group |
| `vision6_create_contact` | **write** | Create a contact |
| `vision6_add_contacts` | **write** | Add several contacts |
| `vision6_update_contact` | **write** | Update a contact |
| `vision6_delete_contact` | **write** | Delete a contact |
| `vision6_create_list` | **write** | Create a contact list |
| `vision6_create_message` | **write** | Create a message (draft) |
| `vision6_update_message` | **write** | Update a message |
| `vision6_send_transactional` | **write** | Send a transactional email or SMS |
| `vision6_usage_status` | meta | Usage status (free-tier meter) |
| `vision6_request_feature` | meta | Request a missing feature |
| `vision6_upgrade` | meta | Upgrade to Pro or Pro+ |
| `vision6_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `vision6_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `vision6_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `vision6_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Vision6.
