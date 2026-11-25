# Lithic MCP by usefulapi

Use your [Lithic](https://www.lithic.com) account from Claude, Cursor, or any MCP client. Read cards, card transactions, account holders and financial accounts, and pause or unpause cards. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://lithic.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://lithic.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http lithic https://lithic.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=lithic&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flithic.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "lithic": {
      "url": "https://lithic.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Lithic credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/lithic/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Lithic API key** and choose **Sandbox** or **Production** to match it (create the key in the Lithic Dashboard on the **Program settings** page). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lithic_list_cards` | read | List cards |
| `lithic_get_card` | read | Get a card |
| `lithic_list_transactions` | read | List transactions |
| `lithic_get_transaction` | read | Get a transaction |
| `lithic_list_account_holders` | read | List account holders |
| `lithic_get_account_holder` | read | Get an account holder |
| `lithic_list_financial_accounts` | read | List financial accounts |
| `lithic_get_financial_account` | read | Get a financial account |
| `lithic_pause_card` | **write** | Pause a card |
| `lithic_unpause_card` | **write** | Unpause a card |
| `lithic_usage_status` | meta | Usage status (free-tier meter) |
| `lithic_request_feature` | meta | Request a missing feature |
| `lithic_upgrade` | meta | Upgrade to Pro or Pro+ |
| `lithic_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `lithic_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `lithic_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `lithic_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
