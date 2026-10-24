# Safefood 360 MCP by usefulapi

Read Safefood 360 documents, complaints, suppliers, materials; create complaints, update documents.

**Live endpoint:** `https://safefood-360.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/safefood-360

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://safefood-360.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http safefood-360 https://safefood-360.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=safefood-360&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsafefood-360.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "safefood-360": {
      "url": "https://safefood-360.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Safefood 360 credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/safefood-360/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your Safefood 360 **API subscription key** (the primary key from your profile at developers.safefood360.com), your site id, and the email and **password** of a Safefood 360 user (ideally a dedicated user with only the permissions you want to give).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `safefood360_list_documents` | read | List documents |
| `safefood360_get_document` | read | Get document |
| `safefood360_list_document_reviews` | read | List document reviews |
| `safefood360_get_document_review` | read | Get document review |
| `safefood360_list_complaints` | read | List complaints |
| `safefood360_get_complaint` | read | Get complaint |
| `safefood360_list_suppliers` | read | List suppliers |
| `safefood360_get_supplier` | read | Get supplier |
| `safefood360_list_materials` | read | List materials |
| `safefood360_get_material` | read | Get material |
| `safefood360_get_customer` | read | Get customer |
| `safefood360_get_employee` | read | Get employee |
| `safefood360_get_final_product` | read | Get final product |
| `safefood360_get_batching_record` | read | Get batching record |
| `safefood360_update_document` | **write** | Update document |
| `safefood360_update_customer` | **write** | Update customer |
| `safefood360_create_complaint` | **write** | Create complaint |
| `safefood360_usage_status` | meta | Usage status (free-tier meter) |
| `safefood360_request_feature` | meta | Request a missing feature |
| `safefood360_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `safefood360_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `safefood360_upgrade` (it returns a Stripe Checkout link). Cancel any time with `safefood360_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `safefood360_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Safefood 360.
