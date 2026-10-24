# SuiteDash MCP by usefulapi

Read and update SuiteDash contacts, companies and projects; create leads and clients.

**Live endpoint:** `https://suitedash.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/suitedash

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://suitedash.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http suitedash https://suitedash.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=suitedash&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsuitedash.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "suitedash": {
      "url": "https://suitedash.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SuiteDash credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/suitedash/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your SuiteDash **Secure API** Public ID and Secret Key (Integrations → Secure API).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `suitedash_list_contacts` | read | List contacts |
| `suitedash_get_contact` | read | Get contact |
| `suitedash_get_contact_fields` | read | Get contact field schema |
| `suitedash_create_contact` | **write** | Create contact |
| `suitedash_update_contact` | **write** | Update contact |
| `suitedash_list_companies` | read | List companies |
| `suitedash_get_company` | read | Get company |
| `suitedash_get_company_fields` | read | Get company field schema |
| `suitedash_create_company` | **write** | Create company |
| `suitedash_update_company` | **write** | Update company |
| `suitedash_list_projects` | read | List projects |
| `suitedash_get_project` | read | Get project |
| `suitedash_get_project_fields` | read | Get project field schema |
| `suitedash_update_project` | **write** | Update project |
| `suitedash_subscribe_to_marketing` | **write** | Subscribe contacts to marketing audiences |
| `suitedash_list_worlds` | read | List worlds |
| `suitedash_usage_status` | meta | Usage status (free-tier meter) |
| `suitedash_request_feature` | meta | Request a missing feature |
| `suitedash_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `suitedash_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `suitedash_upgrade` (it returns a Stripe Checkout link). Cancel any time with `suitedash_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `suitedash_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by SuiteDash.
