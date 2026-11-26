# HaloPSA MCP by usefulapi

Use your [HaloPSA](https://halopsa.com) account from Claude, Cursor, or any MCP client. Read and update tickets, add ticket notes, and read clients, sites, end users, agents, assets and invoices in one tenant. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://halopsa.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://halopsa.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http halopsa https://halopsa.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=halopsa&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhalopsa.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "halopsa": {
      "url": "https://halopsa.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your HaloPSA credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/halopsa/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Halo tenant name** (the first part of your Halo URL), and the **client ID** and **client secret** of a Halo API application (Configuration → Integrations → Halo API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `halopsa_list_tickets` | read | List tickets |
| `halopsa_get_ticket` | read | Get ticket |
| `halopsa_list_ticket_notes` | read | List ticket notes |
| `halopsa_list_clients` | read | List clients |
| `halopsa_get_client` | read | Get client |
| `halopsa_list_sites` | read | List sites |
| `halopsa_list_users` | read | List end users |
| `halopsa_list_agents` | read | List agents |
| `halopsa_list_assets` | read | List assets |
| `halopsa_list_invoices` | read | List invoices |
| `halopsa_list_statuses` | read | List ticket statuses |
| `halopsa_create_ticket` | **write** | Create ticket |
| `halopsa_update_ticket` | **write** | Update ticket |
| `halopsa_add_ticket_note` | **write** | Add ticket note |
| `halopsa_usage_status` | meta | Usage status (free-tier meter) |
| `halopsa_request_feature` | meta | Request a missing feature |
| `halopsa_upgrade` | meta | Upgrade to Pro or Pro+ |
| `halopsa_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `halopsa_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `halopsa_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `halopsa_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
