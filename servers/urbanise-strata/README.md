# Urbanise Strata MCP by usefulapi

Use your [Urbanise Strata](https://www.urbanise.com) account from Claude, Cursor, or any MCP client. It reads plans, lots, levy ledgers, receivables, committees and insurance, and changes nothing. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://urbanise-strata.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://urbanise-strata.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http urbanise-strata https://urbanise-strata.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=urbanise-strata&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Furbanise-strata.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "urbanise-strata": {
      "url": "https://urbanise-strata.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Urbanise Strata credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/urbanise-strata/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Urbanise region** (au, mena or sa), your numeric **Client ID** and your **Public Strata API token** (your Urbanise representative issues it). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `urbanise_get_manager` | read | Get plan manager |
| `urbanise_list_plans` | read | List plans |
| `urbanise_get_plan` | read | Get plan details |
| `urbanise_list_lots` | read | List lots in a plan |
| `urbanise_get_lot` | read | Get lot details |
| `urbanise_get_lot_ledger` | read | Get lot ledger |
| `urbanise_search_lots_and_owners` | read | Search lots and owners |
| `urbanise_get_levy_summary` | read | Get levy summary |
| `urbanise_get_manco` | read | Get management company |
| `urbanise_list_accounts_receivable` | read | List accounts receivable |
| `urbanise_list_suppliers` | read | List suppliers |
| `urbanise_list_committees` | read | List committee members |
| `urbanise_list_insurance` | read | List insurance policies |
| `urbanise_get_work_order_instructions` | read | Get work order instructions |
| `urbanise_usage_status` | meta | Usage status (free-tier meter) |
| `urbanise_request_feature` | meta | Request a missing feature |
| `urbanise_upgrade` | meta | Upgrade to Pro or Pro+ |
| `urbanise_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `urbanise_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `urbanise_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `urbanise_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
