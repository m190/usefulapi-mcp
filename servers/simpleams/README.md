# SimpleAMS MCP by usefulapi

Use your [simpleAMS](https://simpleams.net/) insurance agency account from Claude, Cursor, or any MCP client. Read clients, policies, leads, agents, carriers, documents and commissions, create and update records, and import carrier commission statements. Hosted, no local install: connect with your own API key.

**Live endpoint:** `https://simpleams.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://simpleams.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http simpleams https://simpleams.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=simpleams&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsimpleams.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "simpleams": {
      "url": "https://simpleams.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SimpleAMS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/simpleams/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **SimpleAMS REST API key** (Settings → API & Webhooks → Manage API Keys in SimpleAMS; the REST API needs the Manager plan or higher). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `simpleams_get_me` | read | Check the API key |
| `simpleams_list_clients` | read | List clients |
| `simpleams_get_client` | read | Get a client |
| `simpleams_create_client` | **write** | Create a client |
| `simpleams_update_client` | **write** | Update a client |
| `simpleams_list_policies` | read | List policies |
| `simpleams_get_policy` | read | Get a policy |
| `simpleams_create_policy` | **write** | Create a policy |
| `simpleams_update_policy` | **write** | Update a policy |
| `simpleams_list_leads` | read | List leads |
| `simpleams_get_lead` | read | Get a lead |
| `simpleams_create_lead` | **write** | Create a lead |
| `simpleams_update_lead` | **write** | Update a lead |
| `simpleams_list_agents` | read | List agents |
| `simpleams_get_agent` | read | Get an agent |
| `simpleams_create_agent` | **write** | Create an agent |
| `simpleams_update_agent` | **write** | Update an agent |
| `simpleams_list_carriers` | read | List carriers |
| `simpleams_get_carrier` | read | Get a carrier |
| `simpleams_create_carrier` | **write** | Create a carrier |
| `simpleams_update_carrier` | **write** | Update a carrier |
| `simpleams_list_documents` | read | List documents |
| `simpleams_get_document` | read | Get a document |
| `simpleams_download_document` | read | Download a document |
| `simpleams_upload_document` | **write** | Upload a document |
| `simpleams_list_commissions` | read | List commission transactions |
| `simpleams_get_commission` | read | Get a commission transaction |
| `simpleams_import_commission_statement` | **write** | Import a commission statement |
| `simpleams_usage_status` | meta | Usage status (free-tier meter) |
| `simpleams_request_feature` | meta | Request a missing feature |
| `simpleams_upgrade` | meta | Upgrade to Pro or Pro+ |
| `simpleams_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `simpleams_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `simpleams_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `simpleams_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
