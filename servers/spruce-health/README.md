# Spruce Health MCP by usefulapi

Use [Spruce Health](https://www.sprucehealth.com) from Claude, Cursor, or any MCP client — read Spruce Health contacts, conversations, messages, phone lines and team members (read-only).
Hosted, no local install: connect with your own Spruce Health credentials.

**Live endpoint:** `https://spruce-health.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/spruce-health

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://spruce-health.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http spruce-health https://spruce-health.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spruce-health&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fspruce-health.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "spruce-health": {
      "url": "https://spruce-health.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/spruce-health/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Spruce API token**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sprucehealth_get_organization` | read | Get the organization |
| `sprucehealth_list_members` | read | List organization members |
| `sprucehealth_get_member` | read | Get an organization member |
| `sprucehealth_list_team_members` | read | List a team's members |
| `sprucehealth_list_contacts` | read | List contacts |
| `sprucehealth_search_contacts` | read | Search contacts |
| `sprucehealth_get_contact` | read | Get a contact |
| `sprucehealth_list_contact_conversations` | read | List a contact's conversations |
| `sprucehealth_list_contact_integration_links` | read | List a contact's integration links |
| `sprucehealth_list_contact_tags` | read | List contact tags |
| `sprucehealth_list_contact_fields` | read | List organization contact fields |
| `sprucehealth_list_conversations` | read | List conversations |
| `sprucehealth_get_conversation` | read | Get a conversation |
| `sprucehealth_list_conversation_items` | read | List conversation messages |
| `sprucehealth_get_conversation_item` | read | Get a conversation message |
| `sprucehealth_list_read_receipts` | read | List a message's read receipts |
| `sprucehealth_get_transcription` | read | Get a call or voicemail transcription |
| `sprucehealth_list_conversation_tags` | read | List conversation tags |
| `sprucehealth_list_conversation_scheduled_messages` | read | List a conversation's scheduled messages |
| `sprucehealth_list_scheduled_messages` | read | List scheduled messages |
| `sprucehealth_list_saved_messages` | read | List saved messages |
| `sprucehealth_list_internal_endpoints` | read | List internal endpoints |
| `sprucehealth_list_phone_lines` | read | List phone lines |
| `sprucehealth_get_phone_line` | read | Get a phone line |
| `sprucehealth_usage_status` | meta | Usage status (free-tier meter) |
| `sprucehealth_upgrade` | meta | Upgrade to Pro (unlimited) |
| `sprucehealth_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per organization) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `sprucehealth_upgrade` (it returns a Stripe Checkout link). Cancel any time with `sprucehealth_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `sprucehealth_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Spruce Health.
