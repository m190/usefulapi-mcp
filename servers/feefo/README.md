# Feefo MCP by usefulapi

Use [Feefo](https://www.feefo.com) from Claude, Cursor, or any MCP client — work with your Feefo customer reviews, ratings and replies. Hosted, no local install: connect with your own Feefo credentials.

**Live endpoint:** `https://feefo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/feefo

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://feefo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http feefo https://feefo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=feefo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffeefo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "feefo": {
      "url": "https://feefo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Feefo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/feefo/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your **Feefo App Key Client ID, Secret and merchant identifier** (Feefo Hub > Settings > Connectivity > App Keys). They are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `feefo_list_reviews` | read | List Feefo reviews |
| `feefo_get_review` | read | Get a Feefo review |
| `feefo_get_review_summary` | read | Get Feefo rating summary |
| `feefo_get_product_ratings` | read | Get Feefo product ratings |
| `feefo_reply_to_review` | **write** | Reply to a Feefo review |
| `feefo_usage_status` | meta | Usage status (free-tier meter) |
| `feefo_request_feature` | meta | Request a missing feature |
| `feefo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `feefo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per merchant account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per merchant account) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `feefo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `feefo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `feefo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
