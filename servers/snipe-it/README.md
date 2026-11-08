# Snipe-IT MCP by usefulapi

Use your [Snipe-IT](https://snipeitapp.com) account from Claude, Cursor, or any MCP client. Find assets, users and licenses, read their status, and check assets out or in. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://snipe-it.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://snipe-it.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http snipe-it https://snipe-it.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=snipe-it&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsnipe-it.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "snipe-it": {
      "url": "https://snipe-it.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Snipe-IT credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/snipe-it/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Snipe-IT address** (for example https://assets.example.com) and a **personal API token**, which you create under Manage API Keys in your account menu. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `snipeit_get_me` | read | Get the connected user |
| `snipeit_list_hardware` | read | List assets |
| `snipeit_get_hardware` | read | Get an asset |
| `snipeit_find_hardware_by_tag` | read | Find an asset by asset tag |
| `snipeit_find_hardware_by_serial` | read | Find an asset by serial number |
| `snipeit_list_overdue_audits` | read | List overdue asset audits |
| `snipeit_list_users` | read | List users |
| `snipeit_get_user` | read | Get a user |
| `snipeit_list_user_assets` | read | List assets assigned to a user |
| `snipeit_list_licenses` | read | List software licenses |
| `snipeit_get_license` | read | Get a software license |
| `snipeit_list_license_seats` | read | List license seats |
| `snipeit_list_models` | read | List asset models |
| `snipeit_list_categories` | read | List categories |
| `snipeit_list_locations` | read | List locations |
| `snipeit_list_status_labels` | read | List status labels |
| `snipeit_get_activity_report` | read | Get the activity report |
| `snipeit_checkout_hardware` | **write** | Check out an asset |
| `snipeit_checkin_hardware` | **write** | Check in an asset |
| `snipeit_usage_status` | meta | Usage status (free-tier meter) |
| `snipeit_request_feature` | meta | Request a missing feature |
| `snipeit_upgrade` | meta | Upgrade to Pro or Pro+ |
| `snipeit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `snipeit_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `snipeit_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `snipeit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
