# Fillout MCP by usefulapi

Use [Fillout](https://www.fillout.com) from Claude, Cursor, or any MCP client — read forms and their questions, list, count and export submissions, and create submissions and webhooks.
Hosted, no local install: connect with your own Fillout credentials.

**Live endpoint:** `https://fillout.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/fillout

## Add to Claude

```json
{
  "mcpServers": {
    "fillout": {
      "url": "https://fillout.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Fillout API key** (Settings → Developer) and your data region (US or EU).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fillout_list_forms` | read | List forms |
| `fillout_get_form` | read | Get form questions and metadata |
| `fillout_list_submissions` | read | List submissions |
| `fillout_get_submission` | read | Get one submission |
| `fillout_count_submissions` | read | Count submissions |
| `fillout_export_submissions` | read | Export submissions |
| `fillout_create_submissions` | **write** | Create submissions |
| `fillout_create_webhook` | **write** | Create a submission webhook |
| `fillout_remove_webhook` | **write** | Remove a submission webhook |
| `fillout_usage_status` | meta | Usage status (free-tier meter) |
| `fillout_upgrade` | meta | Upgrade to Pro (unlimited) |
| `fillout_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `fillout_upgrade` (it returns a Stripe Checkout link). Cancel any time with `fillout_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `fillout_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Fillout.
