# Agiliron MCP by usefulapi

Use your [Agiliron](https://www.agiliron.com) account from Claude, Cursor, or any MCP client. Read leads, contacts, accounts, sales and purchase orders, stock, tasks and notes, and add or update CRM records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://agiliron.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://agiliron.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http agiliron https://agiliron.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=agiliron&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fagiliron.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "agiliron": {
      "url": "https://agiliron.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Agiliron credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/agiliron/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Agiliron company name** (the part before `.agiliron.net`) and your **Agiliron API key**, created in your Agiliron account. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `agiliron_list_leads` | read | List leads |
| `agiliron_list_contacts` | read | List contacts |
| `agiliron_list_accounts` | read | List accounts |
| `agiliron_get_account_balance` | read | Get account balance |
| `agiliron_list_events` | read | List events |
| `agiliron_list_tasks` | read | List tasks |
| `agiliron_list_tickets` | read | List tickets |
| `agiliron_list_quotes` | read | List quotes |
| `agiliron_list_sales_orders` | read | List sales orders |
| `agiliron_list_purchase_orders` | read | List purchase orders |
| `agiliron_list_product_categories` | read | List product categories |
| `agiliron_get_product` | read | Get product |
| `agiliron_get_product_inventory` | read | Get product inventory |
| `agiliron_get_vendor` | read | Get vendor |
| `agiliron_list_channels` | read | List sales channels |
| `agiliron_list_notes` | read | List notes |
| `agiliron_get_settings` | read | Get settings |
| `agiliron_add_lead` | **write** | Add lead |
| `agiliron_update_lead` | **write** | Update lead |
| `agiliron_add_contact` | **write** | Add contact |
| `agiliron_update_contact` | **write** | Update contact |
| `agiliron_add_account` | **write** | Add account |
| `agiliron_update_account` | **write** | Update account |
| `agiliron_add_task` | **write** | Add task |
| `agiliron_update_task` | **write** | Update task |
| `agiliron_add_note` | **write** | Add note |
| `agiliron_usage_status` | meta | Usage status (free-tier meter) |
| `agiliron_request_feature` | meta | Request a missing feature |
| `agiliron_upgrade` | meta | Upgrade to Pro or Pro+ |
| `agiliron_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `agiliron_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `agiliron_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `agiliron_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
