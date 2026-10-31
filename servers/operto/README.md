# Operto MCP by usefulapi

Use your [Operto](https://operto.com) account from Claude, Cursor, or any MCP client. Read properties, reservations, smart locks and thermostats. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://operto.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://operto.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http operto https://operto.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=operto&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Foperto.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "operto": {
      "url": "https://operto.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Operto credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/operto/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Operto API key and API secret**. Operto issues them to your organization: ask your Client Success contact if you have none. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `operto_list_properties` | read | List properties |
| `operto_get_property` | read | Get a property |
| `operto_list_reservations` | read | List reservations |
| `operto_get_reservation` | read | Get a reservation |
| `operto_list_locks` | read | List locks of a property |
| `operto_list_thermostats` | read | List all thermostats |
| `operto_list_property_thermostats` | read | List thermostats of a property |
| `operto_get_thermostat` | read | Get a thermostat |
| `operto_usage_status` | meta | Usage status (free-tier meter) |
| `operto_request_feature` | meta | Request a missing feature |
| `operto_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `operto_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `operto_upgrade` (it returns a Stripe Checkout link). Cancel any time with `operto_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `operto_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
