# Veyra MCP by usefulapi

Use your [Veyra](https://veyra.money) account from Claude, Cursor, or any MCP client. Read the budget, capabilities, payment sources and payments, and create or cancel agent payments within your limits. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://veyra.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://veyra.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http veyra https://veyra.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=veyra&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fveyra.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "veyra": {
      "url": "https://veyra.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Veyra credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/veyra/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Veyra endpoint credential** (it starts with `veyra_`; create it on the endpoint page of the Veyra dashboard). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `veyra_get_capabilities` | read | Get capabilities |
| `veyra_get_budget` | read | Get budget |
| `veyra_list_payment_sources` | read | List payment sources |
| `veyra_create_payment` | **write** | Create a payment |
| `veyra_get_payment` | read | Get a payment |
| `veyra_list_payments` | read | List payments |
| `veyra_cancel_payment` | **write** | Cancel a payment |
| `veyra_usage_status` | meta | Usage status (free-tier meter) |
| `veyra_request_feature` | meta | Request a missing feature |
| `veyra_upgrade` | meta | Upgrade to Pro or Pro+ |
| `veyra_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `veyra_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `veyra_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `veyra_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
