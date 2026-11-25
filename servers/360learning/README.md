# 360Learning MCP by usefulapi

Use your [360Learning](https://www.360learning.com) account from Claude, Cursor, or any MCP client. Read users, groups, courses, learning paths and statistics, and add or remove group roles. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://360learning.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://360learning.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http 360learning https://360learning.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=360learning&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2F360learning.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "360learning": {
      "url": "https://360learning.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your 360Learning credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/360learning/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **company ID** (API v2 client ID), an **API v2 client secret**, and your **platform region** (EU or US). A platform owner or admin creates them under Settings → API v2. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `360learning_list_users` | read | List users |
| `360learning_get_user` | read | Get a user |
| `360learning_list_groups` | read | List groups |
| `360learning_get_group` | read | Get a group |
| `360learning_list_group_members` | read | List group members |
| `360learning_add_user_role_to_group` | **write** | Add a user role to a group |
| `360learning_remove_user_role_from_group` | **write** | Remove a user role from a group |
| `360learning_list_courses` | read | List courses |
| `360learning_get_course` | read | Get a course |
| `360learning_list_course_stats` | read | List course statistics |
| `360learning_list_paths` | read | List learning paths |
| `360learning_get_path` | read | Get a learning path |
| `360learning_list_path_sessions` | read | List path sessions |
| `360learning_list_path_enrollments` | read | List path enrollments |
| `360learning_get_path_session_stats` | read | Get path session progress |
| `360learning_list_classrooms` | read | List classrooms |
| `360learning_list_custom_fields` | read | List custom fields |
| `360learning_list_projects` | read | List projects |
| `360learning_usage_status` | meta | Usage status (free-tier meter) |
| `360learning_request_feature` | meta | Request a missing feature |
| `360learning_upgrade` | meta | Upgrade to Pro or Pro+ |
| `360learning_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `360learning_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `360learning_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `360learning_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
