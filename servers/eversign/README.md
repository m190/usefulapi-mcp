# Xodo Sign MCP by usefulapi

Use your [Xodo Sign](https://eversign.com) account from Claude, Cursor, or any MCP client. Read your businesses, documents and templates, get the final signed PDF link, and send signing reminders or cancel and trash documents. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://eversign.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://eversign.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http eversign https://eversign.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=eversign&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Feversign.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "eversign": {
      "url": "https://eversign.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Xodo Sign account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/eversign/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Xodo Sign and approve access. The server stores the OAuth token per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `eversign_list_businesses` | read | List businesses |
| `eversign_list_documents` | read | List documents |
| `eversign_get_document` | read | Get document or template |
| `eversign_list_templates` | read | List templates |
| `eversign_get_final_pdf_url` | read | Get final PDF link |
| `eversign_send_reminder` | **write** | Send signing reminder |
| `eversign_cancel_document` | **write** | Cancel document |
| `eversign_trash_document` | **write** | Move document to trash |
| `eversign_usage_status` | meta | Usage status (free-tier meter) |
| `eversign_request_feature` | meta | Request a missing feature |
| `eversign_upgrade` | meta | Upgrade to Pro or Pro+ |
| `eversign_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `eversign_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `eversign_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `eversign_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
