# DreamClass MCP by usefulapi

Use your [DreamClass](https://dreamclass.io) account from Claude, Cursor, or any MCP client. Read school periods, classes, students, guardians, attendance, assignments, gradebooks, teachers, fees and invoices, and add notes to student records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://dreamclass.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://dreamclass.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http dreamclass https://dreamclass.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=dreamclass&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdreamclass.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "dreamclass": {
      "url": "https://dreamclass.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your DreamClass credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/dreamclass/

<!-- connect:end (generated above, edit below) -->

On first connect you provide three values: the **DreamClass API key** (Settings → Integrations, named UsefulAPI), the **School code** (same page) and the **Tenant code** (your subdomain, such as `myschool`). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dreamclass_list_school_periods` | read | List school periods |
| `dreamclass_list_courses` | read | List courses |
| `dreamclass_list_period_classes` | read | List classes in a period |
| `dreamclass_list_period_class_courses` | read | List class courses in a period |
| `dreamclass_list_period_students` | read | List students in a period |
| `dreamclass_search_students` | read | Search students |
| `dreamclass_get_student` | read | Get a student |
| `dreamclass_get_student_guardians` | read | List a student's guardians |
| `dreamclass_list_attendance_statuses` | read | List attendance statuses |
| `dreamclass_list_daily_attendance` | read | List daily attendance |
| `dreamclass_list_assignments` | read | List assignments |
| `dreamclass_get_gradebook` | read | Get a gradebook |
| `dreamclass_list_professors` | read | List teachers |
| `dreamclass_list_announcements` | read | List announcements |
| `dreamclass_list_period_fees` | read | List fees in a period |
| `dreamclass_get_invoice` | read | Get an invoice |
| `dreamclass_add_note` | **write** | Add a student note |
| `dreamclass_usage_status` | meta | Usage status (free-tier meter) |
| `dreamclass_request_feature` | meta | Request a missing feature |
| `dreamclass_upgrade` | meta | Upgrade to Pro or Pro+ |
| `dreamclass_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `dreamclass_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `dreamclass_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `dreamclass_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
