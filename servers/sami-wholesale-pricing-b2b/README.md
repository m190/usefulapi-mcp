# Samita MCP by usefulapi

Use your [Samita](https://samita.io) account from Claude, Cursor, or any MCP client. Reads the wholesale and volume pricing rules of one Shopify store, with their customers, products and tiers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sami-wholesale-pricing-b2b.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sami-wholesale-pricing-b2b.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sami-wholesale-pricing-b2b https://sami-wholesale-pricing-b2b.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sami-wholesale-pricing-b2b&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsami-wholesale-pricing-b2b.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sami-wholesale-pricing-b2b": {
      "url": "https://sami-wholesale-pricing-b2b.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Samita credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sami-wholesale-pricing-b2b/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Shopify shop domain** (`your-store.myshopify.com`) and your **Samita API key** (created in the Samita Wholesale B2B app). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `samita_list_wholesale_pricings` | read | List wholesale pricing rules |
| `samita_get_wholesale_pricing` | read | Get a wholesale pricing rule |
| `samita_list_volume_pricings` | read | List volume pricing rules |
| `samita_get_volume_pricing` | read | Get a volume pricing rule |
| `samita_usage_status` | meta | Usage status (free-tier meter) |
| `samita_request_feature` | meta | Request a missing feature |
| `samita_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `samita_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `samita_upgrade` (it returns a Stripe Checkout link). Cancel any time with `samita_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `samita_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
