# Pool Service Software MCP by usefulapi

Use your [Pool Service Software](https://poolservice.software) account from Claude, Cursor, or any MCP client. Read clients, properties, routes, jobs, visits and invoices, and create or change clients, properties, jobs and catalog items. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://pool-service-software.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pool-service-software.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pool-service-software https://pool-service-software.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pool-service-software&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpool-service-software.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pool-service-software": {
      "url": "https://pool-service-software.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Pool Service Software credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pool-service-software/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Pool Service Software API key** (PSS → Settings → API Keys; your company needs the API Access add-on). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pss_list_clients` | read | List clients |
| `pss_get_client` | read | Get a client |
| `pss_create_client` | **write** | Create a client |
| `pss_update_client` | **write** | Update a client |
| `pss_list_members` | read | List team members |
| `pss_get_member` | read | Get a team member |
| `pss_list_properties` | read | List properties |
| `pss_get_property` | read | Get a property |
| `pss_create_property` | **write** | Create a property |
| `pss_update_property` | **write** | Update a property |
| `pss_list_routes` | read | List routes |
| `pss_get_route` | read | Get a route |
| `pss_list_job_types` | read | List job types |
| `pss_get_job_type` | read | Get a job type |
| `pss_list_item_types` | read | List item types |
| `pss_get_item_type` | read | Get an item type |
| `pss_list_jobs` | read | List jobs |
| `pss_get_job` | read | Get a job |
| `pss_list_job_line_items` | read | List job line items |
| `pss_create_job` | **write** | Create a job |
| `pss_update_job` | **write** | Update a job |
| `pss_schedule_job` | **write** | Schedule a job |
| `pss_unschedule_job` | **write** | Unschedule a job |
| `pss_reopen_job` | **write** | Reopen a completed job |
| `pss_list_invoices` | read | List invoices |
| `pss_get_invoice` | read | Get an invoice |
| `pss_list_visits` | read | List visits |
| `pss_get_visit` | read | Get a visit |
| `pss_list_catalog_items` | read | List catalog items |
| `pss_get_catalog_item` | read | Get a catalog item |
| `pss_create_catalog_item` | **write** | Create a catalog item |
| `pss_update_catalog_item` | **write** | Update a catalog item |
| `pss_usage_status` | meta | Usage status (free-tier meter) |
| `pss_request_feature` | meta | Request a missing feature |
| `pss_upgrade` | meta | Upgrade to Pro or Pro+ |
| `pss_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `pss_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `pss_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `pss_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
