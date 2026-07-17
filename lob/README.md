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
| `lob_verify_us_address` | read | Validate & standardize a US address |
| `lob_verify_intl_address` | read | Validate & standardize an international address |
| `lob_us_zip_lookup` | read | Cities and state for a US ZIP code |
| `lob_us_autocomplete` | read | Autocomplete US addresses from a partial line |
| `lob_list_postcards` | read | List sent/scheduled postcards |
| `lob_get_postcard` | read | Get a postcard — status, PDF, delivery |
| `lob_list_letters` | read | List sent/scheduled letters |
| `lob_get_letter` | read | Get a letter — status, PDF, tracking |
| `lob_list_checks` | read | List sent/scheduled checks |
| `lob_get_check` | read | Get a check — amount, status, number |
| `lob_list_addresses` | read | List saved address records |
| `lob_get_address` | read | Get a saved address record |
| `lob_list_templates` | read | List saved HTML templates |
| `lob_create_address` | **write** | Save a reusable address record (sends no mail) |
| `lob_create_postcard` | **write** | Send a real postcard (test_ key avoids charges) |
| `lob_create_letter` | **write** | Send a real letter (test_ key avoids charges) |
| `lob_cancel_postcard` | **write** | Cancel a scheduled postcard before it mails |
| `lob_usage_status` | meta | Your tier + usage this month |
| `lob_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
