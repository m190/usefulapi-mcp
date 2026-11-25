# 7shifts MCP by usefulapi

Use your [7shifts](https://www.7shifts.com) account from Claude, Cursor, or any MCP client. Read locations, departments, roles, employees, shifts and time punches; the server never changes them. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://7shifts.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://7shifts.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http 7shifts https://7shifts.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=7shifts&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2F7shifts.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "7shifts": {
      "url": "https://7shifts.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your 7shifts credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/7shifts/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **7shifts access token**, created in 7shifts under **Company Settings → Developer Tools → Access Tokens**. Your 7shifts plan must include API access. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `7shifts_whoami` | read | Who am I |
| `7shifts_list_companies` | read | List companies |
| `7shifts_get_company` | read | Get a company |
| `7shifts_list_locations` | read | List locations |
| `7shifts_get_location` | read | Get a location |
| `7shifts_list_departments` | read | List departments |
| `7shifts_list_roles` | read | List roles |
| `7shifts_list_inactive_reasons` | read | List inactive reasons |
| `7shifts_list_users` | read | List employees |
| `7shifts_get_user` | read | Get an employee |
| `7shifts_list_user_assignments` | read | List an employee's assignments |
| `7shifts_list_shifts` | read | List shifts |
| `7shifts_get_shift` | read | Get a shift |
| `7shifts_list_time_punches` | read | List time punches |
| `7shifts_get_time_punch` | read | Get a time punch |
| `7shifts_usage_status` | meta | Usage status (free-tier meter) |
| `7shifts_request_feature` | meta | Request a missing feature |
| `7shifts_upgrade` | meta | Upgrade to Pro or Pro+ |
| `7shifts_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `7shifts_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `7shifts_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `7shifts_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
