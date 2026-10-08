# OwnerRez MCP by usefulapi

Manage OwnerRez properties, bookings, guests, quotes and inquiries. Hosted, no local install.

**Live endpoint:** `https://ownerrez.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ownerrez.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ownerrez https://ownerrez.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ownerrez&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fownerrez.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ownerrez": {
      "url": "https://ownerrez.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ownerrez/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **OwnerRez credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `get_me` | read | Get current user |
| `list_properties` | read | List properties |
| `get_property` | read | Get a property |
| `list_bookings` | read | List bookings |
| `get_booking` | read | Get a booking |
| `list_guests` | read | List guests |
| `get_guest` | read | Get a guest |
| `list_quotes` | read | List quotes |
| `get_quote` | read | Get a quote |
| `list_listings` | read | List listings |
| `get_listing` | read | Get a listing |
| `list_listing_sites` | read | List listing sites |
| `list_owners` | read | List owners |
| `list_inquiries` | read | List inquiries |
| `list_messages` | read | List messages |
| `list_payments` | read | List payments |
| `get_payment` | read | Get a payment |
| `list_field_definitions` | read | List custom-field definitions |
| `ownerrez_request` | read | Raw read request |
| `create_guest` | **write** | Create a guest |
| `update_guest` | **write** | Update a guest |
| `create_booking` | **write** | Create a booking |
| `update_booking` | **write** | Update a booking |
| `create_quote` | **write** | Create a quote |
| `create_message` | **write** | Create a message |
| `ownerrez_usage_status` | meta | Usage status (free-tier meter) |
| `ownerrez_upgrade` | meta | Upgrade to Pro (unlimited) |
| `ownerrez_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `ownerrez_upgrade` (it returns a Stripe Checkout link). Cancel any time with `ownerrez_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `ownerrez_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
