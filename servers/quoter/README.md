# Quoter MCP by usefulapi

Use your [Quoter](https://www.quoter.com) account from Claude, Cursor, or any MCP client. Read quotes, contacts and catalog items, and create quotes, add line items and update contacts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://quoter.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://quoter.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http quoter https://quoter.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=quoter&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fquoter.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "quoter": {
      "url": "https://quoter.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Quoter credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/quoter/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Quoter client ID** and **client secret**, which the Account Owner creates under Account → API Keys. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `quoter_list_quotes` | read | List quotes |
| `quoter_create_quote` | **write** | Create a quote |
| `quoter_add_line_item` | **write** | Add a line item to a quote |
| `quoter_list_contacts` | read | List contacts |
| `quoter_get_contact` | read | Get a contact |
| `quoter_create_contact` | **write** | Create a contact |
| `quoter_update_contact` | **write** | Update a contact |
| `quoter_list_items` | read | List catalog items |
| `quoter_get_item` | read | Get a catalog item |
| `quoter_list_categories` | read | List categories |
| `quoter_list_suppliers` | read | List suppliers |
| `quoter_list_manufacturers` | read | List manufacturers |
| `quoter_list_item_groups` | read | List item groups |
| `quoter_list_quote_templates` | read | List quote templates |
| `quoter_usage_status` | meta | Usage status (free-tier meter) |
| `quoter_request_feature` | meta | Request a missing feature |
| `quoter_upgrade` | meta | Upgrade to Pro or Pro+ |
| `quoter_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `quoter_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `quoter_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `quoter_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
