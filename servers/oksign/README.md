# OKSign MCP by usefulapi

Connect at `https://oksign.usefulapi.io/mcp`.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://oksign.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http oksign https://oksign.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=oksign&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Foksign.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "oksign": {
      "url": "https://oksign.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your OKSign credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/oksign/

<!-- connect:end (generated above, edit below) -->

Connect your OKSign credentials to access your account through usefulapi.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `oksign_get_credits` | read | Get credits and storage |
| `oksign_list_users` | read | List users |
| `oksign_list_email_templates` | read | List email templates |
| `oksign_list_contacts` | read | List contacts |
| `oksign_list_active_documents` | read | List active documents |
| `oksign_list_signed_documents` | read | List signed documents |
| `oksign_list_notification_errors` | read | List email and SMS delivery errors |
| `oksign_document_exists` | read | Check a document exists |
| `oksign_get_document_metadata` | read | Get signed document metadata |
| `oksign_get_form_descriptor` | read | Get a document's form descriptor |
| `oksign_get_linked_document` | read | Find the source or signed copy of a document |
| `oksign_upsert_contacts` | **write** | Add or update contacts |
| `oksign_remove_contacts` | **write** | Remove contacts |
| `oksign_remove_document` | **write** | Remove a document |
| `oksign_usage_status` | meta | Usage status (free-tier meter) |
| `oksign_request_feature` | meta | Request a missing feature |
| `oksign_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `oksign_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per connected account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |

Pro covers this server only. Subscribe with `oksign_upgrade` (it returns a Stripe Checkout link). Cancel any time with `oksign_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `oksign_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
