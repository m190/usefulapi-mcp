# RAYNET CRM MCP by usefulapi

Use your [RAYNET CRM](https://www.raynetcrm.com) account from Claude, Cursor, or any MCP client. Read companies, persons, leads, deals, tasks, products and users, and create leads and tasks; it does not update or delete records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://raynetcrm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://raynetcrm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http raynetcrm https://raynetcrm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=raynetcrm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fraynetcrm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "raynetcrm": {
      "url": "https://raynetcrm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your RAYNET CRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/raynetcrm/

<!-- connect:end (generated above, edit below) -->

On first connect you provide four fields: the **Region** (app.raynet.cz, app.raynetcrm.sk, app.raynetcrm.com or eu.raynetcrm.com), a **User name** (the e-mail of an admin or API user), an **API key** (RAYNET CRM → Application settings → For developers → API keys) and the **Instance name** (from the CRM web address). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `raynetcrm_get_security_info` | read | Get the signed-in user and instance |
| `raynetcrm_list_companies` | read | List companies |
| `raynetcrm_get_company` | read | Get a company |
| `raynetcrm_list_persons` | read | List persons |
| `raynetcrm_get_person` | read | Get a person |
| `raynetcrm_list_leads` | read | List leads |
| `raynetcrm_get_lead` | read | Get a lead |
| `raynetcrm_list_deals` | read | List deals |
| `raynetcrm_get_deal` | read | Get a deal |
| `raynetcrm_list_tasks` | read | List tasks |
| `raynetcrm_get_task` | read | Get a task |
| `raynetcrm_list_products` | read | List products |
| `raynetcrm_list_users` | read | List user accounts |
| `raynetcrm_create_lead` | **write** | Create a lead |
| `raynetcrm_create_task` | **write** | Create a task |
| `raynetcrm_usage_status` | meta | Usage status (free-tier meter) |
| `raynetcrm_request_feature` | meta | Request a missing feature |
| `raynetcrm_upgrade` | meta | Upgrade to Pro or Pro+ |
| `raynetcrm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `raynetcrm_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `raynetcrm_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `raynetcrm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
