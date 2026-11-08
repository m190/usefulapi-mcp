# Webfleet MCP by usefulapi

Use your [Webfleet](https://www.webfleet.com) account from Claude, Cursor, or any MCP client. It reads vehicle positions, trips, events, drivers and orders, and it adds addresses to the address book. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://webfleet.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://webfleet.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http webfleet https://webfleet.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=webfleet&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwebfleet.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "webfleet": {
      "url": "https://webfleet.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Webfleet credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/webfleet/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Webfleet account name**, your **WEBFLEET.connect API key** (Webfleet issues it on request), and a **Webfleet user name and password**. Use a dedicated user with only the rights you want to give. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `webfleet_list_object_groups` | read | List object groups |
| `webfleet_list_objects` | read | List objects with last position |
| `webfleet_get_vehicle` | read | Get vehicle details |
| `webfleet_find_nearest_vehicles` | read | Find nearest vehicles |
| `webfleet_list_drivers` | read | List drivers |
| `webfleet_list_orders` | read | List orders |
| `webfleet_list_addresses` | read | List addresses |
| `webfleet_list_trips` | read | List trips |
| `webfleet_list_events` | read | List events |
| `webfleet_create_address` | **write** | Create address |
| `webfleet_usage_status` | meta | Usage status (free-tier meter) |
| `webfleet_request_feature` | meta | Request a missing feature |
| `webfleet_upgrade` | meta | Upgrade to Pro or Pro+ |
| `webfleet_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `webfleet_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `webfleet_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `webfleet_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
