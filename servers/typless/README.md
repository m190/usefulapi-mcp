# Typless MCP by usefulapi

Use your [Typless](https://typless.com) account from Claude, Cursor, or any MCP client. It extracts fields and line items from business documents and reads back the results. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://typless.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://typless.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http typless https://typless.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=typless&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftypless.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "typless": {
      "url": "https://typless.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Typless credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/typless/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Typless API key** (the Token value under Settings → API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `typless_list_awaiting_poll` | read | List finished extractions |
| `typless_get_extraction` | read | Get an extraction result |
| `typless_extract_data` | **write** | Extract data from a document |
| `typless_extract_data_async` | **write** | Start an extraction |
| `typless_usage_status` | meta | Usage status (free-tier meter) |
| `typless_request_feature` | meta | Request a missing feature |
| `typless_upgrade` | meta | Upgrade to Pro or Pro+ |
| `typless_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `typless_upgrade` (it returns a Stripe Checkout link). Cancel any time with `typless_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `typless_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
