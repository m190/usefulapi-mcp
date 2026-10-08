# Missive MCP by usefulapi

Manage [Missive](https://missiveapp.com) collaborative email and chat from Claude, Cursor, or any MCP
client — read conversations, messages, comments, drafts and contacts, and create drafts, send email,
and update conversations. Hosted, no local install: connect with your Missive API token.

**Live endpoint:** `https://missive.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://missive.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http missive https://missive.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=missive&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmissive.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "missive": {
      "url": "https://missive.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/missive/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Missive API token** (Missive → Preferences → API → Create a new
token; requires a Productive plan). It's validated, stored per-user, and scoped to you — no keys in
config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `missive_list_conversations` | read | List conversations |
| `missive_get_conversation` | read | Get conversation |
| `missive_list_conversation_messages` | read | List conversation messages |
| `missive_get_message` | read | Get message |
| `missive_list_conversation_comments` | read | List conversation comments |
| `missive_list_conversation_drafts` | read | List conversation drafts |
| `missive_list_conversation_posts` | read | List conversation posts |
| `missive_list_contacts` | read | List contacts |
| `missive_get_contact` | read | Get contact |
| `missive_list_contact_books` | read | List contact books |
| `missive_list_contact_groups` | read | List contact groups |
| `missive_list_teams` | read | List teams |
| `missive_list_users` | read | List users |
| `missive_list_shared_labels` | read | List shared labels |
| `missive_list_organizations` | read | List organizations |
| `missive_list_responses` | read | List responses |
| `missive_create_draft` | **write** | Create draft |
| `missive_update_conversation` | **write** | Update conversation |
| `missive_create_contact` | **write** | Create contact |
| `missive_usage_status` | meta | Usage status (free-tier meter) |
| `missive_upgrade` | meta | Upgrade to Pro (unlimited) |
| `missive_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `missive_upgrade` (it returns a Stripe Checkout link). Cancel any time with `missive_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `missive_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
