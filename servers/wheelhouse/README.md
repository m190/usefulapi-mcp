# Wheelhouse MCP by usefulapi

Use your [Wheelhouse](https://www.usewheelhouse.com) account from Claude, Cursor, or any MCP client. Read listings, price recommendations, reservations and KPIs, and set listing notes or custom rates that change live prices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://wheelhouse.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://wheelhouse.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http wheelhouse https://wheelhouse.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=wheelhouse&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwheelhouse.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "wheelhouse": {
      "url": "https://wheelhouse.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Wheelhouse credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/wheelhouse/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Wheelhouse RM API key** (Wheelhouse → Api Key in your account settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wheelhouse_list_listings` | read | List listings |
| `wheelhouse_get_listing` | read | Get a listing |
| `wheelhouse_get_pricing_tier` | read | Get pricing tier |
| `wheelhouse_get_listing_flags` | read | Get listing flags |
| `wheelhouse_get_recent_changes` | read | Get recent changes |
| `wheelhouse_get_listing_kpis` | read | Get listing KPIs |
| `wheelhouse_get_price_recommendations` | read | Get price recommendations |
| `wheelhouse_get_price_calendar` | read | Get price calendar |
| `wheelhouse_get_base_price_recommendation` | read | Get base price recommendation |
| `wheelhouse_get_min_max_prices` | read | Get minimum and maximum prices |
| `wheelhouse_get_bulk_price_recommendations` | read | Get price recommendations for many listings |
| `wheelhouse_list_price_models` | read | List price models |
| `wheelhouse_get_preferences` | read | Get pricing preferences |
| `wheelhouse_get_preferences_changelog` | read | Get preferences changelog |
| `wheelhouse_get_custom_rates` | read | Get custom rates |
| `wheelhouse_get_reservations` | read | Get reservations |
| `wheelhouse_get_listing_notes` | read | Get listing notes |
| `wheelhouse_list_segments` | read | List portfolio segments |
| `wheelhouse_list_dynamic_sets` | read | List dynamic sets |
| `wheelhouse_list_markets` | read | List markets for a country |
| `wheelhouse_list_notifications` | read | List notifications |
| `wheelhouse_get_usage` | read | Get API usage |
| `wheelhouse_add_listing_note` | **write** | Add a listing note |
| `wheelhouse_sync_listing` | **write** | Sync a listing now |
| `wheelhouse_set_custom_rate` | **write** | Set a custom rate |
| `wheelhouse_delete_custom_rates` | **write** | Delete custom rates |
| `wheelhouse_usage_status` | meta | Usage status (free-tier meter) |
| `wheelhouse_request_feature` | meta | Request a missing feature |
| `wheelhouse_upgrade` | meta | Upgrade to Pro or Pro+ |
| `wheelhouse_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `wheelhouse_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `wheelhouse_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `wheelhouse_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
