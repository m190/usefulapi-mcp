# Climatools MCP by usefulapi

Use your Climatools account from Claude, Cursor, or any MCP client. It reads companies, private contacts, installations and refrigerants, and it creates companies and private contacts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://climatools.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://climatools.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http climatools https://climatools.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=climatools&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fclimatools.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "climatools": {
      "url": "https://climatools.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Climatools credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/climatools/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Climatools API key** (in Climatools under Instellingen, API, API Sleutel genereren; the key is shown once). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `climatools_list_companies` | read | List companies |
| `climatools_get_company` | read | Get a company |
| `climatools_list_relations` | read | List relations |
| `climatools_get_relation` | read | Get a relation |
| `climatools_list_installations` | read | List installations |
| `climatools_list_refrigerants` | read | List refrigerants |
| `climatools_create_company` | **write** | Create a company |
| `climatools_create_relation` | **write** | Create a relation |
| `climatools_usage_status` | meta | Usage status (free-tier meter) |
| `climatools_request_feature` | meta | Request a missing feature |
| `climatools_upgrade` | meta | Upgrade to Pro or Pro+ |
| `climatools_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `climatools_upgrade` (it returns a Stripe Checkout link). Cancel any time with `climatools_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `climatools_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
