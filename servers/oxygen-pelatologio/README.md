# Oxygen Pelatologio MCP by usefulapi

Use your [Oxygen Pelatologio](https://www.oxygen.gr) account from Claude, Cursor, or any MCP client. Read contacts, invoices, products, credit notes and VAT rates, and create contacts, products and invoices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://oxygen-pelatologio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://oxygen-pelatologio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http oxygen-pelatologio https://oxygen-pelatologio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=oxygen-pelatologio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Foxygen-pelatologio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "oxygen-pelatologio": {
      "url": "https://oxygen-pelatologio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Oxygen Pelatologio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/oxygen-pelatologio/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Oxygen Pelatologio API key**, found in the Oxygen app under Settings → API. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `oxygen_list_contacts` | read | List contacts |
| `oxygen_get_contact` | read | Get a contact |
| `oxygen_list_invoices` | read | List invoices |
| `oxygen_get_invoice` | read | Get an invoice |
| `oxygen_list_products` | read | List products |
| `oxygen_get_product` | read | Get a product |
| `oxygen_list_credit_notes` | read | List credit notes |
| `oxygen_list_notices` | read | List quotes and notices |
| `oxygen_list_taxes` | read | List VAT rates |
| `oxygen_list_payment_methods` | read | List payment methods |
| `oxygen_list_numbering_sequences` | read | List numbering sequences |
| `oxygen_create_contact` | **write** | Create a contact |
| `oxygen_create_product` | **write** | Create a product |
| `oxygen_create_invoice` | **write** | Create an invoice |
| `oxygen_usage_status` | meta | Usage status (free-tier meter) |
| `oxygen_request_feature` | meta | Request a missing feature |
| `oxygen_upgrade` | meta | Upgrade to Pro or Pro+ |
| `oxygen_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `oxygen_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `oxygen_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `oxygen_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
