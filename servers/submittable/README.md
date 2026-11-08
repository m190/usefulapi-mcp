# Submittable MCP by usefulapi

Use your [Submittable](https://www.submittable.com) account from Claude, Cursor, or any MCP client. Read your projects, forms, submissions, the submitted answers, labels and team members. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://submittable.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://submittable.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http submittable https://submittable.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=submittable&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsubmittable.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "submittable": {
      "url": "https://submittable.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Submittable credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/submittable/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your organization **API key**. An organization admin turns on API access under **More → Integrations → API Access** and copies the key. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `submittable_get_organization` | read | Get organization |
| `submittable_list_projects` | read | List projects |
| `submittable_get_project` | read | Get project |
| `submittable_list_forms` | read | List forms |
| `submittable_get_form` | read | Get form |
| `submittable_list_submissions` | read | List submissions |
| `submittable_get_submission` | read | Get submission |
| `submittable_get_entry` | read | Get form entry |
| `submittable_list_form_entries` | read | List form entries |
| `submittable_list_labels` | read | List labels |
| `submittable_list_team_members` | read | List team members |
| `submittable_usage_status` | meta | Usage status (free-tier meter) |
| `submittable_request_feature` | meta | Request a missing feature |
| `submittable_upgrade` | meta | Upgrade to Pro or Pro+ |
| `submittable_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `submittable_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `submittable_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `submittable_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
