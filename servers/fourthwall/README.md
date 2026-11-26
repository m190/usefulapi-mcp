# Fourthwall MCP by usefulapi

Use your [Fourthwall](https://fourthwall.com) account from Claude, Cursor, or any MCP client. Read orders, products, collections, members, donations and promotions, and mark products sold out or hidden. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://fourthwall.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fourthwall.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fourthwall https://fourthwall.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fourthwall&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffourthwall.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fourthwall": {
      "url": "https://fourthwall.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Fourthwall credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fourthwall/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Open API user name** and **Open API password** of a user you create under For developers → Open API → Create API User in your shop admin (a SUPER ADMIN can create it). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fourthwall_get_shop` | read | Get shop |
| `fourthwall_get_shop_contact_info` | read | Get shop contact info |
| `fourthwall_list_products` | read | List products |
| `fourthwall_get_product` | read | Get product |
| `fourthwall_get_product_inventory` | read | Get product inventory |
| `fourthwall_set_product_availability` | **write** | Set product availability |
| `fourthwall_set_product_state` | **write** | Set product visibility |
| `fourthwall_list_collections` | read | List collections |
| `fourthwall_get_collection` | read | Get collection |
| `fourthwall_list_collection_products` | read | List collection products |
| `fourthwall_set_collection_availability` | **write** | Set collection availability |
| `fourthwall_list_orders` | read | List orders |
| `fourthwall_get_order` | read | Get order |
| `fourthwall_get_order_by_friendly_id` | read | Get order by friendly id |
| `fourthwall_list_promotions` | read | List promotions |
| `fourthwall_get_promotion` | read | Get promotion |
| `fourthwall_list_membership_tiers` | read | List membership tiers |
| `fourthwall_list_members` | read | List members |
| `fourthwall_get_member` | read | Get member |
| `fourthwall_list_donations` | read | List donations |
| `fourthwall_get_donation` | read | Get donation |
| `fourthwall_list_mailing_list_entries` | read | List mailing list entries |
| `fourthwall_list_webhooks` | read | List webhooks |
| `fourthwall_list_webhook_events` | read | List webhook events |
| `fourthwall_get_streaming_status` | read | Get streaming status |
| `fourthwall_usage_status` | meta | Usage status (free-tier meter) |
| `fourthwall_request_feature` | meta | Request a missing feature |
| `fourthwall_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fourthwall_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `fourthwall_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `fourthwall_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `fourthwall_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
