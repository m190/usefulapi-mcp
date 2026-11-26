# Bugsnag MCP by usefulapi

Use your [Bugsnag](https://www.bugsnag.com) account from Claude, Cursor, or any MCP client. Read projects, errors, events and releases, and triage errors or comment on them. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bugsnag.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bugsnag.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bugsnag https://bugsnag.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bugsnag&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbugsnag.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bugsnag": {
      "url": "https://bugsnag.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bugsnag credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bugsnag/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Bugsnag dashboard** (app.bugsnag.com or app.bugsnag.smartbear.com) and a **Bugsnag personal auth token** (My account → Personal auth tokens). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bugsnag_list_organizations` | read | List organizations |
| `bugsnag_get_organization` | read | Get an organization |
| `bugsnag_list_projects` | read | List projects |
| `bugsnag_get_project` | read | Get a project |
| `bugsnag_list_event_fields` | read | List event fields |
| `bugsnag_get_stability_trend` | read | Get stability trend |
| `bugsnag_list_errors` | read | List errors |
| `bugsnag_get_error` | read | Get an error |
| `bugsnag_list_error_events` | read | List events of an error |
| `bugsnag_list_project_events` | read | List events of a project |
| `bugsnag_get_event` | read | Get an event |
| `bugsnag_list_error_comments` | read | List comments on an error |
| `bugsnag_list_releases` | read | List releases |
| `bugsnag_get_release` | read | Get a release |
| `bugsnag_update_error` | **write** | Update an error |
| `bugsnag_add_error_comment` | **write** | Comment on an error |
| `bugsnag_usage_status` | meta | Usage status (free-tier meter) |
| `bugsnag_request_feature` | meta | Request a missing feature |
| `bugsnag_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bugsnag_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bugsnag_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bugsnag_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bugsnag_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
