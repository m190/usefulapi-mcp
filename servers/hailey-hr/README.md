# Hailey HR MCP by usefulapi

Use your [Hailey HR](https://www.haileyhr.com) account from Claude, Cursor, or any MCP client. Read the company structure, employees, employments, time off, reported time and job ads, with no write access. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://hailey-hr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hailey-hr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hailey-hr https://hailey-hr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hailey-hr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhailey-hr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hailey-hr": {
      "url": "https://hailey-hr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Hailey HR credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hailey-hr/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Hailey HR personal access token**, created in your Hailey profile. Use a service account where possible, because the token expires after one year. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hailey_get_company` | read | Get company |
| `hailey_list_employees` | read | List employees |
| `hailey_get_employee` | read | Get an employee |
| `hailey_list_employments` | read | List employments |
| `hailey_list_time_off` | read | List time off |
| `hailey_list_reported_time` | read | List reported time |
| `hailey_list_job_ads` | read | List job ads |
| `hailey_usage_status` | meta | Usage status (free-tier meter) |
| `hailey_request_feature` | meta | Request a missing feature |
| `hailey_upgrade` | meta | Upgrade to Pro or Pro+ |
| `hailey_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `hailey_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `hailey_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `hailey_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
