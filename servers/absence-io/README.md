# absence.io MCP by usefulapi

Use your [absence.io](https://www.absence.io/) account from Claude, Cursor, or any MCP client. Read absence records and users, so the assistant can see who is away and what was approved. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://absence-io.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://absence-io.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http absence-io https://absence-io.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=absence-io&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fabsence-io.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "absence-io": {
      "url": "https://absence-io.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your absence.io credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/absence-io/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **key identifier (id)** and the **API key**. Create both in absence.io under your profile → **Integrations** → **Generate API Key**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `absenceio_list_absences` | read | List absences |
| `absenceio_get_absence` | read | Get absence |
| `absenceio_list_users` | read | List users |
| `absenceio_get_user` | read | Get user |
| `absenceio_usage_status` | meta | Usage status (free-tier meter) |
| `absenceio_request_feature` | meta | Request a missing feature |
| `absenceio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `absenceio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `absenceio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `absenceio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `absenceio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
