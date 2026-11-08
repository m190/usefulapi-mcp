# Talexio MCP by usefulapi

Use your [Talexio](https://talexio.com) account from Claude, Cursor, or any MCP client. Read organisation units, employees, approved pay lines, approved time off and shift templates. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://talexio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://talexio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http talexio https://talexio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=talexio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftalexio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "talexio": {
      "url": "https://talexio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Talexio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/talexio/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Talexio Third-Party Token**, found in the Third-Party Token section of Talexio. The API must be enabled for your company. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `talexio_list_organisation_units` | read | List organisation units |
| `talexio_list_employees` | read | List employees |
| `talexio_list_payroll_approvals` | read | List approved timesheet pay lines |
| `talexio_list_time_off` | read | List approved time off |
| `talexio_list_shift_templates` | read | List shift templates |
| `talexio_usage_status` | meta | Usage status (free-tier meter) |
| `talexio_request_feature` | meta | Request a missing feature |
| `talexio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `talexio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `talexio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `talexio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `talexio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
