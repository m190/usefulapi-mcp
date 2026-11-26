# Qualio MCP by usefulapi

Use your [Qualio](https://www.qualio.com) account from Claude, Cursor, or any MCP client. Read documents, quality events, change controls, suppliers, training and the audit trail, and create or update quality events. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://qualio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://qualio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http qualio https://qualio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=qualio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fqualio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "qualio": {
      "url": "https://qualio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Qualio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/qualio/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Qualio Developer API token** (Admin settings → Developer API tokens in Qualio). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `qualio_get_me` | read | Get the current user |
| `qualio_list_users` | read | List users |
| `qualio_get_user` | read | Get a user |
| `qualio_list_groups` | read | List user groups |
| `qualio_list_group_users` | read | List users in a group |
| `qualio_query_documents` | read | Query documents |
| `qualio_get_document` | read | Get a document |
| `qualio_get_document_content` | read | Get document content |
| `qualio_list_document_versions` | read | List document versions |
| `qualio_list_document_comments` | read | List document comments |
| `qualio_list_document_templates` | read | List document templates |
| `qualio_query_events` | read | Query quality events |
| `qualio_get_event` | read | Get a quality event |
| `qualio_list_event_templates` | read | List event templates |
| `qualio_create_event` | **write** | Create a quality event |
| `qualio_update_event` | **write** | Update a quality event |
| `qualio_list_change_controls` | read | List change controls |
| `qualio_get_change_control` | read | Get a change control |
| `qualio_list_change_requests` | read | List change requests |
| `qualio_list_suppliers` | read | List suppliers |
| `qualio_get_supplier` | read | Get a supplier |
| `qualio_list_frameworks` | read | List compliance frameworks |
| `qualio_list_gaps` | read | List compliance gaps |
| `qualio_query_training` | read | Query training assignments |
| `qualio_get_training_stats` | read | Get company training statistics |
| `qualio_query_audit_trail` | read | Query the audit trail |
| `qualio_list_tags` | read | List tags |
| `qualio_usage_status` | meta | Usage status (free-tier meter) |
| `qualio_request_feature` | meta | Request a missing feature |
| `qualio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `qualio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `qualio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `qualio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `qualio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
