# AcademyOcean MCP by usefulapi

Use your [AcademyOcean](https://academyocean.com) account from Claude, Cursor, or any MCP client. Read learners, courses, teams, progress, quiz results and certificates. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://academyocean.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://academyocean.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http academyocean https://academyocean.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=academyocean&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Facademyocean.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "academyocean": {
      "url": "https://academyocean.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your AcademyOcean credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/academyocean/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **AcademyOcean Client ID** and **AcademyOcean Client Secret**, copied from **Settings → API** after you register a new OAuth application. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `academyocean_list_academies` | read | List academies |
| `academyocean_list_courses` | read | List courses |
| `academyocean_list_teams` | read | List teams |
| `academyocean_list_learners` | read | List learners |
| `academyocean_get_learner_progress` | read | Get a learner's course progress |
| `academyocean_learners_registered` | read | Learners registered on a date |
| `academyocean_learners_repeated_logins` | read | Learners with repeated logins |
| `academyocean_learners_completed_course` | read | Learners who completed a course |
| `academyocean_course_progress_by_learners` | read | Learners' progress in a course |
| `academyocean_learners_by_score` | read | Learners by score |
| `academyocean_passive_learners` | read | Passive learners |
| `academyocean_learners_churn_at_content` | read | Learners who stopped at a lesson |
| `academyocean_learners_by_country` | read | Learners from a country |
| `academyocean_learner_certificates` | read | Get a learner's certificates |
| `academyocean_learner_variables` | read | Get learners' custom variables |
| `academyocean_learner_quiz_statistics` | read | Get learners' quiz statistics |
| `academyocean_check_learner_invites` | read | Check learner invitations |
| `academyocean_usage_status` | meta | Usage status (free-tier meter) |
| `academyocean_request_feature` | meta | Request a missing feature |
| `academyocean_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `academyocean_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `academyocean_upgrade` (it returns a Stripe Checkout link). Cancel any time with `academyocean_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `academyocean_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
