# Loops MCP by usefulapi

Manage Loops contacts, mailing lists, and transactional & event emails from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Loops API key.

**Live endpoint:** `https://loops.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/loops

## Add to Claude

```json
{
  "mcpServers": {
    "loops": {
      "url": "https://loops.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Loops API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `loops_test_api_key` | read | Test API key |
| `loops_find_contact` | read | Find a contact |
| `loops_list_contact_properties` | read | List contact properties |
| `loops_list_mailing_lists` | read | List mailing lists |
| `loops_create_contact` | **write** | Create a contact |
| `loops_update_contact` | **write** | Update a contact |
| `loops_delete_contact` | **write** | Delete a contact |
| `loops_create_contact_property` | **write** | Create a contact property |
| `loops_send_event` | **write** | Send an event |
| `loops_send_transactional` | **write** | Send a transactional email |
| `loops_usage_status` | meta | Usage status (free-tier meter) |
| `loops_upgrade` | meta | Upgrade to Pro (unlimited) |
| `loops_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `loops_upgrade` (it returns a Stripe Checkout link). Cancel any time with `loops_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `loops_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
