# Mindbody MCP by usefulapi

Use [Mindbody](https://www.mindbodyonline.com) from Claude, Cursor, or any MCP client — read classes, schedules, clients, staff, services and sales, and add clients to classes, book appointments and manage clients.
Hosted, no local install: connect with your own Mindbody credentials.

**Live endpoint:** `https://mindbody.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/mindbody

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mindbody.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mindbody https://mindbody.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mindbody&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmindbody.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mindbody": {
      "url": "https://mindbody.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Mindbody credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mindbody/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Mindbody API key and site ID**, plus an optional staff login for staff-level tools.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mindbody_list_sites` | read | List sites |
| `mindbody_list_locations` | read | List locations |
| `mindbody_list_session_types` | read | List session types |
| `mindbody_list_classes` | read | List scheduled classes |
| `mindbody_list_class_schedules` | read | List class schedules |
| `mindbody_get_class_visits` | read | Get a class's visits (roster) |
| `mindbody_list_bookable_items` | read | Find bookable appointment slots |
| `mindbody_list_staff_appointments` | read | List appointments |
| `mindbody_list_clients` | read | Search clients |
| `mindbody_list_client_visits` | read | List a client's visits |
| `mindbody_list_client_memberships` | read | List a client's active memberships |
| `mindbody_get_client_account_balances` | read | Get client account balances |
| `mindbody_list_staff` | read | List staff |
| `mindbody_list_services` | read | List pricing options |
| `mindbody_list_sales` | read | List sales |
| `mindbody_add_client_to_class` | **write** | Book a client into a class |
| `mindbody_add_appointment` | **write** | Book an appointment |
| `mindbody_update_appointment` | **write** | Update an appointment |
| `mindbody_add_client` | **write** | Add a client |
| `mindbody_update_client` | **write** | Update a client |
| `mindbody_usage_status` | meta | Usage status (free-tier meter) |
| `mindbody_upgrade` | meta | Upgrade to Pro (unlimited) |
| `mindbody_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `mindbody_upgrade` (it returns a Stripe Checkout link). Cancel any time with `mindbody_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `mindbody_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Mindbody.
