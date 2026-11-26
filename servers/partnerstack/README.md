# PartnerStack MCP by usefulapi

Use your [PartnerStack](https://partnerstack.com) account from Claude, Cursor, or any MCP client. Read partnerships, leads, deals and rewards, and create leads and customers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://partnerstack.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://partnerstack.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http partnerstack https://partnerstack.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=partnerstack&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpartnerstack.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "partnerstack": {
      "url": "https://partnerstack.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PartnerStack credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/partnerstack/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **PartnerStack public key** and a **PartnerStack secret key** (one pair from Settings → Integrations → PartnerStack API Keys). The server validates the pair and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `partnerstack_list_partnerships` | read | List partnerships |
| `partnerstack_get_partnership` | read | Get a partnership |
| `partnerstack_list_customers` | read | List customers |
| `partnerstack_get_customer` | read | Get a customer |
| `partnerstack_create_customer` | **write** | Create a customer |
| `partnerstack_list_leads` | read | List leads |
| `partnerstack_get_lead` | read | Get a lead |
| `partnerstack_create_lead` | **write** | Create a lead |
| `partnerstack_list_deals` | read | List deals |
| `partnerstack_get_deal` | read | Get a deal |
| `partnerstack_list_transactions` | read | List transactions |
| `partnerstack_list_rewards` | read | List rewards |
| `partnerstack_list_actions` | read | List actions |
| `partnerstack_list_groups` | read | List groups |
| `partnerstack_list_partnership_links` | read | List partnership links |
| `partnerstack_list_products` | read | List products |
| `partnerstack_usage_status` | meta | Usage status (free-tier meter) |
| `partnerstack_request_feature` | meta | Request a missing feature |
| `partnerstack_upgrade` | meta | Upgrade to Pro or Pro+ |
| `partnerstack_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `partnerstack_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `partnerstack_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `partnerstack_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
