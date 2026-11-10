# SalesRabbit MCP by usefulapi

Use your [SalesRabbit](https://salesrabbit.com) account from Claude, Cursor, or any MCP client. It reads leads, status history, users, roles, org units and areas, and it creates and updates leads. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://salesrabbit.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://salesrabbit.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http salesrabbit https://salesrabbit.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=salesrabbit&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsalesrabbit.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "salesrabbit": {
      "url": "https://salesrabbit.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SalesRabbit credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/salesrabbit/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **SalesRabbit access token**, created in SalesRabbit under **Company Settings**. The token acts as the company owner, so keep it secret. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `salesrabbit_list_leads` | read | List leads |
| `salesrabbit_get_lead` | read | Get a lead |
| `salesrabbit_list_lead_statuses` | read | List lead statuses |
| `salesrabbit_get_lead_status` | read | Get a lead status |
| `salesrabbit_list_lead_status_history` | read | List lead status history |
| `salesrabbit_get_lead_status_history` | read | Get a lead's status history |
| `salesrabbit_list_users` | read | List users |
| `salesrabbit_get_user` | read | Get a user |
| `salesrabbit_list_roles` | read | List roles and permissions |
| `salesrabbit_list_org_units` | read | List org units |
| `salesrabbit_get_org_unit` | read | Get an org unit |
| `salesrabbit_list_lead_custom_fields` | read | List lead custom fields |
| `salesrabbit_get_account` | read | Get account details |
| `salesrabbit_find_areas` | read | Find areas at a location |
| `salesrabbit_create_lead` | **write** | Create a lead |
| `salesrabbit_update_lead` | **write** | Update a lead |
| `salesrabbit_usage_status` | meta | Usage status (free-tier meter) |
| `salesrabbit_request_feature` | meta | Request a missing feature |
| `salesrabbit_upgrade` | meta | Upgrade to Pro or Pro+ |
| `salesrabbit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `salesrabbit_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `salesrabbit_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `salesrabbit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
