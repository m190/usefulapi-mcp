# Courier MCP by usefulapi

Use your [Courier](https://www.courier.com) account from Claude, Cursor, or any MCP client. It reads messages, templates, brands, lists and preferences, and it can send messages and manage list subscribers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://courier.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://courier.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http courier https://courier.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=courier&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcourier.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "courier": {
      "url": "https://courier.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Courier credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/courier/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Courier API key** (Platform → API Keys in Courier) and your **Courier region** (US or EU). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `courier_list_messages` | read | List messages |
| `courier_get_message` | read | Get a message |
| `courier_get_message_history` | read | Get message history |
| `courier_list_notification_templates` | read | List notification templates |
| `courier_get_notification_template` | read | Get a notification template |
| `courier_list_brands` | read | List brands |
| `courier_get_brand` | read | Get a brand |
| `courier_list_lists` | read | List lists |
| `courier_get_list` | read | Get a list |
| `courier_list_list_subscribers` | read | List subscribers of a list |
| `courier_get_profile` | read | Get a user profile |
| `courier_get_user_preferences` | read | Get user preferences |
| `courier_list_providers` | read | List providers |
| `courier_list_journeys` | read | List journeys |
| `courier_list_broadcasts` | read | List broadcasts |
| `courier_list_automations` | read | List automations |
| `courier_list_tenants` | read | List tenants |
| `courier_list_audit_events` | read | List audit events |
| `courier_send_message` | **write** | Send a message |
| `courier_cancel_message` | **write** | Cancel a message |
| `courier_subscribe_user_to_list` | **write** | Subscribe a user to a list |
| `courier_unsubscribe_user_from_list` | **write** | Unsubscribe a user from a list |
| `courier_invoke_automation` | **write** | Invoke an automation |
| `courier_track_event` | **write** | Track an event |
| `courier_usage_status` | meta | Usage status (free-tier meter) |
| `courier_request_feature` | meta | Request a missing feature |
| `courier_upgrade` | meta | Upgrade to Pro or Pro+ |
| `courier_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `courier_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `courier_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `courier_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
