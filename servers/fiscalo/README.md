# Fiscalo MCP by usefulapi

Use your [Fiscalo](https://www.fiscalo.pt) account from Claude, Cursor, or any MCP client. Read and create customers, items and draft invoices, and read documents; issuing stays in Fiscalo. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://fiscalo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fiscalo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fiscalo https://fiscalo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fiscalo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffiscalo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fiscalo": {
      "url": "https://fiscalo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Fiscalo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fiscalo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Fiscalo API key** (`fisc_test_…` or `fisc_live_…`), created or copied in the Fiscalo **Developer Center** under API keys. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fiscalo_connection_test` | read | Test the connection |
| `fiscalo_list_customers` | read | List customers |
| `fiscalo_get_customer` | read | Get a customer |
| `fiscalo_create_customer` | **write** | Create a customer |
| `fiscalo_list_items` | read | List items |
| `fiscalo_get_item` | read | Get an item |
| `fiscalo_create_item` | **write** | Create an item |
| `fiscalo_list_tax_rates` | read | List tax rates |
| `fiscalo_list_document_series` | read | List document series |
| `fiscalo_list_documents` | read | List documents |
| `fiscalo_get_document` | read | Get a document |
| `fiscalo_create_document_draft` | **write** | Create a document draft |
| `fiscalo_add_document_line` | **write** | Add a line to a draft |
| `fiscalo_usage_status` | meta | Usage status (free-tier meter) |
| `fiscalo_request_feature` | meta | Request a missing feature |
| `fiscalo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fiscalo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `fiscalo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `fiscalo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `fiscalo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
