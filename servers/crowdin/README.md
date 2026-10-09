# Crowdin MCP by usefulapi

Manage your Crowdin localization projects, strings, and translations from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Crowdin API token.

**Live endpoint:** `https://crowdin.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/crowdin

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://crowdin.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http crowdin https://crowdin.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=crowdin&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcrowdin.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "crowdin": {
      "url": "https://crowdin.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Crowdin credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/crowdin/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Crowdin API token. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `crowdin_list_projects` | read | List projects |
| `crowdin_get_project` | read | Get project |
| `crowdin_list_files` | read | List files |
| `crowdin_list_branches` | read | List branches |
| `crowdin_list_directories` | read | List directories |
| `crowdin_list_strings` | read | List strings |
| `crowdin_get_language_progress` | read | Get language progress |
| `crowdin_list_tasks` | read | List tasks |
| `crowdin_list_members` | read | List members |
| `crowdin_list_supported_languages` | read | List supported languages |
| `crowdin_add_string` | **write** | Add string |
| `crowdin_add_translation` | **write** | Add translation |
| `crowdin_usage_status` | meta | Usage status (free-tier meter) |
| `crowdin_request_feature` | meta | Request a missing feature |
| `crowdin_upgrade` | meta | Upgrade to Pro (unlimited) |
| `crowdin_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `crowdin_upgrade` (it returns a Stripe Checkout link). Cancel any time with `crowdin_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `crowdin_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
