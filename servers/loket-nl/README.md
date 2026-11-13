# Loket.nl MCP by usefulapi

Use your [Loket.nl](https://www.loket.nl) account from Claude, Cursor, or any MCP client. Read employers, employees, payroll administrations, absences and workflows, without changing any data. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://loket-nl.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://loket-nl.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http loket-nl https://loket-nl.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=loket-nl&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Floket-nl.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "loket-nl": {
      "url": "https://loket-nl.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you enter your own Loket.nl app's client ID and secret, then sign in with your Loket.nl account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/loket-nl/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **client ID** and **client secret** of your own Loket API client, which Loket issues to your employer, then sign in with your Loket account. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `loket_get_user` | read | Get current user |
| `loket_list_employers` | read | List employers |
| `loket_get_employer` | read | Get employer |
| `loket_list_payroll_administrations` | read | List payroll administrations |
| `loket_get_payroll_administration` | read | Get payroll administration |
| `loket_list_departments` | read | List departments |
| `loket_list_national_holidays` | read | List national holidays |
| `loket_list_employees` | read | List employees |
| `loket_get_employee` | read | Get employee |
| `loket_list_absences` | read | List absences |
| `loket_get_absence` | read | Get absence |
| `loket_list_workflows` | read | List workflows |
| `loket_get_workflow` | read | Get workflow |
| `loket_usage_status` | meta | Usage status (free-tier meter) |
| `loket_request_feature` | meta | Request a missing feature |
| `loket_upgrade` | meta | Upgrade to Pro or Pro+ |
| `loket_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `loket_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `loket_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `loket_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
