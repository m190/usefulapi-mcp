# Homerun MCP by usefulapi

Use [Homerun](https://www.homerun.co) from Claude, Cursor, or any MCP client — vacancies, job applications, notes and tags, plus single-application stage moves and notes.
Hosted, no local install: connect with your own Homerun credentials.

**Live endpoint:** `https://homerun.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/homerun

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://homerun.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http homerun https://homerun.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=homerun&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhomerun.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "homerun": {
      "url": "https://homerun.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Homerun credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/homerun/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `homerun_list_vacancies` | read | List vacancies |
| `homerun_get_vacancy` | read | Get vacancy |
| `homerun_list_applications` | read | List applications (candidates) |
| `homerun_get_application` | read | Get application (candidate) |
| `homerun_list_notes` | read | List application notes |
| `homerun_list_tags` | read | List tags |
| `homerun_list_application_tags` | read | List an application's tags |
| `homerun_move_application_to_stage` | **write** | Move application to a stage |
| `homerun_add_note` | **write** | Add a note to an application |
| `homerun_usage_status` | meta | Usage status (free-tier meter) |
| `homerun_request_feature` | meta | Request a missing feature |
| `homerun_upgrade` | meta | Upgrade to Pro or Pro+ |
| `homerun_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `homerun_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `homerun_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `homerun_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Homerun.
