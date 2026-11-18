# Billdu MCP by usefulapi

Use your [Billdu](https://billdu.com/) account from Claude, Cursor, or any MCP client. Read clients, products and documents such as invoices, create clients, and e-mail documents to recipients. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://billdu.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://billdu.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http billdu https://billdu.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=billdu&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbilldu.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "billdu": {
      "url": "https://billdu.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Billdu credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/billdu/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Billdu API key** and a **Billdu API secret** (Settings → API in Billdu; only the account owner can create them). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `billdu_list_clients` | read | List clients |
| `billdu_get_client` | read | Get a client |
| `billdu_list_products` | read | List products |
| `billdu_get_product` | read | Get a product |
| `billdu_list_documents` | read | List documents |
| `billdu_get_document` | read | Get a document |
| `billdu_create_client` | **write** | Create a client |
| `billdu_send_document` | **write** | Send a document by e-mail |
| `billdu_usage_status` | meta | Usage status (free-tier meter) |
| `billdu_request_feature` | meta | Request a missing feature |
| `billdu_upgrade` | meta | Upgrade to Pro or Pro+ |
| `billdu_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `billdu_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `billdu_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `billdu_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
