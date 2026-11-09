# NubeFact MCP by usefulapi

Use your [NubeFact](https://www.nubefact.com) account from Claude, Cursor, or any MCP client. Issue electronic facturas, boletas and notes to SUNAT, void them, and read their status. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://nubefact.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nubefact.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nubefact https://nubefact.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nubefact&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnubefact.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nubefact": {
      "url": "https://nubefact.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your NubeFact credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nubefact/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Route (RUTA) URL** and the **Token**, both under **API (Integración)** in your NubeFact account. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nubefact_issue_document` | **write** | Issue a factura, boleta or note |
| `nubefact_get_document` | read | Get a document |
| `nubefact_void_document` | **write** | Void a document |
| `nubefact_get_void_status` | read | Get a voiding status |
| `nubefact_usage_status` | meta | Usage status (free-tier meter) |
| `nubefact_request_feature` | meta | Request a missing feature |
| `nubefact_upgrade` | meta | Upgrade to Pro or Pro+ |
| `nubefact_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `nubefact_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `nubefact_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `nubefact_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
