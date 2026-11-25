# Rental Software MCP by usefulapi

Use your [Rental Software](https://rental.software) account from Claude, Cursor, or any MCP client. Check availability and prices, read items, leads and customers, and create or update customers and leads. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://rental-software.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rental-software.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rental-software https://rental-software.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rental-software&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frental-software.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rental-software": {
      "url": "https://rental-software.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Rental Software credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rental-software/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Rental Software API key**, which an admin creates under Settings → API Keys. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rentalsoftware_list_rentals` | read | List rental items |
| `rentalsoftware_get_rental` | read | Get rental item |
| `rentalsoftware_list_categories` | read | List categories |
| `rentalsoftware_list_popular_items` | read | List popular items |
| `rentalsoftware_availability_on_day` | read | Availability on a day |
| `rentalsoftware_check_availability_and_price` | read | Check availability and price |
| `rentalsoftware_list_customers` | read | List customers |
| `rentalsoftware_get_customer` | read | Get customer |
| `rentalsoftware_list_leads` | read | List leads |
| `rentalsoftware_get_lead` | read | Get lead |
| `rentalsoftware_list_setup_list` | read | List setup list |
| `rentalsoftware_get_stats` | read | Get dashboard statistics |
| `rentalsoftware_create_customer` | **write** | Create customer |
| `rentalsoftware_update_customer` | **write** | Update customer |
| `rentalsoftware_create_lead` | **write** | Create lead |
| `rentalsoftware_update_lead` | **write** | Update lead |
| `rentalsoftware_create_task` | **write** | Create task |
| `rentalsoftware_add_journal_entry` | **write** | Add journal entry |
| `rentalsoftware_usage_status` | meta | Usage status (free-tier meter) |
| `rentalsoftware_request_feature` | meta | Request a missing feature |
| `rentalsoftware_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rentalsoftware_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `rentalsoftware_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `rentalsoftware_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `rentalsoftware_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
