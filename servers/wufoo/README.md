# Wufoo MCP by usefulapi

Use [Wufoo](https://www.wufoo.com) from Claude, Cursor, or any MCP client — read forms, fields, entries, reports and comments, get entries keyed by the field titles on the form, and submit entries or manage webhooks.
Hosted, no local install: connect with your own Wufoo credentials.

**Live endpoint:** `https://wufoo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/wufoo

## Add to Claude

```json
{
  "mcpServers": {
    "wufoo": {
      "url": "https://wufoo.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Wufoo account subdomain and API key** (Form Manager → Account → API Information).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wufoo_list_forms` | read | List forms |
| `wufoo_get_form` | read | Get one form |
| `wufoo_get_form_fields` | read | Get form fields |
| `wufoo_list_form_entries` | read | List form entries |
| `wufoo_get_labeled_entries` | read | Get entries keyed by field title |
| `wufoo_count_form_entries` | read | Count form entries |
| `wufoo_list_form_comments` | read | List entry comments |
| `wufoo_count_form_comments` | read | Count entry comments |
| `wufoo_list_reports` | read | List reports |
| `wufoo_get_report` | read | Get one report |
| `wufoo_get_report_fields` | read | Get report fields |
| `wufoo_list_report_entries` | read | List report entries |
| `wufoo_count_report_entries` | read | Count report entries |
| `wufoo_list_report_widgets` | read | List report widgets |
| `wufoo_list_users` | read | List account users |
| `wufoo_submit_entry` | **write** | Submit a form entry |
| `wufoo_add_webhook` | **write** | Add a webhook |
| `wufoo_delete_webhook` | **write** | Delete a webhook |
| `wufoo_usage_status` | meta | Usage status (free-tier meter) |
| `wufoo_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by Wufoo.
