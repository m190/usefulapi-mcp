# Workable MCP by usefulapi

Use your [Workable](https://www.workable.com) account from Claude, Cursor, or any MCP client. Read jobs, pipeline stages, candidates, activity and scheduled interviews, and comment on or move candidates. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://workable.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://workable.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http workable https://workable.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=workable&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fworkable.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "workable": {
      "url": "https://workable.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Workable credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/workable/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Workable account subdomain** (the yourcompany part of yourcompany.workable.com) and a **Workable API access token** (an admin creates it under Integrations). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `workable_list_accounts` | read | List accounts |
| `workable_list_stages` | read | List pipeline stages |
| `workable_list_disqualification_reasons` | read | List disqualification reasons |
| `workable_list_members` | read | List team members |
| `workable_list_jobs` | read | List jobs |
| `workable_get_job` | read | Get a job |
| `workable_list_job_stages` | read | List a job's stages |
| `workable_list_recruiters` | read | List external recruiters |
| `workable_list_candidates` | read | List candidates |
| `workable_get_candidate` | read | Get a candidate |
| `workable_list_candidate_activities` | read | List a candidate's activity |
| `workable_list_events` | read | List scheduled events |
| `workable_add_candidate_comment` | **write** | Add a comment to a candidate |
| `workable_move_candidate` | **write** | Move a candidate to a stage |
| `workable_usage_status` | meta | Usage status (free-tier meter) |
| `workable_request_feature` | meta | Request a missing feature |
| `workable_upgrade` | meta | Upgrade to Pro or Pro+ |
| `workable_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `workable_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `workable_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `workable_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
