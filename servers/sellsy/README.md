# Sellsy MCP by usefulapi

**Live endpoint:** `https://sellsy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/sellsy

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sellsy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sellsy https://sellsy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sellsy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsellsy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sellsy": {
      "url": "https://sellsy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sellsy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sellsy/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sellsy_search` | read | Search across Sellsy |
| `sellsy_list_companies` | read | List companies |
| `sellsy_search_companies` | read | Search companies |
| `sellsy_get_company` | read | Get a company |
| `sellsy_list_company_contacts` | read | List a company's contacts |
| `sellsy_list_individuals` | read | List individuals |
| `sellsy_search_individuals` | read | Search individuals |
| `sellsy_get_individual` | read | Get an individual |
| `sellsy_list_contacts` | read | List contacts |
| `sellsy_search_contacts` | read | Search contacts |
| `sellsy_get_contact` | read | Get a contact |
| `sellsy_list_opportunities` | read | List opportunities |
| `sellsy_search_opportunities` | read | Search opportunities |
| `sellsy_get_opportunity` | read | Get an opportunity |
| `sellsy_list_opportunity_pipelines` | read | List opportunity pipelines |
| `sellsy_list_pipeline_steps` | read | List the steps of a pipeline |
| `sellsy_list_estimates` | read | List estimates |
| `sellsy_search_estimates` | read | Search estimates |
| `sellsy_get_estimate` | read | Get an estimate |
| `sellsy_list_invoices` | read | List invoices |
| `sellsy_search_invoices` | read | Search invoices |
| `sellsy_get_invoice` | read | Get an invoice |
| `sellsy_list_invoice_payments` | read | List an invoice's payments |
| `sellsy_list_orders` | read | List orders |
| `sellsy_search_orders` | read | Search orders |
| `sellsy_get_order` | read | Get an order |
| `sellsy_list_credit_notes` | read | List credit notes |
| `sellsy_get_credit_note` | read | Get a credit note |
| `sellsy_list_items` | read | List items |
| `sellsy_search_items` | read | Search items |
| `sellsy_get_item` | read | Get an item |
| `sellsy_search_payments` | read | Search payments |
| `sellsy_list_tasks` | read | List tasks |
| `sellsy_search_tasks` | read | Search tasks |
| `sellsy_get_task` | read | Get a task |
| `sellsy_list_task_labels` | read | List task labels |
| `sellsy_search_comments` | read | Search comments (notes) |
| `sellsy_list_staffs` | read | List staff members |
| `sellsy_create_company` | **write** | Create a company |
| `sellsy_create_individual` | **write** | Create an individual |
| `sellsy_create_contact` | **write** | Create a contact |
| `sellsy_create_opportunity` | **write** | Create an opportunity |
| `sellsy_create_comment` | **write** | Add a comment (note) |
| `sellsy_create_task` | **write** | Create a task |
| `sellsy_usage_status` | meta | Usage status (free-tier meter) |
| `sellsy_request_feature` | meta | Request a missing feature |
| `sellsy_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `sellsy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `sellsy_upgrade` (it returns a Stripe Checkout link). Cancel any time with `sellsy_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `sellsy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
