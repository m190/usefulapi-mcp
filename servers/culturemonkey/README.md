# CultureMonkey MCP by usefulapi

Use your [CultureMonkey](https://www.culturemonkey.io) account from Claude, Cursor, or any MCP client. Read, add, update and deactivate employees in your CultureMonkey directory. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://culturemonkey.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://culturemonkey.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http culturemonkey https://culturemonkey.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=culturemonkey&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fculturemonkey.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "culturemonkey": {
      "url": "https://culturemonkey.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CultureMonkey credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/culturemonkey/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **CultureMonkey subdomain** (the acme part of acme.culturemonkey.io) and a **CultureMonkey API key** (Settings → Integrations). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `culturemonkey_list_employees` | read | List employees |
| `culturemonkey_get_employee` | read | Get employee |
| `culturemonkey_create_employee` | **write** | Create employee |
| `culturemonkey_update_employee` | **write** | Update employee |
| `culturemonkey_deactivate_employee` | **write** | Deactivate employee |
| `culturemonkey_usage_status` | meta | Usage status (free-tier meter) |
| `culturemonkey_request_feature` | meta | Request a missing feature |
| `culturemonkey_upgrade` | meta | Upgrade to Pro or Pro+ |
| `culturemonkey_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `culturemonkey_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `culturemonkey_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `culturemonkey_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
