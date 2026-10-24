# Weblate MCP by usefulapi

Use [Weblate](https://weblate.org) (Hosted Weblate, Weblate Cloud or self-hosted) from Claude, Cursor, or any MCP client — projects, components, translations and statistics, strings, suggestions, comments, changes and translation memory, plus translating strings, suggestions, comments, repository commit/pull/push and automatic translation.
Hosted, no local install: connect with your own Weblate credentials.

**Live endpoint:** `https://weblate.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/weblate

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://weblate.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http weblate https://weblate.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=weblate&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fweblate.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "weblate": {
      "url": "https://weblate.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Weblate credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/weblate/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `weblate_list_projects` | read | List projects |
| `weblate_get_project` | read | Get project |
| `weblate_list_components` | read | List components |
| `weblate_get_component` | read | Get component |
| `weblate_list_translations` | read | List translations |
| `weblate_get_translation` | read | Get translation |
| `weblate_get_statistics` | read | Get translation statistics |
| `weblate_list_project_languages` | read | List project languages |
| `weblate_list_languages` | read | List languages |
| `weblate_list_units` | read | List strings (units) |
| `weblate_get_unit` | read | Get string (unit) |
| `weblate_list_unit_comments` | read | List string comments |
| `weblate_list_suggestions` | read | List suggestions |
| `weblate_list_changes` | read | List changes |
| `weblate_search_memory` | read | Search translation memory |
| `weblate_lookup_memory` | read | Look up translation memory |
| `weblate_get_repository_status` | read | Get repository status |
| `weblate_update_translation` | **write** | Update a translation |
| `weblate_add_suggestion` | **write** | Add a suggestion |
| `weblate_accept_suggestion` | **write** | Accept a suggestion |
| `weblate_add_unit_comment` | **write** | Add a string comment |
| `weblate_repository_operation` | **write** | Run a repository operation |
| `weblate_autotranslate` | **write** | Run automatic translation |
| `weblate_usage_status` | meta | Usage status (free-tier meter) |
| `weblate_request_feature` | meta | Request a missing feature |
| `weblate_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `weblate_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API token) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `weblate_upgrade` (it returns a Stripe Checkout link). Cancel any time with `weblate_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `weblate_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Weblate.
