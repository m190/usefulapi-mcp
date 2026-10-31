# MoeGo MCP by usefulapi

Use your [MoeGo](https://www.moego.pet) account from Claude, Cursor, or any MCP client. Read customers, pets, appointments, orders, payments, memberships, leads and reports, and add notes to customers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://moego.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://moego.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http moego https://moego.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=moego&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmoego.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "moego": {
      "url": "https://moego.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MoeGo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/moego/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **MoeGo API key** (the Secret; MoeGo issues it through your Customer Success Manager). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `moego_list_companies` | read | List companies |
| `moego_get_company` | read | Get a company |
| `moego_list_businesses` | read | List businesses (locations) |
| `moego_get_business` | read | Get a business (location) |
| `moego_list_customers` | read | List customers |
| `moego_get_customer` | read | Get a customer |
| `moego_list_customer_notes` | read | List customer notes |
| `moego_list_customer_tags` | read | List customer tags |
| `moego_list_pets` | read | List pets |
| `moego_list_customer_pets` | read | List pets of a customer |
| `moego_get_pet` | read | Get a pet |
| `moego_list_appointments` | read | List appointments |
| `moego_get_appointment` | read | Get an appointment |
| `moego_list_appointment_notes` | read | List appointment notes |
| `moego_list_blocks` | read | List time blocks |
| `moego_get_booking_availability` | read | Get online booking availability |
| `moego_list_orders` | read | List orders |
| `moego_get_order` | read | Get an order |
| `moego_list_payments` | read | List payments |
| `moego_get_payment` | read | Get a payment |
| `moego_list_discounts` | read | List discount codes |
| `moego_list_retail_products` | read | List retail products |
| `moego_list_memberships` | read | List membership plans |
| `moego_list_membership_subscriptions` | read | List membership subscriptions |
| `moego_list_packages` | read | List customer packages |
| `moego_list_leads` | read | List leads |
| `moego_get_lead` | read | Get a lead |
| `moego_list_agreements` | read | List agreements |
| `moego_list_reports` | read | List reports |
| `moego_fetch_report_data` | read | Fetch report data |
| `moego_append_customer_note` | **write** | Add a customer note |
| `moego_usage_status` | meta | Usage status (free-tier meter) |
| `moego_request_feature` | meta | Request a missing feature |
| `moego_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `moego_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `moego_upgrade` (it returns a Stripe Checkout link). Cancel any time with `moego_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `moego_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
