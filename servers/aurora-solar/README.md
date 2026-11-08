# Aurora Solar MCP by usefulapi

Use your [Aurora Solar](https://aurorasolar.com) account from Claude, Cursor, or any MCP client. Read projects, designs, pricing, financings, agreements and orders, and update a project and its note. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://aurora-solar.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://aurora-solar.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http aurora-solar https://aurora-solar.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=aurora-solar&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faurora-solar.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "aurora-solar": {
      "url": "https://aurora-solar.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Aurora Solar credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/aurora-solar/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Aurora API key** and the **tenant id** (an Admin creates the key in Aurora → Settings → API Tokens, and the tenant id is on the same page). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `aurora_get_tenant` | read | Get the tenant |
| `aurora_list_users` | read | List users |
| `aurora_list_teams` | read | List teams |
| `aurora_list_projects` | read | List projects |
| `aurora_get_project` | read | Get a project |
| `aurora_get_project_note` | read | Get the project note |
| `aurora_get_consumption_profile` | read | Get the consumption profile |
| `aurora_get_project_bill_summary` | read | Get the project bill summary |
| `aurora_list_agreements` | read | List agreements |
| `aurora_get_ahj` | read | Get an AHJ |
| `aurora_list_designs` | read | List designs of a project |
| `aurora_get_design` | read | Get a design |
| `aurora_get_design_summary` | read | Get a design summary |
| `aurora_get_roof_summary` | read | Get a roof summary |
| `aurora_get_design_pricing` | read | Get design pricing |
| `aurora_get_design_bill_summary` | read | Get the design bill summary |
| `aurora_list_financings` | read | List financings |
| `aurora_list_design_assets` | read | List design assets |
| `aurora_get_web_proposal` | read | Get the web proposal link |
| `aurora_list_orders` | read | List orders |
| `aurora_get_order` | read | Get an order |
| `aurora_list_design_requests` | read | List design requests |
| `aurora_list_modules` | read | List solar modules |
| `aurora_list_inverters` | read | List inverters |
| `aurora_list_proposal_templates` | read | List proposal templates |
| `aurora_list_webhooks` | read | List webhooks |
| `aurora_update_project` | **write** | Update a project |
| `aurora_update_project_note` | **write** | Update the project note |
| `aurora_usage_status` | meta | Usage status (free-tier meter) |
| `aurora_request_feature` | meta | Request a missing feature |
| `aurora_upgrade` | meta | Upgrade to Pro or Pro+ |
| `aurora_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `aurora_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `aurora_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `aurora_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
