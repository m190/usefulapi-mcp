# Peecho MCP by usefulapi

Use your [Peecho](https://www.peecho.com) account from Claude, Cursor, or any MCP client. Read the print catalogue and order data, price print runs, and create and update print orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://peecho.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://peecho.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http peecho https://peecho.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=peecho&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpeecho.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "peecho": {
      "url": "https://peecho.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Peecho credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/peecho/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Peecho Merchant API key** (Peecho dashboard → Settings → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `peecho_list_categories` | read | List product categories |
| `peecho_list_offerings` | read | List offerings |
| `peecho_get_offering_countries` | read | Get shipping countries for offerings |
| `peecho_get_offering_spine` | read | Get spine width for an offering |
| `peecho_request_quote` | read | Request a price quote |
| `peecho_get_order` | read | Get an order |
| `peecho_get_order_spine` | read | Get spine widths for an order |
| `peecho_create_order` | **write** | Create a print order |
| `peecho_update_order_address` | **write** | Update an order's address |
| `peecho_set_order_files` | **write** | Set an order's print files |
| `peecho_usage_status` | meta | Usage status (free-tier meter) |
| `peecho_request_feature` | meta | Request a missing feature |
| `peecho_upgrade` | meta | Upgrade to Pro or Pro+ |
| `peecho_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `peecho_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `peecho_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `peecho_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
