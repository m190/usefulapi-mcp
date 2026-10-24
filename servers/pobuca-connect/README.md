# Pobuca Connect MCP by usefulapi

Read and update Pobuca Connect contacts and organizations; look up teams and custom fields.

**Live endpoint:** `https://pobuca-connect.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/pobuca-connect

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pobuca-connect.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pobuca-connect https://pobuca-connect.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pobuca-connect&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpobuca-connect.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pobuca-connect": {
      "url": "https://pobuca-connect.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Pobuca Connect credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pobuca-connect/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Pobuca Connect **API key** (Settings → Data Management → API Keys; Enterprise plan; no IP restriction).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pobuca_get_me` | read | Get current user |
| `pobuca_list_contacts` | read | List contacts |
| `pobuca_get_contact` | read | Get contact |
| `pobuca_create_contact` | **write** | Create contact |
| `pobuca_update_contact` | **write** | Update contact |
| `pobuca_list_organizations` | read | List organizations |
| `pobuca_get_organization` | read | Get organization |
| `pobuca_create_organization` | **write** | Create organization |
| `pobuca_update_organization` | **write** | Update organization |
| `pobuca_list_teams` | read | List teams |
| `pobuca_get_team` | read | Get team |
| `pobuca_list_team_members` | read | List team members |
| `pobuca_list_departments` | read | List departments |
| `pobuca_list_industries` | read | List industries |
| `pobuca_list_organization_types` | read | List organization types |
| `pobuca_list_countries` | read | List countries |
| `pobuca_list_custom_fields` | read | List custom fields |
| `pobuca_usage_status` | meta | Usage status (free-tier meter) |
| `pobuca_request_feature` | meta | Request a missing feature |
| `pobuca_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `pobuca_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `pobuca_upgrade` (it returns a Stripe Checkout link). Cancel any time with `pobuca_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `pobuca_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Pobuca Connect.
