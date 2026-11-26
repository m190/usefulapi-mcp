# Ploomes MCP by usefulapi

Use your [Ploomes](https://www.ploomes.com) account from Claude, Cursor, or any MCP client. Read deals, pipelines, contacts, tasks, orders and quotes, and create, update, win or lose deals. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ploomes.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ploomes.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ploomes https://ploomes.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ploomes&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fploomes.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ploomes": {
      "url": "https://ploomes.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Ploomes credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ploomes/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a Ploomes **User-Key** (Administration, Integrations, Integration users; only an admin can create it). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ploomes_get_account` | read | Get account |
| `ploomes_list_contacts` | read | List contacts |
| `ploomes_list_deals` | read | List deals |
| `ploomes_list_deal_stages` | read | List deal stages |
| `ploomes_list_pipelines` | read | List pipelines |
| `ploomes_list_loss_reasons` | read | List loss reasons |
| `ploomes_list_tasks` | read | List tasks |
| `ploomes_list_task_types` | read | List task types |
| `ploomes_list_orders` | read | List orders |
| `ploomes_list_quotes` | read | List quotes |
| `ploomes_list_products` | read | List products |
| `ploomes_list_users` | read | List users |
| `ploomes_list_teams` | read | List teams |
| `ploomes_list_departments` | read | List departments |
| `ploomes_list_interactions` | read | List interaction records |
| `ploomes_list_tags` | read | List tags |
| `ploomes_list_fields` | read | List custom fields |
| `ploomes_list_cities` | read | List cities |
| `ploomes_list_currencies` | read | List currencies |
| `ploomes_list_documents` | read | List documents |
| `ploomes_create_contact` | **write** | Create a contact |
| `ploomes_create_deal` | **write** | Create a deal |
| `ploomes_update_deal` | **write** | Update a deal |
| `ploomes_win_deal` | **write** | Win a deal |
| `ploomes_lose_deal` | **write** | Lose a deal |
| `ploomes_create_task` | **write** | Create a task |
| `ploomes_finish_task` | **write** | Finish a task |
| `ploomes_create_interaction` | **write** | Log an interaction |
| `ploomes_usage_status` | meta | Usage status (free-tier meter) |
| `ploomes_request_feature` | meta | Request a missing feature |
| `ploomes_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ploomes_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ploomes_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ploomes_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ploomes_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
