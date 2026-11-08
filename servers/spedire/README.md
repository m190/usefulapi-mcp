# SpedirePRO MCP by usefulapi

Use your [SpedirePRO](https://www.spedirepro.com) account from Claude, Cursor, or any MCP client. It reads rates, shipments, tracking, labels and drop-off points, and it can create shipments, correct addresses and book pickups. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://spedire.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://spedire.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http spedire https://spedire.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spedire&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fspedire.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "spedire": {
      "url": "https://spedire.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SpedirePRO credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/spedire/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **SpedirePRO API key** (SpedirePRO → IMPOSTAZIONI → App e Integrazioni → API; the API must be enabled for your account first). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `spedire_get_account` | read | Get account |
| `spedire_get_wallet_movements` | read | Wallet movements |
| `spedire_list_shipments` | read | List shipments |
| `spedire_get_shipment` | read | Get a shipment |
| `spedire_get_shipment_events` | read | Shipment events |
| `spedire_get_label_url` | read | Get label download URL |
| `spedire_get_quotes` | read | Get shipping quotes |
| `spedire_list_couriers` | read | List couriers |
| `spedire_lookup_postcode` | read | Resolve postcode |
| `spedire_find_drop_off_points` | read | Find drop-off points |
| `spedire_get_drop_off_point` | read | Get a drop-off point |
| `spedire_create_shipment` | **write** | Create a shipment |
| `spedire_correct_address` | **write** | Correct shipment addresses |
| `spedire_book_pickup` | **write** | Book a courier pickup |
| `spedire_usage_status` | meta | Usage status (free-tier meter) |
| `spedire_request_feature` | meta | Request a missing feature |
| `spedire_upgrade` | meta | Upgrade to Pro or Pro+ |
| `spedire_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `spedire_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `spedire_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `spedire_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
