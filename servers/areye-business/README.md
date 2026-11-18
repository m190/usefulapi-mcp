# Areye MCP by usefulapi

Use your [Areye](https://areye.app/) business account from Claude, Cursor, or any MCP client. Estimate fares, book and cancel rides and deliveries, and list trips and batches. Hosted, no local install: connect with your own API key.

**Live endpoint:** `https://areye-business.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://areye-business.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http areye-business https://areye-business.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=areye-business&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fareye-business.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "areye-business": {
      "url": "https://areye-business.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Areye credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/areye-business/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Areye Business API key**. Use a live key for real bookings, or a sandbox key (it starts with sk_sandbox_) to test. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `areye_profile` | read | Get business profile |
| `areye_dashboard` | read | Get account dashboard |
| `areye_list_billing_statements` | read | List billing statements |
| `areye_list_zones` | read | List service zones |
| `areye_list_vehicle_types` | read | List vehicle types |
| `areye_list_parcel_sizes` | read | List parcel sizes |
| `areye_fare_estimate` | read | Estimate a fare |
| `areye_list_trips` | read | List trips |
| `areye_active_trips` | read | List active trips |
| `areye_get_trip` | read | Get a trip |
| `areye_list_batches` | read | List batches |
| `areye_get_batch` | read | Get a batch |
| `areye_book_trip` | **write** | Book a ride or parcel delivery |
| `areye_cancel_trip` | **write** | Cancel a trip |
| `areye_usage_status` | meta | Usage status (free-tier meter) |
| `areye_request_feature` | meta | Request a missing feature |
| `areye_upgrade` | meta | Upgrade to Pro or Pro+ |
| `areye_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `areye_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `areye_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `areye_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
