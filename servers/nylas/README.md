# Nylas MCP by usefulapi

Read your email, calendars, events and contacts, and send email or create events, from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Nylas API key.

**Live endpoint:** `https://nylas.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/nylas

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nylas.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nylas https://nylas.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nylas&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnylas.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nylas": {
      "url": "https://nylas.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Nylas credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nylas/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Nylas API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nylas_list_grants` | read | List grants |
| `nylas_get_grant` | read | Get grant |
| `nylas_list_messages` | read | List messages |
| `nylas_get_message` | read | Get message |
| `nylas_list_folders` | read | List folders |
| `nylas_list_calendars` | read | List calendars |
| `nylas_get_calendar` | read | Get calendar |
| `nylas_list_events` | read | List events |
| `nylas_get_event` | read | Get event |
| `nylas_list_contacts` | read | List contacts |
| `nylas_get_contact` | read | Get contact |
| `nylas_list_drafts` | read | List drafts |
| `nylas_send_message` | **write** | Send message |
| `nylas_create_event` | **write** | Create event |
| `nylas_create_draft` | **write** | Create draft |
| `nylas_usage_status` | meta | Usage status (free-tier meter) |
| `nylas_request_feature` | meta | Request a missing feature |
| `nylas_upgrade` | meta | Upgrade to Pro (unlimited) |
| `nylas_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `nylas_upgrade` (it returns a Stripe Checkout link). Cancel any time with `nylas_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `nylas_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
