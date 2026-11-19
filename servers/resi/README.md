# Resi MCP by usefulapi

Use your [Resi](https://getresi.com) account from Claude, Cursor, or any MCP client. Read properties, units, leads and sync logs, and update unit rent and availability. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://resi.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://resi.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http resi https://resi.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=resi&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fresi.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "resi": {
      "url": "https://resi.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Resi credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/resi/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Resi API token** (Resi → Account Settings → API Tokens). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `resi_get_current_user` | read | Get current user and accounts |
| `resi_get_token_account` | read | Get the account this token is pinned to |
| `resi_list_properties` | read | List properties |
| `resi_get_property` | read | Get property |
| `resi_list_buildings` | read | List buildings |
| `resi_list_floor_plans` | read | List floor plans |
| `resi_list_units` | read | List units |
| `resi_get_unit` | read | Get unit |
| `resi_update_unit` | **write** | Update unit availability or price |
| `resi_list_amenities` | read | List amenities |
| `resi_list_fees` | read | List fees |
| `resi_list_reviews` | read | List reviews |
| `resi_list_leads` | read | List leads |
| `resi_get_lead` | read | Get lead |
| `resi_list_lead_sources` | read | List lead sources |
| `resi_list_media` | read | List media |
| `resi_list_connections` | read | List connections |
| `resi_list_connection_logs` | read | List connection logs |
| `resi_list_users` | read | List users |
| `resi_usage_status` | meta | Usage status (free-tier meter) |
| `resi_request_feature` | meta | Request a missing feature |
| `resi_upgrade` | meta | Upgrade to Pro or Pro+ |
| `resi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `resi_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `resi_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `resi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
