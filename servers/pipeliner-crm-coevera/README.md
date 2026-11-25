# Coevera MCP by usefulapi

Use your [Coevera](https://www.coevera.com) account from Claude, Cursor, or any MCP client. Read accounts, contacts, leads, opportunities, tasks and pipelines, and create or update leads and tasks, and add notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://pipeliner-crm-coevera.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pipeliner-crm-coevera.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pipeliner-crm-coevera https://pipeliner-crm-coevera.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pipeliner-crm-coevera&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpipeliner-crm-coevera.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pipeliner-crm-coevera": {
      "url": "https://pipeliner-crm-coevera.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Coevera credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pipeliner-crm-coevera/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **region** and **Space ID** of your Coevera space, and the **API application user name** and **password** (Administration → API applications; Show Access shows the region and Space ID). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `coevera_list_accounts` | read | List accounts |
| `coevera_get_account` | read | Get an account |
| `coevera_list_contacts` | read | List contacts |
| `coevera_get_contact` | read | Get a contact |
| `coevera_list_leads` | read | List leads |
| `coevera_get_lead` | read | Get a lead |
| `coevera_list_opportunities` | read | List opportunities |
| `coevera_get_opportunity` | read | Get an opportunity |
| `coevera_list_tasks` | read | List tasks |
| `coevera_list_pipelines` | read | List pipelines |
| `coevera_list_steps` | read | List pipeline steps |
| `coevera_list_clients` | read | List users |
| `coevera_create_lead` | **write** | Create a lead |
| `coevera_update_lead` | **write** | Update a lead |
| `coevera_create_task` | **write** | Create a task |
| `coevera_update_task` | **write** | Update a task |
| `coevera_create_note` | **write** | Add a note |
| `coevera_usage_status` | meta | Usage status (free-tier meter) |
| `coevera_request_feature` | meta | Request a missing feature |
| `coevera_upgrade` | meta | Upgrade to Pro or Pro+ |
| `coevera_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `coevera_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `coevera_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `coevera_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
