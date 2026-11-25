# Kizeo Forms MCP by usefulapi

Use your [Kizeo Forms](https://www.kizeoforms.com) account from Claude, Cursor, or any MCP client. Read forms, form definitions, submitted data, users, groups and external lists, and mark submitted data as read. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://kizeo-forms.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kizeo-forms.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kizeo-forms https://kizeo-forms.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kizeo-forms&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkizeo-forms.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kizeo-forms": {
      "url": "https://kizeo-forms.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Kizeo Forms credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kizeo-forms/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Kizeo Forms API token**, created in your Kizeo Forms account, which needs an active licence. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kizeo_list_forms` | read | List forms |
| `kizeo_get_form` | read | Get a form definition |
| `kizeo_search_form_data` | read | Search form data |
| `kizeo_get_form_data` | read | Get one data record |
| `kizeo_get_unread_data` | read | Get unread data |
| `kizeo_mark_data_read` | **write** | Mark data as read |
| `kizeo_list_users` | read | List users |
| `kizeo_list_groups` | read | List groups |
| `kizeo_list_external_lists` | read | List external lists |
| `kizeo_get_external_list` | read | Get an external list |
| `kizeo_usage_status` | meta | Usage status (free-tier meter) |
| `kizeo_request_feature` | meta | Request a missing feature |
| `kizeo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `kizeo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `kizeo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `kizeo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `kizeo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
