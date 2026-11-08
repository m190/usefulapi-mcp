# LearnWorlds MCP by usefulapi

Use [LearnWorlds](https://www.learnworlds.com) from Claude, Cursor, or any MCP client — review courses, learner progress, grades, payments and certificates, and create, tag or enroll learners.
Hosted, no local install: connect with your own LearnWorlds credentials.

**Live endpoint:** `https://learnworlds.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/learnworlds

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://learnworlds.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http learnworlds https://learnworlds.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=learnworlds&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flearnworlds.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "learnworlds": {
      "url": "https://learnworlds.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your LearnWorlds credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/learnworlds/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **school URL**, **API Client ID** and **access token** (Settings > Developers > API).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `learnworlds_list_courses` | read | List courses |
| `learnworlds_get_course` | read | Get a course |
| `learnworlds_get_course_contents` | read | Get course contents |
| `learnworlds_get_course_analytics` | read | Get course analytics |
| `learnworlds_list_course_users` | read | List users enrolled in a course |
| `learnworlds_get_course_grades` | read | Get course grades |
| `learnworlds_list_users` | read | List users |
| `learnworlds_get_user` | read | Get a user |
| `learnworlds_list_user_courses` | read | List a user's course enrollments |
| `learnworlds_get_user_course_progress` | read | Get a user's progress in a course |
| `learnworlds_list_payments` | read | List payments |
| `learnworlds_get_payment` | read | Get a payment |
| `learnworlds_list_certificates` | read | List certificates |
| `learnworlds_list_user_groups` | read | List user groups |
| `learnworlds_list_event_logs` | read | List event logs |
| `learnworlds_create_user` | **write** | Create a user |
| `learnworlds_update_user` | **write** | Update a user |
| `learnworlds_update_user_tags` | **write** | Attach or detach user tags |
| `learnworlds_enroll_user` | **write** | Enroll a user in a product |
| `learnworlds_add_user_to_group` | **write** | Add a user to a user group |
| `learnworlds_usage_status` | meta | Usage status (free-tier meter) |
| `learnworlds_request_feature` | meta | Request a missing feature |
| `learnworlds_upgrade` | meta | Upgrade to Pro or Pro+ |
| `learnworlds_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `learnworlds_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `learnworlds_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `learnworlds_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by LearnWorlds.
