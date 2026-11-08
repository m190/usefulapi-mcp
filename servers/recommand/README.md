# Recommand MCP by usefulapi

Use your [Recommand](https://recommand.eu) account from Claude, Cursor, or any MCP client. It reads companies, documents, the inbox and Peppol recipients, and it sends invoices by Peppol or email. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://recommand.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://recommand.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http recommand https://recommand.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=recommand&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frecommand.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "recommand": {
      "url": "https://recommand.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Recommand credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/recommand/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API key id** (`key_…`) and your **API key secret** (`secret_…`) of a basic API key from the Recommand dashboard. JWT keys are not accepted. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `recommand_list_companies` | read | List companies |
| `recommand_get_company` | read | Get a company |
| `recommand_list_labels` | read | List labels |
| `recommand_list_documents` | read | List documents |
| `recommand_get_document` | read | Get a document |
| `recommand_get_inbox` | read | Get the inbox |
| `recommand_verify_recipient` | read | Verify a Peppol recipient |
| `recommand_send_invoice` | **write** | Send an invoice |
| `recommand_mark_document_read` | **write** | Mark a document as read |
| `recommand_usage_status` | meta | Usage status (free-tier meter) |
| `recommand_request_feature` | meta | Request a missing feature |
| `recommand_upgrade` | meta | Upgrade to Pro or Pro+ |
| `recommand_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `recommand_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `recommand_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `recommand_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
