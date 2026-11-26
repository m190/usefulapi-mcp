# Reftab MCP by usefulapi

Use your [Reftab](https://www.reftab.com) account from Claude, Cursor, or any MCP client. Read assets, locations, licenses, loans, loanees, maintenance records and account statuses. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://reftab.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://reftab.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http reftab https://reftab.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=reftab&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Freftab.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "reftab": {
      "url": "https://reftab.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Reftab credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/reftab/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Reftab API public key** and **secret key** (Settings → API keys in Reftab). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `reftab_list_assets` | read | List assets |
| `reftab_get_asset` | read | Get an asset |
| `reftab_get_asset_loan_history` | read | Get an asset's loan history |
| `reftab_list_locations` | read | List locations |
| `reftab_get_location` | read | Get a location |
| `reftab_list_categories` | read | List categories |
| `reftab_list_licenses` | read | List licenses |
| `reftab_get_license` | read | Get a license |
| `reftab_list_loans` | read | List loans |
| `reftab_list_loanees` | read | List loanees |
| `reftab_get_loanee` | read | Get a loanee |
| `reftab_list_reservations` | read | List reservations |
| `reftab_list_accessories` | read | List accessories |
| `reftab_list_kits` | read | List kits |
| `reftab_list_asset_maintenance` | read | List maintenance records |
| `reftab_get_asset_maintenance` | read | Get a maintenance record |
| `reftab_list_statuses` | read | List statuses and custom fields |
| `reftab_usage_status` | meta | Usage status (free-tier meter) |
| `reftab_request_feature` | meta | Request a missing feature |
| `reftab_upgrade` | meta | Upgrade to Pro or Pro+ |
| `reftab_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `reftab_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `reftab_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `reftab_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
