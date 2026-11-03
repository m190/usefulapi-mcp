# Caisy MCP by usefulapi

Use your [Caisy](https://caisy.io) account from Claude, Cursor, or any MCP client. Reads blueprints, documents and media assets of one Caisy project through read-only GraphQL queries. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://caisy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://caisy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http caisy https://caisy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=caisy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcaisy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "caisy": {
      "url": "https://caisy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Caisy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/caisy/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Caisy project ID** (the UUID in your GraphQL endpoint URL) and your **Caisy API key** (Settings → Development → API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `caisy_run_query` | read | Run a read-only GraphQL query |
| `caisy_list_queries` | read | List the project's read queries |
| `caisy_list_documents` | read | List documents of a blueprint |
| `caisy_list_assets` | read | List media assets |
| `caisy_usage_status` | meta | Usage status (free-tier meter) |
| `caisy_request_feature` | meta | Request a missing feature |
| `caisy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `caisy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `caisy_upgrade` (it returns a Stripe Checkout link). Cancel any time with `caisy_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `caisy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
