# NFe.io MCP by usefulapi

Use your [NFe.io](https://nfe.io) account from Claude, Cursor, or any MCP client. Look up company and postal code data, check NF-e at SEFAZ, and list, issue or cancel service invoices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://nfe-io.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nfe-io.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nfe-io https://nfe-io.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nfe-io&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnfe-io.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nfe-io": {
      "url": "https://nfe-io.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your NFe.io credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nfe-io/

<!-- connect:end (generated above, edit below) -->

On first connect you provide at least one **NFe.io key** from the NFe.io dashboard under API keys: a **data key** for lookups, or an **invoice key** for companies and service invoices. The server checks each key and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nfeio_lookup_cnpj` | read | Look up a CNPJ |
| `nfeio_lookup_state_tax` | read | Look up state tax registration |
| `nfeio_lookup_cep` | read | Look up a postal code (CEP) |
| `nfeio_get_product_invoice` | read | Get an NF-e from SEFAZ by access key |
| `nfeio_list_companies` | read | List companies |
| `nfeio_get_company` | read | Get a company |
| `nfeio_list_service_invoices` | read | List service invoices (NFS-e) |
| `nfeio_get_service_invoice` | read | Get a service invoice (NFS-e) |
| `nfeio_get_service_invoice_by_external_id` | read | Get a service invoice by your external id |
| `nfeio_issue_service_invoice` | **write** | Issue a service invoice (NFS-e) |
| `nfeio_cancel_service_invoice` | **write** | Cancel a service invoice (NFS-e) |
| `nfeio_usage_status` | meta | Usage status (free-tier meter) |
| `nfeio_request_feature` | meta | Request a missing feature |
| `nfeio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `nfeio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `nfeio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `nfeio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `nfeio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
