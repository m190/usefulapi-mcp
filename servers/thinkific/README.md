# Thinkific MCP by usefulapi

Use your [Thinkific](https://www.thinkific.com) account from Claude, Cursor, or any MCP client. Read courses, enrollments, learners and orders, enroll a learner in a course, and create a learner account. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://thinkific.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://thinkific.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http thinkific https://thinkific.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=thinkific&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fthinkific.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "thinkific": {
      "url": "https://thinkific.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Thinkific credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/thinkific/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your site's **Thinkific API Access Token** (Thinkific → **Settings → Code & Analytics → API Access Tokens**; the site needs the Grow/Pro + Growth plan or above). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `thinkific_list_courses` | read | List courses |
| `thinkific_get_course` | read | Get a course |
| `thinkific_list_enrollments` | read | List enrollments |
| `thinkific_get_enrollment` | read | Get an enrollment |
| `thinkific_create_enrollment` | **write** | Enroll a learner in a course |
| `thinkific_list_users` | read | List users |
| `thinkific_get_user` | read | Get a user |
| `thinkific_create_user` | **write** | Create a user |
| `thinkific_list_orders` | read | List orders |
| `thinkific_get_order` | read | Get an order |
| `thinkific_usage_status` | meta | Usage status (free-tier meter) |
| `thinkific_request_feature` | meta | Request a missing feature |
| `thinkific_upgrade` | meta | Upgrade to Pro or Pro+ |
| `thinkific_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `thinkific_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `thinkific_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `thinkific_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
