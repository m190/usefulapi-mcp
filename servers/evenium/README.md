# Evenium MCP by usefulapi

**Live endpoint:** `https://evenium.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://evenium.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http evenium https://evenium.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=evenium&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fevenium.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "evenium": {
      "url": "https://evenium.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Evenium credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/evenium/

<!-- connect:end (generated above, edit below) -->

On first connect you will paste your **Evenium API key**. It is validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `evenium_list_events` | read | List events |
| `evenium_get_event` | read | Get event |
| `evenium_list_guests` | read | List guests |
| `evenium_get_guest` | read | Get guest |
| `evenium_get_guest_status` | read | Get guest status |
| `evenium_get_guest_post_status` | read | Get guest attendance |
| `evenium_get_guest_accommodations` | read | Get guest accommodations |
| `evenium_list_hotels` | read | List hotels |
| `evenium_create_guest` | **write** | Create guest |
| `evenium_update_guest_status` | **write** | Update guest status |
| `evenium_update_guest_post_status` | **write** | Update guest attendance |
| `evenium_list_contacts` | read | List contacts |
| `evenium_get_contact` | read | Get contact |
| `evenium_get_contact_events` | read | Get contact events |
| `evenium_create_contact` | **write** | Create contact |
| `evenium_update_contact` | **write** | Update contact |
| `evenium_list_event_parts` | read | List event sessions |
| `evenium_get_event_part` | read | Get event session |
| `evenium_list_event_part_registrations` | read | List session registrations |
| `evenium_usage_status` | meta | Usage status (free-tier meter) |
| `evenium_request_feature` | meta | Request a missing feature |
| `evenium_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `evenium_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `evenium_upgrade` (it returns a Stripe Checkout link). Cancel any time with `evenium_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `evenium_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
