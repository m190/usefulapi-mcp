# SkyPrep MCP by usefulapi

Use your [SkyPrep](https://skyprep.com) account from Claude, Cursor, or any MCP client. It reads learners, courses, user groups, learning paths and course progress. It can also create users and enroll them. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://skyprep.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://skyprep.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http skyprep https://skyprep.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=skyprep&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fskyprep.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "skyprep": {
      "url": "https://skyprep.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SkyPrep credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/skyprep/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **SkyPrep account key** (your login domain, such as `acme.skyprepapp.com`) and a **SkyPrep API key**, created under **Settings → System Configuration → Integrations → API Key Manager**. SkyPrep shows the full API key only once. API access depends on your SkyPrep plan. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `skyprep_list_users` | read | List users |
| `skyprep_get_user` | read | Get a user |
| `skyprep_list_courses` | read | List courses |
| `skyprep_get_course` | read | Get a course |
| `skyprep_get_user_courses` | read | List a user's courses |
| `skyprep_get_user_course_status` | read | Get a user's course status |
| `skyprep_list_user_groups` | read | List user groups |
| `skyprep_get_user_group` | read | Get a user group |
| `skyprep_list_learning_paths` | read | List learning paths |
| `skyprep_get_course_progresses` | read | Get course progress |
| `skyprep_create_user` | **write** | Create a user |
| `skyprep_update_user` | **write** | Update a user |
| `skyprep_enroll_user_in_course` | **write** | Enroll a user in a course |
| `skyprep_enroll_user_in_user_group` | **write** | Add a user to a user group |
| `skyprep_usage_status` | meta | Usage status (free-tier meter) |
| `skyprep_request_feature` | meta | Request a missing feature |
| `skyprep_upgrade` | meta | Upgrade to Pro or Pro+ |
| `skyprep_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `skyprep_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `skyprep_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `skyprep_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
