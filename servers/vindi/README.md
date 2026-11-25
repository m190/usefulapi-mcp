# Vindi MCP by usefulapi

Use your [Vindi](https://vindi.com.br) account from Claude, Cursor, or any MCP client. Read customers, subscriptions, bills, charges and plans, and create or update customers or cancel subscriptions. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://vindi.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://vindi.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http vindi https://vindi.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=vindi&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvindi.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "vindi": {
      "url": "https://vindi.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Vindi credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/vindi/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Vindi API key**, copied from your Vindi account, and the **environment** (production or sandbox). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `vindi_get_merchant` | read | Get merchant |
| `vindi_list_customers` | read | List customers |
| `vindi_get_customer` | read | Get customer |
| `vindi_create_customer` | **write** | Create customer |
| `vindi_update_customer` | **write** | Update customer |
| `vindi_list_subscriptions` | read | List subscriptions |
| `vindi_get_subscription` | read | Get subscription |
| `vindi_end_subscription` | **write** | Cancel a subscription |
| `vindi_list_bills` | read | List bills |
| `vindi_get_bill` | read | Get bill |
| `vindi_list_charges` | read | List charges |
| `vindi_get_charge` | read | Get charge |
| `vindi_list_plans` | read | List plans |
| `vindi_get_plan` | read | Get plan |
| `vindi_usage_status` | meta | Usage status (free-tier meter) |
| `vindi_request_feature` | meta | Request a missing feature |
| `vindi_upgrade` | meta | Upgrade to Pro or Pro+ |
| `vindi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `vindi_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `vindi_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `vindi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
