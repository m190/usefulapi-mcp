# ManyRequests MCP by usefulapi

Use your [ManyRequests](https://www.manyrequests.com) account from Claude, Cursor, or any MCP client. Read clients, organizations, requests, services, invoices and team members, and create requests or comments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://manyrequests.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://manyrequests.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http manyrequests https://manyrequests.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=manyrequests&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmanyrequests.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "manyrequests": {
      "url": "https://manyrequests.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ManyRequests credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/manyrequests/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **portal name** (the yourportal part of yourportal.manyrequests.com) and an **API token** (Settings → Integrations → API; the API needs the Pro plan). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `manyrequests_list_clients` | read | List clients |
| `manyrequests_get_client` | read | Get a client |
| `manyrequests_list_organizations` | read | List organizations |
| `manyrequests_get_organization` | read | Get an organization |
| `manyrequests_list_organization_subscriptions` | read | List organization subscriptions |
| `manyrequests_list_requests` | read | List requests |
| `manyrequests_get_request` | read | Get a request |
| `manyrequests_list_request_comments` | read | List request comments |
| `manyrequests_list_request_time_entries` | read | List request time entries |
| `manyrequests_list_request_activity` | read | List request activity |
| `manyrequests_list_services` | read | List services |
| `manyrequests_get_service` | read | Get a service |
| `manyrequests_list_service_form_fields` | read | List service form fields |
| `manyrequests_list_request_statuses` | read | List request statuses |
| `manyrequests_list_team_members` | read | List team members |
| `manyrequests_list_invoices` | read | List invoices |
| `manyrequests_get_invoice` | read | Get an invoice |
| `manyrequests_create_request` | **write** | Create a request |
| `manyrequests_create_request_comment` | **write** | Add a comment to a request |
| `manyrequests_usage_status` | meta | Usage status (free-tier meter) |
| `manyrequests_request_feature` | meta | Request a missing feature |
| `manyrequests_upgrade` | meta | Upgrade to Pro or Pro+ |
| `manyrequests_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `manyrequests_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `manyrequests_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `manyrequests_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
