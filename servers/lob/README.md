# Lob MCP by usefulapi

Verify addresses and send physical mail via Lob, from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Lob API key.

**Live endpoint:** `https://lob.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/lob

## Add to Claude

```json
{
  "mcpServers": {
    "lob": {
      "url": "https://lob.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Lob API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lob_verify_us_address` | read | Verify a US address |
| `lob_verify_intl_address` | read | Verify an international address |
| `lob_us_zip_lookup` | read | Look up a US ZIP code |
| `lob_us_autocomplete` | read | Autocomplete a US address |
| `lob_list_postcards` | read | List postcards |
| `lob_get_postcard` | read | Get a postcard |
| `lob_list_letters` | read | List letters |
| `lob_get_letter` | read | Get a letter |
| `lob_list_checks` | read | List checks |
| `lob_get_check` | read | Get a check |
| `lob_list_self_mailers` | read | List self-mailers |
| `lob_list_addresses` | read | List saved addresses |
| `lob_get_address` | read | Get a saved address |
| `lob_list_templates` | read | List templates |
| `lob_create_address` | **write** | Save an address record |
| `lob_create_postcard` | **write** | Send a postcard (COSTS MONEY) |
| `lob_create_letter` | **write** | Send a letter (COSTS MONEY) |
| `lob_cancel_postcard` | **write** | Cancel a scheduled postcard |
| `lob_usage_status` | meta | Usage status (free-tier meter) |
| `lob_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
