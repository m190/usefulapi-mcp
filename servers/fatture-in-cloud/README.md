# Fatture in Cloud MCP by usefulapi

Use your [Fatture in Cloud](https://www.fattureincloud.it) account from Claude, Cursor, or any MCP client. Read invoices, clients, suppliers and cashbook entries, and create clients, products and invoices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://fatture-in-cloud.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fatture-in-cloud.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fatture-in-cloud https://fatture-in-cloud.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fatture-in-cloud&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffatture-in-cloud.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fatture-in-cloud": {
      "url": "https://fatture-in-cloud.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Fatture in Cloud account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fatture-in-cloud/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Fatture in Cloud and approve access. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fattureincloud_get_user` | read | Get the signed-in user |
| `fattureincloud_list_companies` | read | List companies |
| `fattureincloud_get_company_info` | read | Get company info |
| `fattureincloud_list_clients` | read | List clients |
| `fattureincloud_get_client` | read | Get a client |
| `fattureincloud_list_suppliers` | read | List suppliers |
| `fattureincloud_get_supplier` | read | Get a supplier |
| `fattureincloud_list_products` | read | List products |
| `fattureincloud_get_product` | read | Get a product |
| `fattureincloud_list_issued_documents` | read | List issued documents |
| `fattureincloud_get_issued_document` | read | Get an issued document |
| `fattureincloud_list_received_documents` | read | List received documents |
| `fattureincloud_get_received_document` | read | Get a received document |
| `fattureincloud_list_cashbook_entries` | read | List cashbook entries |
| `fattureincloud_list_settings` | read | List company settings |
| `fattureincloud_get_new_document_info` | read | Get new document info |
| `fattureincloud_verify_einvoice_xml` | read | Verify an e-invoice XML |
| `fattureincloud_get_einvoice_rejection` | read | Get an e-invoice rejection reason |
| `fattureincloud_create_client` | **write** | Create a client |
| `fattureincloud_create_product` | **write** | Create a product |
| `fattureincloud_create_issued_document` | **write** | Create an issued document |
| `fattureincloud_send_document_email` | **write** | E-mail an issued document |
| `fattureincloud_send_einvoice` | **write** | Send an e-invoice to the SDI |
| `fattureincloud_usage_status` | meta | Usage status (free-tier meter) |
| `fattureincloud_request_feature` | meta | Request a missing feature |
| `fattureincloud_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fattureincloud_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `fattureincloud_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `fattureincloud_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `fattureincloud_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
