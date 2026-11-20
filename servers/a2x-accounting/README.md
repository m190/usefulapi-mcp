# A2X MCP by usefulapi

Use your [A2X](https://www.a2xaccounting.com) account from Claude, Cursor, or any MCP client. Read accounts, SKU costs, products and subledger data, and create CSV data exports. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://a2x-accounting.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://a2x-accounting.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http a2x-accounting https://a2x-accounting.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=a2x-accounting&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fa2x-accounting.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "a2x-accounting": {
      "url": "https://a2x-accounting.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your A2X credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/a2x-accounting/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **A2X public API token** (User Settings → Public API in A2X, with the read scope; add the write scope only for data exports). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `a2xaccounting_list_organizations` | read | List organizations |
| `a2xaccounting_list_accounts` | read | List accounts |
| `a2xaccounting_list_products` | read | List products |
| `a2xaccounting_list_product_imports` | read | List product imports |
| `a2xaccounting_list_sku_cost_files` | read | List latest SKU cost files |
| `a2xaccounting_list_sku_costs` | read | List SKU costs |
| `a2xaccounting_list_data_exports` | read | List data exports |
| `a2xaccounting_list_data_export_rows` | read | List data export rows |
| `a2xaccounting_create_data_export` | **write** | Create a data export |
| `a2xaccounting_list_subledger_topics` | read | List subledger topics |
| `a2xaccounting_get_subledger_topic` | read | Get a subledger topic |
| `a2xaccounting_estimate_subledger_query` | read | Estimate a subledger query |
| `a2xaccounting_run_subledger_query` | read | Run a subledger query |
| `a2xaccounting_usage_status` | meta | Usage status (free-tier meter) |
| `a2xaccounting_request_feature` | meta | Request a missing feature |
| `a2xaccounting_upgrade` | meta | Upgrade to Pro or Pro+ |
| `a2xaccounting_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `a2xaccounting_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `a2xaccounting_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `a2xaccounting_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
