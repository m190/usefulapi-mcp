# Papaya Global MCP by usefulapi

Use your [Papaya Global](https://www.papayaglobal.com) account from Claude, Cursor, or any MCP client. Read wallets, wallet statements, payment groups, beneficiaries and payments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://papaya-global.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://papaya-global.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http papaya-global https://papaya-global.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=papaya-global&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpapaya-global.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "papaya-global": {
      "url": "https://papaya-global.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Papaya Global credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/papaya-global/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **API key** and a **client secret** for your **environment**, sandbox or production. Papaya Global integration support issues them. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `papayaglobal_list_wallets` | read | List wallets |
| `papayaglobal_get_wallet_statement` | read | Get wallet statement |
| `papayaglobal_list_payment_groups` | read | List payment groups |
| `papayaglobal_get_payment_group` | read | Get a payment group |
| `papayaglobal_list_beneficiaries` | read | List beneficiaries |
| `papayaglobal_get_beneficiary` | read | Get a beneficiary |
| `papayaglobal_list_payments` | read | List payments |
| `papayaglobal_get_payment` | read | Get a payment |
| `papayaglobal_usage_status` | meta | Usage status (free-tier meter) |
| `papayaglobal_request_feature` | meta | Request a missing feature |
| `papayaglobal_upgrade` | meta | Upgrade to Pro or Pro+ |
| `papayaglobal_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `papayaglobal_upgrade` (it returns a Stripe Checkout link). Cancel any time with `papayaglobal_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `papayaglobal_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
