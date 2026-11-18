# Spotler CRM MCP by usefulapi

Use your [Spotler CRM](https://www.spotlercrm.com/) account from Claude, Cursor, or any MCP client. Read records, data dictionaries and dropdown values, and create or update records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://spotler-crm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://spotler-crm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http spotler-crm https://spotler-crm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spotler-crm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fspotler-crm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "spotler-crm": {
      "url": "https://spotler-crm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Spotler CRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/spotler-crm/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Spotler CRM API V4 access token**. Create it in Spotler CRM under **Settings → Integrations → API V4**, with API access enabled for your user. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `spotler_list_records` | read | List records |
| `spotler_get_record` | read | Get a record |
| `spotler_get_data_dictionary` | read | Get the data dictionary |
| `spotler_get_lookup_values` | read | Get dropdown values |
| `spotler_create_record` | **write** | Create a record |
| `spotler_update_record` | **write** | Update a record |
| `spotler_usage_status` | meta | Usage status (free-tier meter) |
| `spotler_request_feature` | meta | Request a missing feature |
| `spotler_upgrade` | meta | Upgrade to Pro or Pro+ |
| `spotler_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `spotler_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `spotler_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `spotler_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
