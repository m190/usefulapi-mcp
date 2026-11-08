# Boulevard MCP by usefulapi

Use [Boulevard](https://www.joinblvd.com) from Claude, Cursor, or any MCP client — look up appointments, clients, services, staff, memberships and orders, and update client records.
Hosted, no local install: connect with your own Boulevard credentials.

**Live endpoint:** `https://boulevard.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/boulevard

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://boulevard.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http boulevard https://boulevard.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=boulevard&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fboulevard.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "boulevard": {
      "url": "https://boulevard.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Boulevard credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/boulevard/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Boulevard offline app client ID and client secret**, plus your **business ID** (from the Boulevard Developer Portal).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `boulevard_get_business` | read | Get the business |
| `boulevard_list_locations` | read | List locations |
| `boulevard_list_appointments` | read | List appointments |
| `boulevard_get_appointment` | read | Get one appointment |
| `boulevard_list_clients` | read | List or search clients |
| `boulevard_get_client` | read | Get one client |
| `boulevard_list_services` | read | List services |
| `boulevard_list_staff` | read | List staff |
| `boulevard_list_shifts` | read | List staff shifts |
| `boulevard_list_timeblocks` | read | List timeblocks |
| `boulevard_list_orders` | read | List orders |
| `boulevard_get_order` | read | Get one order |
| `boulevard_list_products` | read | List products |
| `boulevard_list_memberships` | read | List memberships |
| `boulevard_list_tags` | read | List tags |
| `boulevard_create_client` | **write** | Create a client |
| `boulevard_update_client` | **write** | Update a client |
| `boulevard_create_client_note` | **write** | Add a client note |
| `boulevard_update_appointment` | **write** | Update an appointment |
| `boulevard_create_timeblock` | **write** | Block staff time |
| `boulevard_add_tag` | **write** | Apply a tag |
| `boulevard_usage_status` | meta | Usage status (free-tier meter) |
| `boulevard_request_feature` | meta | Request a missing feature |
| `boulevard_upgrade` | meta | Upgrade to Pro or Pro+ |
| `boulevard_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `boulevard_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `boulevard_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `boulevard_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Boulevard.
