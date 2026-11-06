# Molzait MCP by usefulapi

Use your [Molzait](https://molzait.com) account from Claude, Cursor, or any MCP client. Read reservations, guests, availability and gift cards, and create or change reservations. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://molzait.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://molzait.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http molzait https://molzait.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=molzait&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmolzait.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "molzait": {
      "url": "https://molzait.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Molzait credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/molzait/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Molzait API key**, which Molzait issues on request for your restaurant. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `molzait_get_restaurant` | read | Get restaurant details |
| `molzait_list_labels` | read | List restaurant labels |
| `molzait_list_floor_plans` | read | List floor plans |
| `molzait_search_guests` | read | Search guests |
| `molzait_list_reservations` | read | List reservations |
| `molzait_get_reservation` | read | Get a reservation |
| `molzait_list_receipts` | read | List receipts of a reservation |
| `molzait_list_experiences` | read | List experiences |
| `molzait_list_available_slots` | read | List available slots |
| `molzait_list_gift_card_templates` | read | List gift card templates |
| `molzait_get_gift_card` | read | Get a gift card |
| `molzait_create_reservation` | **write** | Create a reservation |
| `molzait_update_reservation` | **write** | Update a reservation |
| `molzait_usage_status` | meta | Usage status (free-tier meter) |
| `molzait_request_feature` | meta | Request a missing feature |
| `molzait_upgrade` | meta | Upgrade to Pro or Pro+ |
| `molzait_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `molzait_upgrade` (it returns a Stripe Checkout link). Cancel any time with `molzait_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `molzait_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
