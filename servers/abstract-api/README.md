# Abstract API MCP by usefulapi

Use [Abstract API](https://www.abstractapi.com) from Claude, Cursor, or any MCP client — email validation, phone lookup, IP geolocation, company enrichment, IBAN and VAT validation, VAT rates and calculation, exchange rates (live, conversion, historical), public holidays and time zones. Connect with the keys of the Abstract APIs you use (at least one); every call spends credits from your own plan.
Hosted, no local install: connect with your own Abstract API credentials.

**Live endpoint:** `https://abstract-api.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/abstract-api

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://abstract-api.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http abstract-api https://abstract-api.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=abstract-api&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fabstract-api.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "abstract-api": {
      "url": "https://abstract-api.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Abstract API credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/abstract-api/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `abstractapi_validate_email` | read | Validate email |
| `abstractapi_lookup_phone` | read | Look up phone number |
| `abstractapi_lookup_ip` | read | Look up IP address |
| `abstractapi_enrich_company` | read | Enrich company |
| `abstractapi_validate_iban` | read | Validate IBAN |
| `abstractapi_validate_vat` | read | Validate VAT number |
| `abstractapi_calculate_vat` | read | Calculate VAT |
| `abstractapi_list_vat_rates` | read | List VAT rates |
| `abstractapi_get_exchange_rates` | read | Get exchange rates |
| `abstractapi_convert_currency` | read | Convert currency |
| `abstractapi_get_historical_rates` | read | Get historical exchange rates |
| `abstractapi_get_holidays` | read | Get public holidays |
| `abstractapi_get_current_time` | read | Get current time |
| `abstractapi_convert_time` | read | Convert time between locations |
| `abstractapi_usage_status` | meta | Usage status (free-tier meter) |
| `abstractapi_request_feature` | meta | Request a missing feature |
| `abstractapi_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `abstractapi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `abstractapi_upgrade` (it returns a Stripe Checkout link). Cancel any time with `abstractapi_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `abstractapi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Abstract API.
