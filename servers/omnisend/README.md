# Omnisend MCP by usefulapi

Use your [Omnisend](https://www.omnisend.com) account from Claude, Cursor, or any MCP client. Read contacts, products, campaigns, segments and automations, and create, update or tag contacts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://omnisend.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://omnisend.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http omnisend https://omnisend.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=omnisend&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fomnisend.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "omnisend": {
      "url": "https://omnisend.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Omnisend credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/omnisend/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Omnisend API key** (Integrations → API keys in Omnisend). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `omnisend_get_brand` | read | Get brand |
| `omnisend_list_contacts` | read | List contacts |
| `omnisend_get_contact` | read | Get contact |
| `omnisend_list_products` | read | List products |
| `omnisend_get_product` | read | Get product |
| `omnisend_list_product_categories` | read | List product categories |
| `omnisend_list_campaigns` | read | List campaigns |
| `omnisend_get_campaign` | read | Get campaign |
| `omnisend_list_segments` | read | List segments |
| `omnisend_get_segment_statistics` | read | Get segment statistics |
| `omnisend_list_automations` | read | List automations |
| `omnisend_get_automation` | read | Get automation |
| `omnisend_create_or_update_contact` | **write** | Create or update contact |
| `omnisend_add_contact_tags` | **write** | Add tags to contacts |
| `omnisend_usage_status` | meta | Usage status (free-tier meter) |
| `omnisend_request_feature` | meta | Request a missing feature |
| `omnisend_upgrade` | meta | Upgrade to Pro or Pro+ |
| `omnisend_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `omnisend_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `omnisend_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `omnisend_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
