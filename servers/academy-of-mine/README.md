# Academy of Mine MCP by usefulapi

Use your [Academy of Mine](https://www.academyofmine.com) account from Claude, Cursor, or any MCP client. Read courses, learning paths, learners, orders, users and certificates; the server never writes to the academy. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://academy-of-mine.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://academy-of-mine.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http academy-of-mine https://academy-of-mine.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=academy-of-mine&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Facademy-of-mine.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "academy-of-mine": {
      "url": "https://academy-of-mine.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Academy of Mine credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/academy-of-mine/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **academy domain** (for example academy.yoursite.com) and a **REST API token**, which you create under Integrations → REST API Access. Tokens expire one year after creation. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `academyofmine_list_courses` | read | List courses |
| `academyofmine_get_course` | read | Get course |
| `academyofmine_list_course_learners` | read | List course learners |
| `academyofmine_list_learning_paths` | read | List learning paths |
| `academyofmine_get_learning_path` | read | Get learning path |
| `academyofmine_list_learning_path_learners` | read | List learning path learners |
| `academyofmine_find_users` | read | Find users |
| `academyofmine_get_user` | read | Get user |
| `academyofmine_list_user_certificates` | read | List user certificates |
| `academyofmine_list_orders` | read | List orders |
| `academyofmine_get_order` | read | Get order |
| `academyofmine_list_portals` | read | List portals |
| `academyofmine_usage_status` | meta | Usage status (free-tier meter) |
| `academyofmine_request_feature` | meta | Request a missing feature |
| `academyofmine_upgrade` | meta | Upgrade to Pro or Pro+ |
| `academyofmine_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `academyofmine_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `academyofmine_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `academyofmine_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
