# MaidCentral MCP by usefulapi

Use your [MaidCentral](https://www.maidcentral.com) account from Claude, Cursor, or any MCP client. Read the service types, pricing questions, rates and open job dates of your cleaning company. Also create leads, quotes, bookings and notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://maidcentral.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://maidcentral.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http maidcentral https://maidcentral.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=maidcentral&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmaidcentral.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "maidcentral": {
      "url": "https://maidcentral.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MaidCentral credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/maidcentral/

<!-- connect:end (generated above, edit below) -->

On first connect you enter the **username and password of a MaidCentral API user** (Company → Settings → General → Integrations, as an Administrator). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `maidcentral_list_scope_groups` | read | List scope groups |
| `maidcentral_list_scopes` | read | List scopes of a scope group |
| `maidcentral_list_scope_frequencies` | read | List frequencies of a scope |
| `maidcentral_list_questions` | read | List pricing questions for scopes |
| `maidcentral_list_rate_modifications` | read | List rate modifications |
| `maidcentral_list_available_dates` | read | List available job dates |
| `maidcentral_list_postal_codes` | read | List serviceable postal codes |
| `maidcentral_list_customer_sources` | read | List customer sources |
| `maidcentral_list_billing_terms` | read | List billing terms |
| `maidcentral_list_teams` | read | List teams |
| `maidcentral_list_tags` | read | List tags |
| `maidcentral_list_note_types` | read | List note types |
| `maidcentral_get_lead` | read | Get a lead |
| `maidcentral_get_quote` | read | Get a quote |
| `maidcentral_calculate_price` | read | Calculate price |
| `maidcentral_create_or_update_lead` | **write** | Create or update a lead |
| `maidcentral_create_or_update_quote` | **write** | Create or update a quote |
| `maidcentral_book_quote` | **write** | Book a quote |
| `maidcentral_create_note` | **write** | Create a note |
| `maidcentral_add_utm_data` | **write** | Add UTM data to a lead |
| `maidcentral_usage_status` | meta | Usage status (free-tier meter) |
| `maidcentral_request_feature` | meta | Request a missing feature |
| `maidcentral_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `maidcentral_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `maidcentral_upgrade` (it returns a Stripe Checkout link). Cancel any time with `maidcentral_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `maidcentral_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
