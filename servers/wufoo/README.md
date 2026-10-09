# Wufoo MCP by usefulapi

Use [Wufoo](https://www.wufoo.com) from Claude, Cursor, or any MCP client — read forms, fields, entries, reports and comments, get entries keyed by the field titles on the form, and submit entries or manage webhooks.
Hosted, no local install: connect with your own Wufoo credentials.

**Live endpoint:** `https://wufoo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/wufoo

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://wufoo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http wufoo https://wufoo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=wufoo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwufoo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "wufoo": {
      "url": "https://wufoo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Wufoo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/wufoo/

<!-- connect:end (generated above, edit below) -->

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
| `wufoo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `wufoo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `wufoo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `wufoo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Wufoo.
