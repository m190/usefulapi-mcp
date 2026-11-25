# Teachable MCP by usefulapi

Use your [Teachable](https://teachable.com) account from Claude, Cursor, or any MCP client. Read courses, students, lectures, sales and webhooks, and enroll or unenroll users or update a user's name. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://teachable.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://teachable.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http teachable https://teachable.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=teachable&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fteachable.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "teachable": {
      "url": "https://teachable.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Teachable credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/teachable/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **school API key** (Settings → API → Create API Key in Teachable; only school owners can create keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `teachable_list_courses` | read | List courses |
| `teachable_get_course` | read | Get course |
| `teachable_list_course_enrollments` | read | List course enrollments |
| `teachable_get_course_progress` | read | Get student course progress |
| `teachable_get_lecture` | read | Get lecture |
| `teachable_list_users` | read | List users |
| `teachable_get_user` | read | Get user |
| `teachable_list_pricing_plans` | read | List pricing plans |
| `teachable_get_pricing_plan` | read | Get pricing plan |
| `teachable_list_transactions` | read | List transactions |
| `teachable_list_webhooks` | read | List webhooks |
| `teachable_list_webhook_events` | read | List webhook deliveries |
| `teachable_enroll_user` | **write** | Enroll user in course |
| `teachable_unenroll_user` | **write** | Unenroll user from course |
| `teachable_update_user` | **write** | Update user name or source |
| `teachable_usage_status` | meta | Usage status (free-tier meter) |
| `teachable_request_feature` | meta | Request a missing feature |
| `teachable_upgrade` | meta | Upgrade to Pro or Pro+ |
| `teachable_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `teachable_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `teachable_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `teachable_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
