# SleekFlow MCP by usefulapi

Use your [SleekFlow](https://sleekflow.io) account from Claude, Cursor, or any MCP client. Read conversations, contacts, staff and broadcasts, and send messages and notes, and manage labels. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sleekflow.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sleekflow.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sleekflow https://sleekflow.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sleekflow&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsleekflow.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sleekflow": {
      "url": "https://sleekflow.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SleekFlow credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sleekflow/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **SleekFlow Platform API key**, found under Channels → Add integrations → API in SleekFlow. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sleekflow_list_contacts` | read | List contacts |
| `sleekflow_get_contact` | read | Get a contact |
| `sleekflow_list_conversations` | read | List conversations |
| `sleekflow_get_conversation` | read | Get a conversation |
| `sleekflow_list_messages` | read | List messages in a conversation |
| `sleekflow_search_messages` | read | Search messages |
| `sleekflow_list_channels` | read | List connected channels |
| `sleekflow_list_staff` | read | List staff |
| `sleekflow_get_staff` | read | Get a staff member |
| `sleekflow_list_teams` | read | List teams |
| `sleekflow_get_team` | read | Get a team |
| `sleekflow_list_labels` | read | List labels |
| `sleekflow_list_contact_lists` | read | List contact lists |
| `sleekflow_get_contact_list` | read | Get a contact list |
| `sleekflow_list_broadcasts` | read | List broadcasts |
| `sleekflow_get_broadcast` | read | Get a broadcast |
| `sleekflow_get_broadcast_recipients` | read | List broadcast recipients |
| `sleekflow_get_analytics` | read | Get conversation analytics |
| `sleekflow_send_message` | **write** | Send a message to a contact |
| `sleekflow_send_internal_note` | **write** | Add an internal note |
| `sleekflow_add_or_update_contacts` | **write** | Add or update contacts |
| `sleekflow_update_contact` | **write** | Update a contact |
| `sleekflow_assign_conversation` | **write** | Assign a conversation |
| `sleekflow_add_contacts_to_list` | **write** | Add contacts to a list |
| `sleekflow_create_labels` | **write** | Create labels |
| `sleekflow_usage_status` | meta | Usage status (free-tier meter) |
| `sleekflow_request_feature` | meta | Request a missing feature |
| `sleekflow_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sleekflow_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sleekflow_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sleekflow_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sleekflow_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
