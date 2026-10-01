# Documenso MCP by usefulapi

Read and send documents for signature — templates, recipients, fields and folders. Hosted, no local install.

**Live endpoint:** `https://documenso.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "documenso": {
      "url": "https://documenso.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Documenso credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `documenso_list_documents` | read | List documents |
| `documenso_get_document` | read | Get one document |
| `documenso_get_documents_by_ids` | read | Get several documents by id |
| `documenso_get_recipient` | read | Get one recipient |
| `documenso_get_field` | read | Get one field |
| `documenso_list_document_attachments` | read | List document attachments |
| `documenso_get_document_download_url` | read | Get a document download link |
| `documenso_list_templates` | read | List templates |
| `documenso_get_template` | read | Get one template |
| `documenso_list_folders` | read | List folders |
| `documenso_create_document_from_template` | **write** | Create a document from a template |
| `documenso_add_recipient` | **write** | Add a recipient to a document |
| `documenso_distribute_document` | **write** | Send a document for signature |
| `documenso_redistribute_document` | **write** | Resend a document to recipients |
| `documenso_duplicate_document` | **write** | Duplicate a document |
| `documenso_create_folder` | **write** | Create a folder |
| `documenso_usage_status` | meta | Usage status (free-tier meter) |
| `documenso_upgrade` | meta | Upgrade to Pro (unlimited) |
| `documenso_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `documenso_upgrade` (it returns a Stripe Checkout link). Cancel any time with `documenso_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `documenso_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
