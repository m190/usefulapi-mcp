# Beacon CRM MCP by usefulapi

Use [Beacon CRM](https://www.beaconcrm.org) from Claude, Cursor, or any MCP client — record types and users, list, get and filter records of any type (people, organisations, payments, and your custom types), create, update, upsert and delete records, and trigger and list exports.
Hosted, no local install: connect with your own Beacon CRM credentials.

**Live endpoint:** `https://beacon-crm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/beacon-crm

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://beacon-crm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http beacon-crm https://beacon-crm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=beacon-crm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbeacon-crm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "beacon-crm": {
      "url": "https://beacon-crm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Beacon CRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/beacon-crm/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `beaconcrm_list_record_types` | read | List record types and fields |
| `beaconcrm_list_users` | read | List account users |
| `beaconcrm_list_records` | read | List records |
| `beaconcrm_get_record` | read | Get record |
| `beaconcrm_filter_records` | read | Filter records |
| `beaconcrm_create_record` | **write** | Create record |
| `beaconcrm_update_record` | **write** | Update record |
| `beaconcrm_upsert_record` | **write** | Create or update record by key field |
| `beaconcrm_delete_record` | **write** | Delete record |
| `beaconcrm_trigger_export` | **write** | Start an export |
| `beaconcrm_list_exports` | read | List exports |
| `beaconcrm_usage_status` | meta | Usage status (free-tier meter) |
| `beaconcrm_request_feature` | meta | Request a missing feature |
| `beaconcrm_upgrade` | meta | Upgrade to Pro or Pro+ |
| `beaconcrm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per account) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `beaconcrm_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `beaconcrm_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `beaconcrm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Beacon CRM.
