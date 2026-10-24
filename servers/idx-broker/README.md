# IDX Broker MCP by usefulapi

Use [IDX Broker](https://www.idxbroker.com) from Claude, Cursor, or any MCP client — look up leads and what they viewed, searched and saved, agents and offices, your account's own featured, sold, off-market and supplemental listings, saved links, widgets and MLS metadata, and create or update leads and add lead notes (each write needs an explicit confirmation).
Hosted, no local install: connect with an IDX Broker access key.

**Live endpoint:** `https://idx-broker.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/idx-broker

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://idx-broker.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http idx-broker https://idx-broker.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=idx-broker&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fidx-broker.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "idx-broker": {
      "url": "https://idx-broker.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your IDX Broker credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/idx-broker/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `idx_get_account_info` | read | Get account info |
| `idx_get_account_type` | read | Get account type |
| `idx_list_agents` | read | List agents |
| `idx_list_offices` | read | List offices |
| `idx_list_leads` | read | List leads |
| `idx_get_lead` | read | Get lead |
| `idx_list_lead_notes` | read | List lead notes |
| `idx_list_lead_searches` | read | List lead saved searches |
| `idx_list_lead_saved_properties` | read | List lead saved properties |
| `idx_get_lead_traffic` | read | Get lead traffic |
| `idx_list_featured_listings` | read | List featured listings |
| `idx_list_sold_pending_listings` | read | List sold and pending listings |
| `idx_list_off_market_listings` | read | List off-market listings |
| `idx_list_supplemental_listings` | read | List supplemental listings |
| `idx_list_saved_links` | read | List saved links |
| `idx_get_saved_link_count` | read | Count properties of a saved link |
| `idx_list_widgets` | read | List widgets |
| `idx_get_widget` | read | Get widget |
| `idx_list_system_links` | read | List system links |
| `idx_list_approved_mls` | read | List approved MLSs |
| `idx_get_mls_age` | read | Get MLS data age |
| `idx_list_mls_property_types` | read | List MLS property types |
| `idx_list_mls_search_fields` | read | List MLS search fields |
| `idx_list_mls_locations` | read | List MLS cities, counties or postal codes |
| `idx_create_lead` | **write** | Create lead |
| `idx_add_lead_note` | **write** | Add lead note |
| `idx_update_lead` | **write** | Update lead |
| `idx_usage_status` | meta | Usage status (free-tier meter) |
| `idx_request_feature` | meta | Request a missing feature |
| `idx_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `idx_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `idx_upgrade` (it returns a Stripe Checkout link). Cancel any time with `idx_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `idx_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by IDX Broker.
