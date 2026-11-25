# Junip MCP by usefulapi

Use your [Junip](https://junip.co) account from Claude, Cursor, or any MCP client. Read product and store reviews, and post or clear the public reply on a review. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://junip.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://junip.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http junip https://junip.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=junip&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjunip.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "junip": {
      "url": "https://junip.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Junip credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/junip/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Junip private-app access token** (Junip Admin → Integrations → your private app → Credentials). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `junip_get_token_info` | read | Get token info |
| `junip_list_product_reviews` | read | List product reviews |
| `junip_get_product_review` | read | Get a product review |
| `junip_list_store_reviews` | read | List store reviews |
| `junip_get_store_review` | read | Get a store review |
| `junip_reply_product_review` | **write** | Reply to a product review |
| `junip_reply_store_review` | **write** | Reply to a store review |
| `junip_usage_status` | meta | Usage status (free-tier meter) |
| `junip_request_feature` | meta | Request a missing feature |
| `junip_upgrade` | meta | Upgrade to Pro or Pro+ |
| `junip_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `junip_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `junip_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `junip_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
