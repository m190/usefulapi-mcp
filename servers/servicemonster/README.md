# ServiceMonster MCP by usefulapi

Hosted endpoint: https://servicemonster.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://servicemonster.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http servicemonster https://servicemonster.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=servicemonster&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fservicemonster.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "servicemonster": {
      "url": "https://servicemonster.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ServiceMonster credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/servicemonster/

<!-- connect:end (generated above, edit below) -->

Use a dedicated ServiceMonster API User, rather than a personal login. API access requires an eligible ServiceMonster plan. Real-account reads and note creation have not been tested; live invalid credentials receive the vendor's authentication rejection.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `servicemonster_list_accounts` | read | List customer accounts |
| `servicemonster_list_jobs` | read | List jobs |
| `servicemonster_list_orders` | read | List orders |
| `servicemonster_list_sites` | read | List service sites |
| `servicemonster_list_notes` | read | List notes |
| `servicemonster_list_tasks` | read | List tasks |
| `servicemonster_list_routes` | read | List routes |
| `servicemonster_list_employees` | read | List employees |
| `servicemonster_list_serviceitems` | read | List service items |
| `servicemonster_get_account` | read | Get one customer account |
| `servicemonster_get_job` | read | Get one job |
| `servicemonster_get_order` | read | Get one order |
| `servicemonster_get_site` | read | Get one service site |
| `servicemonster_get_note` | read | Get one note |
| `servicemonster_get_route` | read | Get one route |
| `servicemonster_list_account_orders` | read | List an account's orders |
| `servicemonster_list_account_sites` | read | List an account's sites |
| `servicemonster_list_account_notes` | read | List an account's notes |
| `servicemonster_list_account_tasks` | read | List an account's tasks |
| `servicemonster_list_order_jobs` | read | List an order's jobs |
| `servicemonster_list_order_lineitems` | read | List an order's line items |
| `servicemonster_list_order_notes` | read | List an order's notes |
| `servicemonster_list_order_tasks` | read | List an order's tasks |
| `servicemonster_list_job_timelogs` | read | List a job's time logs |
| `servicemonster_list_site_noteactivities` | read | List a site's note activities |
| `servicemonster_get_account_profile` | read | Get customer account profile |
| `servicemonster_list_scheduling` | read | Read the service schedule |
| `servicemonster_list_scheduleitems` | read | Read detailed schedule items |
| `servicemonster_create_note` | **write** | Add a customer, order or site note |
| `servicemonster_usage_status` | meta | Usage status (free-tier meter) |
| `servicemonster_request_feature` | meta | Request a missing feature |
| `servicemonster_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `servicemonster_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API User) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `servicemonster_upgrade` (it returns a Stripe Checkout link). Cancel any time with `servicemonster_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `servicemonster_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
