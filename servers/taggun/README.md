# Taggun MCP by usefulapi

Use [Taggun](https://www.taggun.io) from Claude, Cursor, or any MCP client — receipt OCR from a URL or base64 file and receipt-validation campaigns.
Hosted, no local install: connect with your own Taggun credentials.

**Live endpoint:** `https://taggun.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/taggun

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://taggun.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http taggun https://taggun.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=taggun&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftaggun.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "taggun": {
      "url": "https://taggun.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Taggun credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/taggun/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `taggun_scan_receipt_url` | **write** | Scan a receipt or invoice from a URL |
| `taggun_scan_receipt_base64` | **write** | Scan a receipt or invoice from base64 data |
| `taggun_validate_receipt_campaign_url` | **write** | Validate a receipt against a stored campaign |
| `taggun_list_campaigns` | read | List validation campaigns |
| `taggun_get_campaign` | read | Get a validation campaign's rules |
| `taggun_export_reference_data` | read | Export account reference data (CSV) |
| `taggun_usage_status` | meta | Usage status (free-tier meter) |
| `taggun_request_feature` | meta | Request a missing feature |
| `taggun_upgrade` | meta | Upgrade to Pro or Pro+ |
| `taggun_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `taggun_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `taggun_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `taggun_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Taggun.
