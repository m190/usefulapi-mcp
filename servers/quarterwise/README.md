# Quarterwise MCP by usefulapi

Use your [Quarterwise](https://quarterwise.co.uk) account from Claude, Cursor, or any MCP client. Read your properties, businesses, HMRC category keys and transactions, and add income and expense entries to a ledger. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://quarterwise.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://quarterwise.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http quarterwise https://quarterwise.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=quarterwise&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fquarterwise.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "quarterwise": {
      "url": "https://quarterwise.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Quarterwise credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/quarterwise/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Quarterwise API key**. Create it in the Quarterwise app under **Account → API access**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `quarterwise_get_account` | read | Get account and API capabilities |
| `quarterwise_list_sources` | read | List properties and businesses |
| `quarterwise_list_categories` | read | List HMRC category keys |
| `quarterwise_list_transactions` | read | List transactions of a source |
| `quarterwise_add_transactions` | **write** | Add transactions to a source (write) |
| `quarterwise_usage_status` | meta | Usage status (free-tier meter) |
| `quarterwise_request_feature` | meta | Request a missing feature |
| `quarterwise_upgrade` | meta | Upgrade to Pro or Pro+ |
| `quarterwise_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `quarterwise_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `quarterwise_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `quarterwise_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
