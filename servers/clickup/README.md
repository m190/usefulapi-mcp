# ClickUp MCP by usefulapi

Use your [ClickUp](https://clickup.com) account from Claude, Cursor, or any MCP client — read teams, spaces, lists and tasks, and create, update or comment on tasks and track time. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://clickup.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://clickup.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http clickup https://clickup.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=clickup&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fclickup.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "clickup": {
      "url": "https://clickup.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ClickUp credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/clickup/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **ClickUp API token** (Settings → Apps → API Token). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `clickup_get_authorized_user` | read | Get authorized user |
| `clickup_list_workspaces` | read | List workspaces |
| `clickup_list_spaces` | read | List spaces |
| `clickup_list_folders` | read | List folders |
| `clickup_list_lists` | read | List lists |
| `clickup_list_folderless_lists` | read | List folderless lists |
| `clickup_get_tasks` | read | Get tasks |
| `clickup_get_task` | read | Get task |
| `clickup_get_task_comments` | read | Get task comments |
| `clickup_get_list_comments` | read | Get list comments |
| `clickup_search_tasks` | read | Search tasks |
| `clickup_create_task` | **write** | Create task |
| `clickup_update_task` | **write** | Update task |
| `clickup_create_task_comment` | **write** | Create task comment |
| `clickup_usage_status` | meta | Usage status (free-tier meter) |
| `clickup_request_feature` | meta | Request a missing feature |
| `clickup_upgrade` | meta | Upgrade to Pro or Pro+ |
| `clickup_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `clickup_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `clickup_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `clickup_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
