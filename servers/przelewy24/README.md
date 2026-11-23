# Przelewy24 MCP by usefulapi

Use your [Przelewy24](https://www.przelewy24.pl) account from Claude, Cursor, or any MCP client. Look up payments, refunds and settlements, register payment links, and request refunds. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://przelewy24.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://przelewy24.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http przelewy24 https://przelewy24.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=przelewy24&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fprzelewy24.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "przelewy24": {
      "url": "https://przelewy24.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Przelewy24 credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/przelewy24/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **environment** (sandbox or production), your **account ID (posId)**, your **reports key (API key)** and your **CRC key**. Find them in the Przelewy24 panel under API integration settings; the account ID is also in your registration email. The CRC key is checked on the first payment request, not at sign-in. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `przelewy24_check_access` | read | Check API access |
| `przelewy24_list_payment_methods` | read | List payment methods |
| `przelewy24_get_transaction` | read | Get a transaction |
| `przelewy24_get_refunds_for_order` | read | Get refunds for an order |
| `przelewy24_list_history` | read | List transaction history |
| `przelewy24_get_batch_details` | read | Get batch details |
| `przelewy24_register_transaction` | **write** | Register a payment |
| `przelewy24_refund_transaction` | **write** | Refund a transaction |
| `przelewy24_usage_status` | meta | Usage status (free-tier meter) |
| `przelewy24_request_feature` | meta | Request a missing feature |
| `przelewy24_upgrade` | meta | Upgrade to Pro or Pro+ |
| `przelewy24_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `przelewy24_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `przelewy24_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `przelewy24_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
