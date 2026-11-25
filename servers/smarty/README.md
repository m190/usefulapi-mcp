# Smarty MCP by usefulapi

Use your [Smarty](https://www.smarty.com) account from Claude, Cursor, or any MCP client. It verifies US and international addresses, looks up ZIP Codes, and reads property and census data. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://smarty.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://smarty.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http smarty https://smarty.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=smarty&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsmarty.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "smarty": {
      "url": "https://smarty.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Smarty credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/smarty/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Smarty Auth ID** and **Smarty Auth Token** (both in your Smarty dashboard). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smarty_verify_us_address` | read | Verify a US address |
| `smarty_lookup_us_zipcode` | read | Look up US ZIP Codes |
| `smarty_reverse_geocode_us` | read | Find US addresses near coordinates |
| `smarty_verify_international_address` | read | Verify an international address |
| `smarty_us_address_property` | read | US property and financial data |
| `smarty_us_address_geo_reference` | read | US census geography for an address |
| `smarty_us_address_secondary_units` | read | List units at a US address |
| `smarty_usage_status` | meta | Usage status (free-tier meter) |
| `smarty_request_feature` | meta | Request a missing feature |
| `smarty_upgrade` | meta | Upgrade to Pro or Pro+ |
| `smarty_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `smarty_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `smarty_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `smarty_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
