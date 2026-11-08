# Play Systems MCP by usefulapi

Use your [Play Systems](https://playsystems.io) account from Claude, Cursor, or any MCP client. Read-only access to e-invoices and their payments, hosting packages, domains, DNS and web usage. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://play-systems-api.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://play-systems-api.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http play-systems-api https://play-systems-api.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=play-systems-api&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fplay-systems-api.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "play-systems-api": {
      "url": "https://play-systems-api.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Play Systems credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/play-systems-api/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Play Systems API key** and your **Issuer VAT number (9 digits)**. Play Systems shows the key once, when it is created; ask Play Systems for a new key if you lost it. The server uses the VAT number once to check the key and does not store it. The server validates the key and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `playsystemsapi_list_invoices` | read | List invoices |
| `playsystemsapi_get_invoice` | read | Get invoice |
| `playsystemsapi_list_invoice_payments` | read | List invoice payments |
| `playsystemsapi_get_package` | read | Get hosting package |
| `playsystemsapi_get_web_usage` | read | Get web usage |
| `playsystemsapi_get_domain` | read | Get domain |
| `playsystemsapi_get_domain_dns` | read | Get domain DNS records |
| `playsystemsapi_search_domains` | read | Search domain availability |
| `playsystemsapi_usage_status` | meta | Usage status (free-tier meter) |
| `playsystemsapi_request_feature` | meta | Request a missing feature |
| `playsystemsapi_upgrade` | meta | Upgrade to Pro or Pro+ |
| `playsystemsapi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `playsystemsapi_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `playsystemsapi_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `playsystemsapi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
