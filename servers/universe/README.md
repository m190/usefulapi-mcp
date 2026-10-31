# Universe MCP by usefulapi

Use your [Universe](https://www.universe.com) account from Claude, Cursor, or any MCP client. Read events, ticket types, time slots, orders, attendees and daily ticket sales. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://universe.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://universe.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http universe https://universe.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=universe&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Funiverse.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "universe": {
      "url": "https://universe.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Universe account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/universe/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to **Universe** and approve access. The server stores the access per user. It only reads data. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `universe_get_viewer` | read | Who am I |
| `universe_list_events` | read | List events |
| `universe_get_event` | read | Get one event |
| `universe_list_ticket_types` | read | List ticket types |
| `universe_list_time_slots` | read | List time slots |
| `universe_list_orders` | read | List orders |
| `universe_get_order` | read | Get one order |
| `universe_list_attendees` | read | List attendees |
| `universe_event_sales_by_day` | read | Event sales by day |
| `universe_usage_status` | meta | Usage status (free-tier meter) |
| `universe_request_feature` | meta | Request a missing feature |
| `universe_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `universe_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `universe_upgrade` (it returns a Stripe Checkout link). Cancel any time with `universe_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `universe_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
