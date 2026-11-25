# Beyond Pricing MCP by usefulapi

Use your [Beyond Pricing](https://www.beyondpricing.com) account from Claude, Cursor, or any MCP client. Read listings, calendars, reservations, comp sets and pricing rules, and set base prices or price syncing. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://beyond-pricing.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://beyond-pricing.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http beyond-pricing https://beyond-pricing.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=beyond-pricing&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbeyond-pricing.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "beyond-pricing": {
      "url": "https://beyond-pricing.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Beyond Pricing credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/beyond-pricing/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Beyond personal access token** (it starts with `bpat_`), created under Settings → Personal Access Tokens in Beyond. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `beyondpricing_list_listings` | read | List listings |
| `beyondpricing_get_listing` | read | Get a listing |
| `beyondpricing_get_calendar` | read | Get a listing calendar |
| `beyondpricing_get_market_insights` | read | Get market insights |
| `beyondpricing_list_recommendations` | read | List base-price recommendations |
| `beyondpricing_list_change_history` | read | List listing change history |
| `beyondpricing_get_customizations` | read | Get all pricing rules of a listing |
| `beyondpricing_get_customization` | read | Get one pricing rule of a listing |
| `beyondpricing_list_compsets` | read | List comp sets |
| `beyondpricing_get_compset` | read | Get a comp set |
| `beyondpricing_list_reservations` | read | List reservations |
| `beyondpricing_set_base_price` | **write** | Set a listing's base price |
| `beyondpricing_set_listing_activation` | **write** | Turn price syncing on or off |
| `beyondpricing_usage_status` | meta | Usage status (free-tier meter) |
| `beyondpricing_request_feature` | meta | Request a missing feature |
| `beyondpricing_upgrade` | meta | Upgrade to Pro or Pro+ |
| `beyondpricing_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `beyondpricing_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `beyondpricing_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `beyondpricing_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
