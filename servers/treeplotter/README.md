# TreePlotter MCP by usefulapi

Use your [TreePlotter](https://planitgeo.com) account from Claude, Cursor, or any MCP client. Read tree and asset layers, work orders and service requests, and create or change assets and work orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://treeplotter.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://treeplotter.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http treeplotter https://treeplotter.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=treeplotter&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftreeplotter.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "treeplotter": {
      "url": "https://treeplotter.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TreePlotter credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/treeplotter/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **region** (US, Canada, UK or Australia), the **INVENTORY folder** (the lowercase name in your app address, for example tpdemo for pg-cloud.com/tpdemo), the **TreePlotter login** and **password**, and the **TreePlotter API key**. PlanIT Geo support issues the login and the API key. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `treeplotter_list_inventories` | read | List inventory layers |
| `treeplotter_get_inventory_metadata` | read | Get inventory field metadata |
| `treeplotter_list_features` | read | List features in a layer |
| `treeplotter_list_translated_features` | read | List features with readable values |
| `treeplotter_get_feature` | read | Get a feature |
| `treeplotter_list_work_activities` | read | List work activities |
| `treeplotter_list_work_fields` | read | List work record fields |
| `treeplotter_list_work_records` | read | List work records |
| `treeplotter_list_service_requests` | read | List service requests |
| `treeplotter_get_service_request` | read | Get a service request |
| `treeplotter_list_jobs` | read | List work orders (jobs) |
| `treeplotter_get_job` | read | Get a work order (job) |
| `treeplotter_get_jobs_metadata` | read | Get work order metadata |
| `treeplotter_create_feature` | **write** | Create a feature |
| `treeplotter_update_feature` | **write** | Update a feature |
| `treeplotter_create_job` | **write** | Create a work order (job) |
| `treeplotter_update_job` | **write** | Update a work order (job) |
| `treeplotter_usage_status` | meta | Usage status (free-tier meter) |
| `treeplotter_request_feature` | meta | Request a missing feature |
| `treeplotter_upgrade` | meta | Upgrade to Pro or Pro+ |
| `treeplotter_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `treeplotter_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `treeplotter_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `treeplotter_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
