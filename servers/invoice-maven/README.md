# Invoice Maven MCP by usefulapi

Use your [Invoice Maven](https://www.invoice-maven.co.il) account from Claude, Cursor, or any MCP client. Search existing fiscal documents; the search never creates, issues or cancels them. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://invoice-maven.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://invoice-maven.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http invoice-maven https://invoice-maven.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=invoice-maven&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finvoice-maven.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "invoice-maven": {
      "url": "https://invoice-maven.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Invoice Maven credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/invoice-maven/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **API key** from your own Invoice Maven account. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `invoicemaven_search_documents` | read | Search documents |
| `invoicemaven_usage_status` | meta | Usage status (free-tier meter) |
| `invoicemaven_request_feature` | meta | Request a missing feature |
| `invoicemaven_upgrade` | meta | Upgrade to Pro or Pro+ |
| `invoicemaven_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `invoicemaven_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `invoicemaven_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `invoicemaven_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
