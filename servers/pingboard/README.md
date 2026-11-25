# Pingboard MCP by usefulapi

Use your [Pingboard](https://pingboard.com) account from Claude, Cursor, or any MCP client. Read-only access to people, groups, out-of-office statuses and custom profile fields. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://pingboard.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pingboard.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pingboard https://pingboard.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pingboard&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpingboard.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pingboard": {
      "url": "https://pingboard.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Pingboard credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pingboard/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **service account client ID** and **client secret** (created by a Pingboard admin on the Service Accounts page). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pingboard_get_company` | read | Get the company |
| `pingboard_list_users` | read | List users |
| `pingboard_get_user` | read | Get a user |
| `pingboard_search_users` | read | Search users |
| `pingboard_list_groups` | read | List groups |
| `pingboard_get_group` | read | Get a group |
| `pingboard_search_groups` | read | Search groups |
| `pingboard_list_statuses` | read | List statuses |
| `pingboard_get_status` | read | Get a status |
| `pingboard_list_status_types` | read | List status types |
| `pingboard_list_custom_fields` | read | List custom fields |
| `pingboard_usage_status` | meta | Usage status (free-tier meter) |
| `pingboard_request_feature` | meta | Request a missing feature |
| `pingboard_upgrade` | meta | Upgrade to Pro or Pro+ |
| `pingboard_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `pingboard_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `pingboard_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `pingboard_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
