# Thought Industries MCP by usefulapi

Use your [Thought Industries](https://www.thoughtindustries.com) account from Claude, Cursor, or any MCP client. Read learners, courses, assessment scores and clients, and manage users and their enrollments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://thought-industries.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://thought-industries.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http thought-industries https://thought-industries.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=thought-industries&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fthought-industries.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "thought-industries": {
      "url": "https://thought-industries.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Thought Industries credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/thought-industries/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **academy subdomain** (the part before .thoughtindustries.com) and an **API key** (Settings → Security in your academy, admin account). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `thoughtindustries_ping` | read | Check the connection |
| `thoughtindustries_get_job` | read | Get an async job |
| `thoughtindustries_list_users` | read | List users |
| `thoughtindustries_get_user` | read | Get a user |
| `thoughtindustries_list_content` | read | List content |
| `thoughtindustries_list_course_groups` | read | List course groups |
| `thoughtindustries_get_course_group` | read | Get a course group |
| `thoughtindustries_list_course_group_courses` | read | List courses in a course group |
| `thoughtindustries_get_course_structure` | read | Get a course structure |
| `thoughtindustries_list_meetings` | read | List meetings |
| `thoughtindustries_list_course_actions` | read | List course action events |
| `thoughtindustries_list_assessment_attempts` | read | List assessment attempts |
| `thoughtindustries_list_assignment_submissions` | read | List assignment submissions |
| `thoughtindustries_list_clients` | read | List clients |
| `thoughtindustries_get_client` | read | Get a client |
| `thoughtindustries_list_client_licenses` | read | List a client's licenses |
| `thoughtindustries_list_non_recurring_purchases` | read | List one-time purchases |
| `thoughtindustries_list_coupons` | read | List coupons |
| `thoughtindustries_list_redemption_codes` | read | List redemption code groups |
| `thoughtindustries_create_user` | **write** | Create a user |
| `thoughtindustries_update_user` | **write** | Update a user's profile |
| `thoughtindustries_update_user_status` | **write** | Enable or disable a user |
| `thoughtindustries_bulk_assign_content` | **write** | Enroll users in content |
| `thoughtindustries_usage_status` | meta | Usage status (free-tier meter) |
| `thoughtindustries_request_feature` | meta | Request a missing feature |
| `thoughtindustries_upgrade` | meta | Upgrade to Pro or Pro+ |
| `thoughtindustries_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `thoughtindustries_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `thoughtindustries_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `thoughtindustries_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
