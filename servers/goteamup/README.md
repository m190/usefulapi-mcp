# TeamUp MCP by usefulapi

Use [TeamUp](https://goteamup.com) from Claude, Cursor, or any MCP client — check classes, attendance, customers, memberships and invoices, and register customers for events.
Hosted, no local install: connect with your own TeamUp credentials.

**Live endpoint:** `https://goteamup.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/goteamup

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://goteamup.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http goteamup https://goteamup.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=goteamup&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgoteamup.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "goteamup": {
      "url": "https://goteamup.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TeamUp credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/goteamup/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide a **TeamUp M2M API token** (Business Dashboard → Settings → Integrations → API Integration → M2M Tokens), plus an optional provider ID.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `goteamup_get_authenticated_application` | read | Get the authenticated application |
| `goteamup_list_customers` | read | List customers |
| `goteamup_get_customer` | read | Get one customer |
| `goteamup_list_events` | read | List events (classes and appointments) |
| `goteamup_get_event` | read | Get one event |
| `goteamup_list_attendances` | read | List attendances (bookings) |
| `goteamup_list_customer_memberships` | read | List customer memberships |
| `goteamup_get_customer_membership` | read | Get one customer membership |
| `goteamup_list_memberships` | read | List memberships (plans) |
| `goteamup_list_offering_types` | read | List offering types (class types) |
| `goteamup_list_instructors` | read | List instructors |
| `goteamup_list_venues` | read | List venues |
| `goteamup_list_invoices` | read | List invoices |
| `goteamup_get_invoice` | read | Get one invoice |
| `goteamup_list_crm_interactions` | read | List CRM interactions |
| `goteamup_create_customer` | **write** | Create (invite) a customer |
| `goteamup_register_customer_for_event` | **write** | Book a customer into an event |
| `goteamup_unregister_customer_from_event` | **write** | Remove a customer from an event |
| `goteamup_confirm_attendance` | **write** | Check a customer in |
| `goteamup_log_crm_interaction` | **write** | Log a CRM interaction |
| `goteamup_usage_status` | meta | Usage status (free-tier meter) |
| `goteamup_request_feature` | meta | Request a missing feature |
| `goteamup_upgrade` | meta | Upgrade to Pro or Pro+ |
| `goteamup_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `goteamup_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `goteamup_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `goteamup_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by TeamUp.
