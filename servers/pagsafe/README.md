# PagSafe MCP by usefulapi

Use your [PagSafe](https://pagsafe.com.br) account from Claude, Cursor, or any MCP client. Create Pix charges, check and refund payments, and run Pix Automático subscriptions. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://pagsafe.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pagsafe.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pagsafe https://pagsafe.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pagsafe&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpagsafe.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pagsafe": {
      "url": "https://pagsafe.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PagSafe credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pagsafe/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **PagSafe API key** (`x-api-key`) and **API secret** (`x-api-secret`), created in PagSafe under Integrações → API → Nova credencial. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pagsafe_create_pix_charge` | **write** | Create a Pix charge |
| `pagsafe_get_transaction` | read | Get a transaction |
| `pagsafe_refund_transaction` | **write** | Refund a transaction |
| `pagsafe_create_pix_subscription` | **write** | Create a Pix Automático subscription |
| `pagsafe_get_subscription` | read | Get a subscription |
| `pagsafe_cancel_pix_subscription` | **write** | Cancel a PagSafe subscription |
| `pagsafe_usage_status` | meta | Usage status (free-tier meter) |
| `pagsafe_request_feature` | meta | Request a missing feature |
| `pagsafe_upgrade` | meta | Upgrade to Pro or Pro+ |
| `pagsafe_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `pagsafe_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `pagsafe_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `pagsafe_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
