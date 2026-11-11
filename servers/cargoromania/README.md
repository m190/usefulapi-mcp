# CargoRomania MCP by usefulapi

Use your [CargoRomania](https://cargoromania.ro) account from Claude, Cursor, or any MCP client. Read your cargo, offers, transports, tracking, trucks and invoices, and publish cargo or send offers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://cargoromania.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cargoromania.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cargoromania https://cargoromania.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cargoromania&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcargoromania.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cargoromania": {
      "url": "https://cargoromania.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CargoRomania credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cargoromania/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your company **API key** (CargoRomania → Profil → API & webhooks). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cargoromania_list_my_cargo` | read | List my cargo |
| `cargoromania_get_cargo` | read | Get a cargo posting |
| `cargoromania_get_cargo_pricing` | read | Get AI price guidance for cargo |
| `cargoromania_get_cargo_matches` | read | Get recommended carriers for cargo |
| `cargoromania_list_cargo_offers` | read | List offers on my cargo |
| `cargoromania_list_my_offers` | read | List my offers |
| `cargoromania_get_offer_negotiation` | read | Get an offer negotiation |
| `cargoromania_list_transports` | read | List transports |
| `cargoromania_get_transport` | read | Get a transport |
| `cargoromania_get_transport_tracking` | read | Get transport tracking |
| `cargoromania_list_transport_documents` | read | List transport documents |
| `cargoromania_list_invoices` | read | List invoices |
| `cargoromania_get_invoice` | read | Get an invoice |
| `cargoromania_list_trucks` | read | List my trucks |
| `cargoromania_list_empty_trucks` | read | List available trucks |
| `cargoromania_list_alerts` | read | List cargo alerts |
| `cargoromania_get_recommended_cargo` | read | Get recommended cargo |
| `cargoromania_publish_cargo` | **write** | Publish a cargo posting |
| `cargoromania_update_cargo` | **write** | Update a cargo posting |
| `cargoromania_cancel_cargo` | **write** | Cancel a cargo posting |
| `cargoromania_submit_offer` | **write** | Send an offer on cargo |
| `cargoromania_reject_offer` | **write** | Reject or withdraw an offer |
| `cargoromania_usage_status` | meta | Usage status (free-tier meter) |
| `cargoromania_request_feature` | meta | Request a missing feature |
| `cargoromania_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cargoromania_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `cargoromania_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `cargoromania_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `cargoromania_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
