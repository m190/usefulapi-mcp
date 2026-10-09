# Formstack MCP by usefulapi

Use [Formstack](https://www.formstack.com) from Claude, Cursor, or any MCP client — browse forms, submissions and webhooks, search responses, and create or update submissions.
Hosted, no local install: connect with your own Formstack credentials.

**Live endpoint:** `https://formstack.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/formstack

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://formstack.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http formstack https://formstack.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=formstack&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fformstack.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "formstack": {
      "url": "https://formstack.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Formstack credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/formstack/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Formstack Personal Access Token** (account menu → API → Personal Access Tokens, starts with `fs_pat_`).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `formstack_list_forms` | read | List forms |
| `formstack_get_form` | read | Get one form |
| `formstack_list_form_fields` | read | List a form's fields |
| `formstack_list_form_submissions` | read | List a form's submissions |
| `formstack_count_form_submissions` | read | Count a form's submissions |
| `formstack_search_submissions` | read | Search submissions across all forms |
| `formstack_get_submission` | read | Get one submission |
| `formstack_list_partial_submissions` | read | List a form's partial submissions |
| `formstack_list_folders` | read | List folders |
| `formstack_get_folder` | read | Get one folder |
| `formstack_list_webhooks` | read | List a form's webhooks |
| `formstack_list_notification_emails` | read | List a form's notification emails |
| `formstack_list_confirmation_emails` | read | List a form's confirmation emails |
| `formstack_list_submit_actions` | read | List a form's submit actions |
| `formstack_create_submission` | **write** | Create a submission |
| `formstack_update_submission` | **write** | Update a submission |
| `formstack_create_prefill_url` | **write** | Create a prefilled form link |
| `formstack_update_form` | **write** | Update a form's settings |
| `formstack_create_folder` | **write** | Create a folder |
| `formstack_create_webhook` | **write** | Create a webhook |
| `formstack_usage_status` | meta | Usage status (free-tier meter) |
| `formstack_upgrade` | meta | Upgrade to Pro (unlimited) |
| `formstack_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `formstack_upgrade` (it returns a Stripe Checkout link). Cancel any time with `formstack_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `formstack_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Formstack.
