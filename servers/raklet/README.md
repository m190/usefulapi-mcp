# Raklet MCP by usefulapi

Use your [Raklet](https://www.raklet.com) account from Claude, Cursor, or any MCP client. Read members, tags, events, news posts, plans, payments and the action log, and create contacts or news posts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://raklet.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://raklet.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http raklet https://raklet.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=raklet&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fraklet.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "raklet": {
      "url": "https://raklet.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Raklet credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/raklet/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Raklet Organisation ID** and **Raklet API token**, both shown under Settings → Zapier API Tokens in the Raklet admin panel. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `raklet_get_account` | read | Get the connected organisation |
| `raklet_list_languages` | read | List languages |
| `raklet_list_contacts` | read | List contacts |
| `raklet_get_contact` | read | Get a contact |
| `raklet_create_contact` | **write** | Create a contact |
| `raklet_list_corporate_members` | read | List corporate members |
| `raklet_list_tags` | read | List tags |
| `raklet_get_tag` | read | Get a tag |
| `raklet_list_events` | read | List events |
| `raklet_get_event` | read | Get an event |
| `raklet_list_event_ticket_options` | read | List event ticket options |
| `raklet_list_posts` | read | List posts |
| `raklet_get_post` | read | Get a post |
| `raklet_create_post` | **write** | Create a news post |
| `raklet_list_membership_plans` | read | List membership plans |
| `raklet_list_subscriptions` | read | List subscriptions |
| `raklet_list_payments` | read | List payments |
| `raklet_list_debts` | read | List debts |
| `raklet_list_donations` | read | List donations |
| `raklet_list_applications` | read | List membership applications |
| `raklet_get_organisation_settings` | read | Get organisation settings |
| `raklet_list_action_logs` | read | List action logs |
| `raklet_usage_status` | meta | Usage status (free-tier meter) |
| `raklet_request_feature` | meta | Request a missing feature |
| `raklet_upgrade` | meta | Upgrade to Pro or Pro+ |
| `raklet_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `raklet_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `raklet_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `raklet_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
