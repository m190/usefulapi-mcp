# Ceipal MCP by usefulapi

Use your [Ceipal](https://www.ceipal.com) account from Claude, Cursor, or any MCP client. Read job postings, requisitions, applicants, submissions, bench, clients, leads, vendors, interviews and placements. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ceipal.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ceipal.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ceipal https://ceipal.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ceipal&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fceipal.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ceipal": {
      "url": "https://ceipal.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Ceipal credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ceipal/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **admin email**, the **API password** and the **API key** (Ceipal ATS Admin Panel → API settings). An administrator sets them. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ceipal_list_job_postings` | read | List job postings |
| `ceipal_list_job_requisitions` | read | List job requisitions |
| `ceipal_list_applicants` | read | List applicants |
| `ceipal_list_submissions` | read | List submissions |
| `ceipal_list_talent_bench` | read | List talent bench |
| `ceipal_list_clients` | read | List clients |
| `ceipal_list_client_notes` | read | List client notes |
| `ceipal_list_client_contacts` | read | List client contacts |
| `ceipal_list_leads` | read | List leads |
| `ceipal_list_vendors` | read | List vendors |
| `ceipal_list_interviews` | read | List interviews |
| `ceipal_list_placements` | read | List placements |
| `ceipal_list_users` | read | List users |
| `ceipal_get_job_posting` | read | Get job posting |
| `ceipal_get_job_requisition` | read | Get job requisition |
| `ceipal_get_applicant` | read | Get applicant |
| `ceipal_get_submission` | read | Get submission |
| `ceipal_get_bench_consultant` | read | Get bench consultant |
| `ceipal_get_client` | read | Get client |
| `ceipal_get_lead` | read | Get lead |
| `ceipal_get_vendor` | read | Get vendor |
| `ceipal_get_interview` | read | Get interview |
| `ceipal_get_placement` | read | Get placement |
| `ceipal_get_user` | read | Get user |
| `ceipal_usage_status` | meta | Usage status (free-tier meter) |
| `ceipal_request_feature` | meta | Request a missing feature |
| `ceipal_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ceipal_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ceipal_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ceipal_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ceipal_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
