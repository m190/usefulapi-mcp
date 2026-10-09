# Paperform MCP by usefulapi

Use [Paperform](https://paperform.co) from Claude, Cursor, or any MCP client — forms, fields, submissions, partial submissions, products, coupons, webhooks, spaces and Papersign documents.
Hosted, no local install: connect with your own Paperform credentials.

**Live endpoint:** `https://paperform.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/paperform

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://paperform.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http paperform https://paperform.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=paperform&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpaperform.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "paperform": {
      "url": "https://paperform.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Paperform credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/paperform/

<!-- connect:end (generated above, edit below) -->

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Paperform credentials.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `paperform_list_forms` | read | List forms |
| `paperform_get_form` | read | Get a form |
| `paperform_list_form_fields` | read | List form fields |
| `paperform_list_submissions` | read | List submissions |
| `paperform_get_submission` | read | Get a submission |
| `paperform_list_partial_submissions` | read | List partial submissions |
| `paperform_get_partial_submission` | read | Get a partial submission |
| `paperform_list_products` | read | List form products |
| `paperform_get_product` | read | Get a form product |
| `paperform_list_coupons` | read | List form coupons |
| `paperform_get_coupon` | read | Get a form coupon |
| `paperform_list_webhooks` | read | List form webhooks |
| `paperform_list_spaces` | read | List spaces |
| `paperform_list_space_forms` | read | List the forms in a space |
| `paperform_list_papersign_documents` | read | List Papersign documents |
| `paperform_get_papersign_document` | read | Get a Papersign document |
| `paperform_get_signed_document_url` | read | Get the signed PDF link |
| `paperform_list_papersign_folders` | read | List Papersign folders |
| `paperform_list_papersign_spaces` | read | List Papersign spaces |
| `paperform_create_coupon` | **write** | Create a form coupon |
| `paperform_update_coupon` | **write** | Update a form coupon |
| `paperform_set_product_quantity` | **write** | Set a product's stock quantity |
| `paperform_set_product_sold` | **write** | Set a product's sold count |
| `paperform_usage_status` | meta | Usage status (free-tier meter) |
| `paperform_request_feature` | meta | Request a missing feature |
| `paperform_upgrade` | meta | Upgrade to Pro (unlimited) |
| `paperform_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `paperform_upgrade` (it returns a Stripe Checkout link). Cancel any time with `paperform_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `paperform_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Paperform.
