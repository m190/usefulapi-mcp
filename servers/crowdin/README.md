# Crowdin MCP by usefulapi

Manage your Crowdin localization projects, strings, and translations from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Crowdin API token.

**Live endpoint:** `https://crowdin.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/crowdin

## Add to Claude

```json
{
  "mcpServers": {
    "crowdin": {
      "url": "https://crowdin.usefulapi.io/mcp"
    }
  }
}
```

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
| `crowdin_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
