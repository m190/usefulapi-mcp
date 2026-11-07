# Cobalt Intelligence MCP by usefulapi

Use your [Cobalt Intelligence](https://www.cobaltintelligence.com) account from Claude, Cursor, or any MCP client. Search US state business-entity records and read Secretary of State filings. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://cobalt-intelligence.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cobalt-intelligence.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cobalt-intelligence https://cobalt-intelligence.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cobalt-intelligence&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcobalt-intelligence.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cobalt-intelligence": {
      "url": "https://cobalt-intelligence.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Cobalt Intelligence credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cobalt-intelligence/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Cobalt Intelligence API key** (the **x-api-key** value from your Cobalt Intelligence account). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cobaltintelligence_list_states` | read | List searchable states |
| `cobaltintelligence_search_businesses` | read | Find businesses by name |
| `cobaltintelligence_get_business` | read | Get a business record by name |
| `cobaltintelligence_get_business_by_sos_id` | read | Get a business record by SOS id |
| `cobaltintelligence_get_search_result` | read | Check a slow search |
| `cobaltintelligence_usage_status` | meta | Usage status (free-tier meter) |
| `cobaltintelligence_request_feature` | meta | Request a missing feature |
| `cobaltintelligence_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cobaltintelligence_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `cobaltintelligence_upgrade` (it returns a Stripe Checkout link). Cancel any time with `cobaltintelligence_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `cobaltintelligence_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
