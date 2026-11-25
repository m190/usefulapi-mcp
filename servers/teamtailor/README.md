# Teamtailor MCP by usefulapi

Use your [Teamtailor](https://www.teamtailor.com) account from Claude, Cursor, or any MCP client. Read jobs, candidates, job applications, stages, users and notes, and create or update candidates, and create applications and notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://teamtailor.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://teamtailor.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http teamtailor https://teamtailor.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=teamtailor&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fteamtailor.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "teamtailor": {
      "url": "https://teamtailor.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Teamtailor credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/teamtailor/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Teamtailor data region** (EU, North America or Asia-Pacific) and a **Teamtailor API key** (Settings → Integrations → API keys, Admin scope). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `teamtailor_get_company` | read | Get company |
| `teamtailor_list_jobs` | read | List jobs |
| `teamtailor_get_job` | read | Get a job |
| `teamtailor_list_candidates` | read | List candidates |
| `teamtailor_get_candidate` | read | Get a candidate |
| `teamtailor_list_job_applications` | read | List job applications |
| `teamtailor_get_job_application` | read | Get a job application |
| `teamtailor_list_departments` | read | List departments |
| `teamtailor_list_locations` | read | List locations |
| `teamtailor_list_users` | read | List users |
| `teamtailor_list_stages` | read | List stages |
| `teamtailor_list_notes` | read | List notes |
| `teamtailor_create_candidate` | **write** | Create a candidate |
| `teamtailor_update_candidate` | **write** | Update a candidate |
| `teamtailor_create_job_application` | **write** | Apply a candidate to a job |
| `teamtailor_create_note` | **write** | Add a note to a candidate |
| `teamtailor_usage_status` | meta | Usage status (free-tier meter) |
| `teamtailor_request_feature` | meta | Request a missing feature |
| `teamtailor_upgrade` | meta | Upgrade to Pro or Pro+ |
| `teamtailor_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `teamtailor_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `teamtailor_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `teamtailor_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
