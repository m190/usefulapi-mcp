# BSS B2B Solution MCP by usefulapi

Use your [BSS B2B Solution](https://apps.shopify.com/b2b-solution-custom-pricing) account from Claude, Cursor, or any MCP client. Reads and manages wholesale pricing rules, searches products, and reads or approves wholesale applicants for one Shopify store. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bss-b2b-solution.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bss-b2b-solution.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bss-b2b-solution https://bss-b2b-solution.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bss-b2b-solution&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbss-b2b-solution.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bss-b2b-solution": {
      "url": "https://bss-b2b-solution.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your BSS B2B Solution credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bss-b2b-solution/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **store domain** (`your-store.myshopify.com`) and your **Public API access key** (Shopify admin → BSS B2B Solution → Integrations → Public API → Get API key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bssb2b_list_volume_pricing_rules` | read | List volume pricing rules |
| `bssb2b_list_custom_pricing_rules` | read | List custom pricing rules |
| `bssb2b_get_custom_pricing_rule` | read | Get a custom pricing rule |
| `bssb2b_get_custom_pricing_rules_for_products` | read | Get custom pricing rules for products |
| `bssb2b_get_custom_pricing_rules_for_customers` | read | Get custom pricing rules for customers |
| `bssb2b_search_products` | read | Search products |
| `bssb2b_get_registration_form` | read | Get a registration form |
| `bssb2b_list_registrations` | read | List wholesale registrations |
| `bssb2b_save_custom_pricing_rule` | **write** | Create or update a custom pricing rule |
| `bssb2b_delete_custom_pricing_rules` | **write** | Delete custom pricing rules |
| `bssb2b_set_registration_status` | **write** | Approve or reject wholesale applicants |
| `bssb2b_usage_status` | meta | Usage status (free-tier meter) |
| `bssb2b_request_feature` | meta | Request a missing feature |
| `bssb2b_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `bssb2b_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `bssb2b_upgrade` (it returns a Stripe Checkout link). Cancel any time with `bssb2b_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `bssb2b_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
