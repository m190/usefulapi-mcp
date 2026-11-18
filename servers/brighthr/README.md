# BrightHR MCP by usefulapi

Use your [BrightHR](https://www.brighthr.com) account from Claude, Cursor, or any MCP client. Read employees, clock-ins and absences, and set employee external references. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://brighthr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://brighthr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http brighthr https://brighthr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=brighthr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbrighthr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "brighthr": {
      "url": "https://brighthr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your BrightHR credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/brighthr/

<!-- connect:end (generated above, edit below) -->

On first connect you provide **Client ID** and **Client secret**, which a BrightHR administrator creates in **API Management** (Create new application, then Create Secret). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `brighthr_list_employees` | read | List employees |
| `brighthr_set_employee_external_reference` | **write** | Set an employee's external reference |
| `brighthr_list_clockings` | read | List clock-ins |
| `brighthr_list_absences` | read | List approved absences |
| `brighthr_usage_status` | meta | Usage status (free-tier meter) |
| `brighthr_request_feature` | meta | Request a missing feature |
| `brighthr_upgrade` | meta | Upgrade to Pro or Pro+ |
| `brighthr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `brighthr_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `brighthr_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `brighthr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
