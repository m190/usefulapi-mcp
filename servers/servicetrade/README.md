# ServiceTrade MCP by usefulapi

Use your [ServiceTrade](https://servicetrade.com) account from Claude, Cursor, or any MCP client. It can read jobs, appointments, locations, companies, assets, deficiencies, quotes, invoices and contracts, and add a comment to a record. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://servicetrade.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://servicetrade.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http servicetrade https://servicetrade.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=servicetrade&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fservicetrade.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "servicetrade": {
      "url": "https://servicetrade.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ServiceTrade credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/servicetrade/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **ServiceTrade client id** and **client secret** (API credentials of type customer, which an administrator creates in ServiceTrade). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `servicetrade_list_jobs` | read | List jobs |
| `servicetrade_list_locations` | read | List locations |
| `servicetrade_list_companies` | read | List companies |
| `servicetrade_list_appointments` | read | List appointments |
| `servicetrade_list_service_requests` | read | List service requests |
| `servicetrade_list_deficiencies` | read | List deficiencies |
| `servicetrade_list_assets` | read | List assets |
| `servicetrade_list_quotes` | read | List quotes |
| `servicetrade_list_invoices` | read | List invoices |
| `servicetrade_list_contracts` | read | List contracts |
| `servicetrade_list_users` | read | List users |
| `servicetrade_list_comments` | read | List comments |
| `servicetrade_get_job` | read | Get a job |
| `servicetrade_get_location` | read | Get a location |
| `servicetrade_get_company` | read | Get a company |
| `servicetrade_get_appointment` | read | Get an appointment |
| `servicetrade_get_deficiency` | read | Get a deficiency |
| `servicetrade_get_asset` | read | Get an asset |
| `servicetrade_get_quote` | read | Get a quote |
| `servicetrade_get_invoice` | read | Get an invoice |
| `servicetrade_whoami` | read | Show the connected credential |
| `servicetrade_add_comment` | **write** | Add a comment to a record |
| `servicetrade_usage_status` | meta | Usage status (free-tier meter) |
| `servicetrade_request_feature` | meta | Request a missing feature |
| `servicetrade_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `servicetrade_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `servicetrade_upgrade` (it returns a Stripe Checkout link). Cancel any time with `servicetrade_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `servicetrade_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
