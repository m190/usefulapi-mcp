# LearnUpon MCP by usefulapi

Use your [LearnUpon](https://www.learnupon.com) account from Claude, Cursor, or any MCP client. It reads users, courses, enrollments and completions, and it enrolls users in courses. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://learnupon.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://learnupon.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http learnupon https://learnupon.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=learnupon&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flearnupon.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "learnupon": {
      "url": "https://learnupon.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your LearnUpon credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/learnupon/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **LearnUpon portal name** (the part before .learnupon.com), and the **API key username** and **API key password** (Settings → Integrations → API Keys in LearnUpon). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `learnupon_list_users` | read | List users |
| `learnupon_find_user` | read | Find a user |
| `learnupon_get_user` | read | Get a user |
| `learnupon_list_custom_user_data_fields` | read | List custom user data fields |
| `learnupon_search_courses` | read | Search courses |
| `learnupon_search_enrollments` | read | Search enrollments |
| `learnupon_get_enrollment` | read | Get an enrollment |
| `learnupon_get_enrollment_modules` | read | List modules of an enrollment |
| `learnupon_list_markcompletes` | read | List completions |
| `learnupon_enroll_user` | **write** | Enroll a user in a course |
| `learnupon_usage_status` | meta | Usage status (free-tier meter) |
| `learnupon_request_feature` | meta | Request a missing feature |
| `learnupon_upgrade` | meta | Upgrade to Pro or Pro+ |
| `learnupon_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `learnupon_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `learnupon_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `learnupon_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
