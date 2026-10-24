# DialMyCalls MCP by usefulapi

Manage DialMyCalls contacts and groups; read broadcasts; send text and voice broadcasts on approval.

**Live endpoint:** `https://dialmycalls.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/dialmycalls

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://dialmycalls.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http dialmycalls https://dialmycalls.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=dialmycalls&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdialmycalls.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "dialmycalls": {
      "url": "https://dialmycalls.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your DialMyCalls credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/dialmycalls/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your DialMyCalls **API key** (log in, then API Info).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dialmycalls_get_account` | read | Get DialMyCalls account |
| `dialmycalls_list_contacts` | read | List contacts |
| `dialmycalls_list_contacts_in_group` | read | List contacts in a group |
| `dialmycalls_get_contact` | read | Get a contact |
| `dialmycalls_create_contact` | **write** | Create a contact |
| `dialmycalls_update_contact` | **write** | Update a contact |
| `dialmycalls_list_groups` | read | List contact groups |
| `dialmycalls_get_group` | read | Get a contact group |
| `dialmycalls_create_group` | **write** | Create a contact group |
| `dialmycalls_list_recordings` | read | List voice recordings |
| `dialmycalls_get_recording` | read | Get a recording |
| `dialmycalls_create_recording_tts` | **write** | Create a text-to-speech recording |
| `dialmycalls_list_caller_ids` | read | List caller IDs |
| `dialmycalls_list_keywords` | read | List text keywords |
| `dialmycalls_list_shortcodes` | read | List shortcodes |
| `dialmycalls_list_do_not_contacts` | read | List do-not-contact numbers |
| `dialmycalls_list_calls` | read | List call broadcasts |
| `dialmycalls_get_call` | read | Get a call broadcast |
| `dialmycalls_list_call_recipients` | read | List call recipients |
| `dialmycalls_send_call` | **write** | Send a voice call broadcast (spends credits) |
| `dialmycalls_cancel_call` | **write** | Cancel a call broadcast |
| `dialmycalls_list_texts` | read | List text broadcasts |
| `dialmycalls_get_text` | read | Get a text broadcast |
| `dialmycalls_list_text_recipients` | read | List text recipients |
| `dialmycalls_send_text` | **write** | Send a text (SMS) broadcast (spends credits) |
| `dialmycalls_cancel_text` | **write** | Cancel a text broadcast |
| `dialmycalls_list_incoming_texts` | read | List incoming texts |
| `dialmycalls_get_incoming_text` | read | Get an incoming text |
| `dialmycalls_usage_status` | meta | Usage status (free-tier meter) |
| `dialmycalls_request_feature` | meta | Request a missing feature |
| `dialmycalls_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `dialmycalls_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `dialmycalls_upgrade` (it returns a Stripe Checkout link). Cancel any time with `dialmycalls_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `dialmycalls_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by DialMyCalls.
