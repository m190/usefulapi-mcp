# Bukku MCP by usefulapi

**Live endpoint:** `https://bukku.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bukku.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bukku https://bukku.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bukku&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbukku.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bukku": {
      "url": "https://bukku.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bukku credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bukku/

<!-- connect:end (generated above, edit below) -->

On first connect you will paste your **Bukku access token and company subdomain**. They are validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bukku_list_contacts` | read | List contacts |
| `bukku_get_contact` | read | Get contact |
| `bukku_list_contact_groups` | read | List contact groups |
| `bukku_list_accounts` | read | List accounts (chart of accounts) |
| `bukku_get_account` | read | Get account |
| `bukku_list_products` | read | List products |
| `bukku_get_product` | read | Get product |
| `bukku_list_product_groups` | read | List product groups |
| `bukku_list_sales_invoices` | read | List sales invoices |
| `bukku_list_sales_documents` | read | List other sales documents |
| `bukku_get_sales_document` | read | Get sales document |
| `bukku_list_purchase_bills` | read | List purchase bills |
| `bukku_list_purchase_documents` | read | List other purchase documents |
| `bukku_get_purchase_document` | read | Get purchase document |
| `bukku_list_journal_entries` | read | List journal entries |
| `bukku_get_journal_entry` | read | Get journal entry |
| `bukku_list_bank_transactions` | read | List bank transactions |
| `bukku_get_bank_transaction` | read | Get bank transaction |
| `bukku_list_tags` | read | List tags |
| `bukku_get_lookup_lists` | read | Get lookup lists |
| `bukku_create_contact` | **write** | Create contact |
| `bukku_set_contact_archived` | **write** | Archive or unarchive contact |
| `bukku_create_sales_invoice` | **write** | Create sales invoice |
| `bukku_usage_status` | meta | Usage status (free-tier meter) |
| `bukku_request_feature` | meta | Request a missing feature |
| `bukku_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bukku_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per account) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bukku_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bukku_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bukku_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
