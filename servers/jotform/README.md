# Jotform MCP by usefulapi

Use your [Jotform](https://www.jotform.com) account from Claude, Cursor, or any MCP client. Read forms, submissions, uploads, webhooks, reports and labels, and create labels or clone forms. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://jotform.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://jotform.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http jotform https://jotform.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=jotform&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjotform.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "jotform": {
      "url": "https://jotform.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Jotform credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/jotform/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Jotform API key** (My Account → API) and your **account region** (US or EU). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `jotform_get_user` | read | Get account |
| `jotform_get_usage` | read | Get monthly usage |
| `jotform_list_forms` | read | List forms |
| `jotform_get_form` | read | Get a form |
| `jotform_get_form_question` | read | Get a form question |
| `jotform_list_form_files` | read | List form uploads |
| `jotform_list_form_webhooks` | read | List form webhooks |
| `jotform_list_form_submissions` | read | List a form's submissions |
| `jotform_list_user_submissions` | read | List submissions across forms |
| `jotform_get_submission` | read | Get a submission |
| `jotform_list_labels` | read | List labels |
| `jotform_get_label` | read | Get a label |
| `jotform_list_label_resources` | read | List label resources |
| `jotform_list_form_reports` | read | List form reports |
| `jotform_get_report` | read | Get a report |
| `jotform_create_label` | **write** | Create a label |
| `jotform_clone_form` | **write** | Clone a form |
| `jotform_usage_status` | meta | Usage status (free-tier meter) |
| `jotform_request_feature` | meta | Request a missing feature |
| `jotform_upgrade` | meta | Upgrade to Pro or Pro+ |
| `jotform_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `jotform_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `jotform_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `jotform_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
