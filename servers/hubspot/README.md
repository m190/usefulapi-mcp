# HubSpot MCP by usefulapi

Use your [HubSpot](https://www.hubspot.com) account from Claude, Cursor, or any MCP client. It searches, reads, creates and updates contacts, companies, deals and tickets, and it reads record associations. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://hubspot.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hubspot.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hubspot https://hubspot.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hubspot&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhubspot.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hubspot": {
      "url": "https://hubspot.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your HubSpot credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hubspot/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **HubSpot service key** (Development → Keys → Service keys in HubSpot, with only the object scopes you need). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hubspot_list_objects` | read | List CRM records |
| `hubspot_get_object` | read | Get a CRM record |
| `hubspot_search_objects` | read | Search CRM records |
| `hubspot_create_object` | **write** | Create a CRM record |
| `hubspot_update_object` | **write** | Update a CRM record |
| `hubspot_list_owners` | read | List owners |
| `hubspot_list_pipelines` | read | List pipelines |
| `hubspot_list_properties` | read | List properties |
| `hubspot_read_associations` | read | Read associations |
| `hubspot_usage_status` | meta | Usage status (free-tier meter) |
| `hubspot_request_feature` | meta | Request a missing feature |
| `hubspot_upgrade` | meta | Upgrade to Pro or Pro+ |
| `hubspot_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `hubspot_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `hubspot_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `hubspot_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
