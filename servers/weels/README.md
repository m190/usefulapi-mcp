# Weel MCP by usefulapi

Use your [Weel](https://letsweel.com) account from Claude, Cursor, or any MCP client. Read users, transactions, budgets, balances, custom fields and accounting codes, without changing any data. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://weels.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://weels.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http weels https://weels.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=weels&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fweels.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "weels": {
      "url": "https://weels.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Weel credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/weels/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Weel API key** (created in Weel under Settings → API) and your **Business ID** (the numeric client ID of that business). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `weel_list_users` | read | List users |
| `weel_get_user` | read | Get a user |
| `weel_list_user_budget_members` | read | List budgets for a user |
| `weel_list_invites` | read | List invites |
| `weel_list_roles` | read | List roles |
| `weel_list_transactions` | read | List transactions |
| `weel_get_transaction` | read | Get a transaction |
| `weel_list_budgets` | read | List budgets |
| `weel_get_budget` | read | Get a budget |
| `weel_list_budget_members` | read | List budget members |
| `weel_get_budget_member` | read | Get a budget member |
| `weel_list_budget_owners` | read | List budget owners |
| `weel_list_budget_topups` | read | List budget top-ups |
| `weel_list_budget_member_topups` | read | List budget member top-ups |
| `weel_list_statements` | read | List statements |
| `weel_get_balances` | read | Get account balances |
| `weel_list_custom_fields` | read | List custom fields |
| `weel_get_custom_field` | read | Get a custom field |
| `weel_list_custom_field_options` | read | List custom field options |
| `weel_list_custom_field_budgets` | read | List budgets linked to a custom field |
| `weel_list_accounting_codes` | read | List accounting codes |
| `weel_list_categories` | read | List expense categories |
| `weel_list_tax_rates` | read | List tax rates |
| `weel_get_tax_rate` | read | Get a tax rate |
| `weel_usage_status` | meta | Usage status (free-tier meter) |
| `weel_request_feature` | meta | Request a missing feature |
| `weel_upgrade` | meta | Upgrade to Pro or Pro+ |
| `weel_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `weel_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `weel_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `weel_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
