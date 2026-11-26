# Clinked MCP by usefulapi

Use your [Clinked](https://www.clinked.com) account from Claude, Cursor, or any MCP client. Read accounts, groups, files, notes, tasks, events, discussions, search results and the audit log. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://clinked.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://clinked.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http clinked https://clinked.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=clinked&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fclinked.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "clinked": {
      "url": "https://clinked.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Clinked credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/clinked/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Clinked application client ID** and **client secret** from an application in your Clinked account, and an optional **account name**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `clinked_list_accounts` | read | List accounts |
| `clinked_get_account` | read | Get account details |
| `clinked_get_subscription` | read | Get account subscription |
| `clinked_list_members` | read | List account members |
| `clinked_get_member` | read | Get account member |
| `clinked_get_profile` | read | Get own profile |
| `clinked_list_groups` | read | List groups |
| `clinked_get_group` | read | Get group details |
| `clinked_list_group_members` | read | List group members |
| `clinked_list_announcements` | read | List group announcements |
| `clinked_list_files` | read | List group files |
| `clinked_get_file` | read | Get file details |
| `clinked_list_file_versions` | read | List file versions |
| `clinked_list_notes` | read | List group notes |
| `clinked_get_note` | read | Get note |
| `clinked_list_tasks` | read | List group tasks |
| `clinked_get_task` | read | Get task |
| `clinked_list_account_events` | read | List account events in a date range |
| `clinked_list_group_events` | read | List group events |
| `clinked_list_discussions` | read | List group discussions |
| `clinked_get_discussion` | read | Get discussion |
| `clinked_list_discussion_replies` | read | List discussion replies |
| `clinked_list_comments` | read | List comments on an item |
| `clinked_search` | read | Search Clinked |
| `clinked_list_notifications` | read | List notifications |
| `clinked_list_audit_entries` | read | List audit entries |
| `clinked_usage_status` | meta | Usage status (free-tier meter) |
| `clinked_request_feature` | meta | Request a missing feature |
| `clinked_upgrade` | meta | Upgrade to Pro or Pro+ |
| `clinked_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `clinked_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `clinked_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `clinked_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
