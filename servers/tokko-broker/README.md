# Tokko Broker MCP by usefulapi

Use your Tokko Broker account from Claude, Cursor, or any MCP client. Read properties, developments and CRM contacts. The server is read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://tokko-broker.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tokko-broker.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tokko-broker https://tokko-broker.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tokko-broker&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftokko-broker.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tokko-broker": {
      "url": "https://tokko-broker.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Tokko Broker credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tokko-broker/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **agency API key** (MI EMPRESA → PERMISOS in Tokko Broker; an agency administrator copies it). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tokkobroker_list_properties` | read | List properties |
| `tokkobroker_get_property` | read | Get property |
| `tokkobroker_list_developments` | read | List developments |
| `tokkobroker_get_development` | read | Get development |
| `tokkobroker_list_contacts` | read | List contacts |
| `tokkobroker_get_contact` | read | Get contact |
| `tokkobroker_usage_status` | meta | Usage status (free-tier meter) |
| `tokkobroker_request_feature` | meta | Request a missing feature |
| `tokkobroker_upgrade` | meta | Upgrade to Pro or Pro+ |
| `tokkobroker_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `tokkobroker_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `tokkobroker_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `tokkobroker_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
