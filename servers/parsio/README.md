# Parsio MCP by usefulapi

Use your [Parsio](https://parsio.io) account from Claude, Cursor, or any MCP client. Read mailboxes, documents and parsed data, and send text or a document through the parser. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://parsio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://parsio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http parsio https://parsio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=parsio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fparsio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "parsio": {
      "url": "https://parsio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Parsio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/parsio/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Parsio API key** (Parsio → Account settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `parsio_list_mailboxes` | read | List mailboxes |
| `parsio_get_mailbox` | read | Get a mailbox |
| `parsio_list_table_fields` | read | List table fields |
| `parsio_list_documents` | read | List documents |
| `parsio_get_document` | read | Get a document |
| `parsio_get_parsed_data` | read | Get parsed data |
| `parsio_list_templates` | read | List templates |
| `parsio_get_template` | read | Get a template |
| `parsio_list_webhooks` | read | List webhooks |
| `parsio_list_collected_emails` | read | List collected emails |
| `parsio_parse_text` | **write** | Parse text or HTML |
| `parsio_reparse_document` | **write** | Parse a document again |
| `parsio_usage_status` | meta | Usage status (free-tier meter) |
| `parsio_request_feature` | meta | Request a missing feature |
| `parsio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `parsio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `parsio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `parsio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `parsio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
