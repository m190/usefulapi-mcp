# Agendor MCP by usefulapi

Use your [Agendor](https://agendor.com.br) account from Claude, Cursor, or any MCP client. Read people, organizations, deals, tasks and funnels, and create records or move and close deals. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://agendor.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://agendor.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http agendor https://agendor.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=agendor&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fagendor.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "agendor": {
      "url": "https://agendor.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Agendor credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/agendor/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Agendor API token** (Menu → Integrações). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `agendor_get_current_user` | read | Get the connected user |
| `agendor_list_funnels` | read | List sales funnels |
| `agendor_list_deal_stages` | read | List deal stages |
| `agendor_list_loss_reasons` | read | List loss reasons |
| `agendor_list_products` | read | List products |
| `agendor_list_people` | read | List people |
| `agendor_get_person` | read | Get a person |
| `agendor_create_person` | **write** | Create a person |
| `agendor_update_person` | **write** | Update a person |
| `agendor_list_organizations` | read | List organizations |
| `agendor_get_organization` | read | Get an organization |
| `agendor_create_organization` | **write** | Create an organization |
| `agendor_list_deals` | read | List deals |
| `agendor_get_deal` | read | Get a deal |
| `agendor_create_deal_for_person` | **write** | Create a deal for a person |
| `agendor_move_deal_stage` | **write** | Move a deal to another stage |
| `agendor_set_deal_status` | **write** | Set a deal status |
| `agendor_list_tasks` | read | List tasks |
| `agendor_list_users` | read | List users |
| `agendor_usage_status` | meta | Usage status (free-tier meter) |
| `agendor_request_feature` | meta | Request a missing feature |
| `agendor_upgrade` | meta | Upgrade to Pro or Pro+ |
| `agendor_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `agendor_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `agendor_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `agendor_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
