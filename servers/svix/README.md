# Svix MCP by usefulapi

Send and debug webhooks — applications, endpoints, messages, delivery attempts and replays. Hosted, no local install.

**Live endpoint:** `https://svix.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "svix": {
      "url": "https://svix.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Svix credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `svix_list_applications` | read | List applications |
| `svix_get_application` | read | Get one application |
| `svix_list_endpoints` | read | List endpoints |
| `svix_get_endpoint` | read | Get one endpoint |
| `svix_get_endpoint_stats` | read | Get endpoint delivery stats |
| `svix_list_messages` | read | List messages |
| `svix_get_message` | read | Get one message |
| `svix_list_attempts_by_message` | read | List delivery attempts for a message |
| `svix_list_attempts_by_endpoint` | read | List delivery attempts for an endpoint |
| `svix_list_endpoint_messages` | read | List messages for an endpoint |
| `svix_list_event_types` | read | List event types |
| `svix_get_event_type` | read | Get one event type |
| `svix_list_background_tasks` | read | List background tasks |
| `svix_health` | read | Check API health |
| `svix_create_application` | **write** | Create an application |
| `svix_create_endpoint` | **write** | Create an endpoint |
| `svix_send_message` | **write** | Send a message |
| `svix_resend_message` | **write** | Resend a message to one endpoint |
| `svix_recover_endpoint` | **write** | Recover an endpoint's failed messages |
| `svix_usage_status` | meta | Usage status (free-tier meter) |
| `svix_upgrade` | meta | Upgrade to Pro (unlimited) |
| `svix_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `svix_upgrade` (it returns a Stripe Checkout link). Cancel any time with `svix_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `svix_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
