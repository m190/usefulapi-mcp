# Eventbrite MCP by usefulapi

Use [Eventbrite](https://www.eventbrite.com) from Claude, Cursor, or any MCP client — create, update, copy and publish events, manage ticket classes, venues and discounts, and read attendees, orders and reports.
Hosted, no local install: connect with your own Eventbrite credentials.

**Live endpoint:** `https://eventbrite.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/eventbrite

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://eventbrite.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http eventbrite https://eventbrite.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=eventbrite&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Feventbrite.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "eventbrite": {
      "url": "https://eventbrite.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Eventbrite credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/eventbrite/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Eventbrite private token** (Account Settings → Developer Links → API Keys).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `eventbrite_get_me` | read | Get my user |
| `eventbrite_list_organizations` | read | List my organizations |
| `eventbrite_list_events` | read | List an organization's events |
| `eventbrite_get_event` | read | Get an event |
| `eventbrite_get_event_description` | read | Get an event's full description |
| `eventbrite_list_ticket_classes` | read | List an event's ticket classes |
| `eventbrite_list_venues` | read | List an organization's venues |
| `eventbrite_list_attendees` | read | List attendees |
| `eventbrite_get_attendee` | read | Get an attendee |
| `eventbrite_list_orders` | read | List orders |
| `eventbrite_get_order` | read | Get an order |
| `eventbrite_list_discounts` | read | List discounts |
| `eventbrite_get_capacity` | read | Get an event's capacity |
| `eventbrite_list_inventory_tiers` | read | List an event's inventory tiers |
| `eventbrite_get_sales_report` | read | Get a sales report |
| `eventbrite_get_attendee_report` | read | Get an attendee report |
| `eventbrite_create_event` | **write** | Create a draft event |
| `eventbrite_update_event` | **write** | Update an event |
| `eventbrite_copy_event` | **write** | Copy an event |
| `eventbrite_publish_event` | **write** | Publish an event |
| `eventbrite_unpublish_event` | **write** | Unpublish an event |
| `eventbrite_create_ticket_class` | **write** | Create a ticket class |
| `eventbrite_update_ticket_class` | **write** | Update a ticket class |
| `eventbrite_create_venue` | **write** | Create a venue |
| `eventbrite_create_discount` | **write** | Create a discount or access code |
| `eventbrite_update_discount` | **write** | Update a discount |
| `eventbrite_usage_status` | meta | Usage status (free-tier meter) |
| `eventbrite_request_feature` | meta | Request a missing feature |
| `eventbrite_upgrade` | meta | Upgrade to Pro (unlimited) |
| `eventbrite_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `eventbrite_upgrade` (it returns a Stripe Checkout link). Cancel any time with `eventbrite_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `eventbrite_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Eventbrite.
