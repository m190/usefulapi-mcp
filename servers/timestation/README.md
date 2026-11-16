# TimeStation MCP by usefulapi

Use your [TimeStation](https://www.mytimestation.com) account from Claude, Cursor, or any MCP client. Read employees, departments, shifts and reports, and create employees or close open shifts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://timestation.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://timestation.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http timestation https://timestation.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=timestation&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftimestation.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "timestation": {
      "url": "https://timestation.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TimeStation credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/timestation/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **TimeStation API key**, which you find or create under **Settings → API Keys** in TimeStation. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `timestation_list_employees` | read | List employees |
| `timestation_get_employee` | read | Get an employee |
| `timestation_list_employee_departments` | read | List an employee's departments |
| `timestation_list_departments` | read | List departments |
| `timestation_get_department` | read | Get a department |
| `timestation_list_shifts` | read | List an employee's shifts |
| `timestation_get_shift` | read | Get a shift |
| `timestation_run_report` | read | Run a report |
| `timestation_create_employee` | **write** | Create an employee |
| `timestation_check_out_employee` | **write** | Check out an employee |
| `timestation_close_shift` | **write** | Close a shift |
| `timestation_usage_status` | meta | Usage status (free-tier meter) |
| `timestation_request_feature` | meta | Request a missing feature |
| `timestation_upgrade` | meta | Upgrade to Pro or Pro+ |
| `timestation_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `timestation_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `timestation_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `timestation_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
