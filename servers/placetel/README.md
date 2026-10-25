# Placetel MCP by usefulapi

Read Placetel calls, recordings, numbers and routing; edit contacts, start calls, send SMS.

**Live endpoint:** `https://placetel.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/placetel

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://placetel.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http placetel https://placetel.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=placetel&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fplacetel.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "placetel": {
      "url": "https://placetel.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Placetel credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/placetel/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste a **Placetel Web API key** (Placetel → **Integrations → Web API**, web.placetel.de/integrations/web_api; an API v1 key works too). The key acts with your account's permissions.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `placetel_get_account` | read | Get account |
| `placetel_list_users` | read | List users |
| `placetel_list_sip_users` | read | List SIP users (extensions) |
| `placetel_get_sip_user` | read | Get SIP user |
| `placetel_list_calls` | read | List incoming calls |
| `placetel_get_call` | read | Get call |
| `placetel_list_call_detail_records` | read | List call detail records |
| `placetel_list_recordings` | read | List call recordings |
| `placetel_list_contacts` | read | List contacts |
| `placetel_get_contact` | read | Get contact |
| `placetel_list_numbers` | read | List phone numbers |
| `placetel_get_number` | read | Get phone number |
| `placetel_list_number_profiles` | read | List number profiles |
| `placetel_list_routings` | read | List routings |
| `placetel_get_routing` | read | Get routing |
| `placetel_list_routing_plans` | read | List routing plans |
| `placetel_list_groups` | read | List groups |
| `placetel_list_sites` | read | List sites |
| `placetel_list_faxes` | read | List faxes |
| `placetel_get_fax` | read | Get fax |
| `placetel_list_call_center_queues` | read | List call center queues |
| `placetel_list_call_center_agents` | read | List call center agents |
| `placetel_list_call_center_calls` | read | List call center calls |
| `placetel_create_contact` | **write** | Create contact |
| `placetel_update_contact` | **write** | Update contact |
| `placetel_activate_number_profile` | **write** | Activate number profile |
| `placetel_initiate_call` | **write** | Initiate call |
| `placetel_send_sms` | **write** | Send SMS |
| `placetel_usage_status` | meta | Usage status (free-tier meter) |
| `placetel_request_feature` | meta | Request a missing feature |
| `placetel_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `placetel_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `placetel_upgrade` (it returns a Stripe Checkout link). Cancel any time with `placetel_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `placetel_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
