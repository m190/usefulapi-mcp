# Veracross MCP by usefulapi

Use your [Veracross](https://www.veracross.com) account from Claude, Cursor, or any MCP client. Read students, classes, grades, assignments, attendance and households for one school through its Veracross Data API. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://veracross.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://veracross.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http veracross https://veracross.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=veracross&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fveracross.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "veracross": {
      "url": "https://veracross.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Veracross credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/veracross/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **school route**, **OAuth client ID** and **OAuth client secret**. Your school creates the OAuth application in Axiom (the OAuth_App_Admin role is needed) and gives you these values. The route is the segment in `https://api.veracross.com/<route>/v3`. The server stores the values per user, with the secret encrypted. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `veracross_list_students` | read | List students |
| `veracross_list_staff_faculty` | read | List staff and faculty |
| `veracross_list_parents` | read | List parents and guardians |
| `veracross_list_households` | read | List households |
| `veracross_list_contact_info` | read | List contact details |
| `veracross_list_classes` | read | List classes |
| `veracross_list_enrollments` | read | List class enrollments |
| `veracross_list_numeric_grades` | read | List numeric grades |
| `veracross_list_class_assignments` | read | List class assignments |
| `veracross_list_student_assignments` | read | List student assignments |
| `veracross_list_master_attendance` | read | List daily attendance |
| `veracross_read_student` | read | Get a student |
| `veracross_usage_status` | meta | Usage status (free-tier meter) |
| `veracross_request_feature` | meta | Request a missing feature |
| `veracross_upgrade` | meta | Upgrade to Pro or Pro+ |
| `veracross_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `veracross_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `veracross_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `veracross_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
