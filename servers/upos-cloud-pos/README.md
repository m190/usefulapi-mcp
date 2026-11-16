# UPOS Cloud POS MCP by usefulapi

Use your [UPOS Cloud POS](https://www.lingapos.com) account from Claude, Cursor, or any MCP client. It reads customers, loyalty balances, store users, taxes, menu items, and sale and transaction reports, and creates or updates customer records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://upos-cloud-pos.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://upos-cloud-pos.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http upos-cloud-pos https://upos-cloud-pos.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=upos-cloud-pos&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fupos-cloud-pos.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "upos-cloud-pos": {
      "url": "https://upos-cloud-pos.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your UPOS Cloud POS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/upos-cloud-pos/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **UPOS Cloud POS Developer API key** (back office → Licenses → Developer API → Key Generator) and a **store id** (My Stores in the back office). The server validates the key and stores both values per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `uposcloudpos_list_customers` | read | List customers |
| `uposcloudpos_get_customer` | read | Get a customer |
| `uposcloudpos_get_customer_loyalties` | read | Get customer loyalties |
| `uposcloudpos_create_customer` | **write** | Create a customer |
| `uposcloudpos_update_customer` | **write** | Update a customer |
| `uposcloudpos_list_store_users` | read | List store users |
| `uposcloudpos_get_user` | read | Get a user |
| `uposcloudpos_list_taxes` | read | List taxes |
| `uposcloudpos_list_menu_items` | read | List menu items |
| `uposcloudpos_sale_report` | read | Sale report |
| `uposcloudpos_transaction_report` | read | Transaction report |
| `uposcloudpos_usage_status` | meta | Usage status (free-tier meter) |
| `uposcloudpos_request_feature` | meta | Request a missing feature |
| `uposcloudpos_upgrade` | meta | Upgrade to Pro or Pro+ |
| `uposcloudpos_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `uposcloudpos_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `uposcloudpos_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `uposcloudpos_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
