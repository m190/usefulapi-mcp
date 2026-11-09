# ZapAssina MCP by usefulapi

Use your ZapAssina account from Claude, Cursor, or any MCP client. Send documents for e-signature, check signers, and organize folders and deadlines. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://zapassina.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zapassina.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zapassina https://zapassina.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zapassina&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzapassina.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zapassina": {
      "url": "https://zapassina.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ZapAssina credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zapassina/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **ZapAssina API token** (starts with `zpa_`), created in ZapAssina under **Painel → Integrações**. The token appears only once. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zapassina_list_templates` | read | List document templates |
| `zapassina_get_template` | read | Get a document template |
| `zapassina_list_documents` | read | List and search documents |
| `zapassina_get_document` | read | Get a document |
| `zapassina_list_folders` | read | List folders |
| `zapassina_create_document_from_template` | **write** | Create a document from a template |
| `zapassina_create_document` | **write** | Create a document from a PDF |
| `zapassina_cancel_document` | **write** | Cancel a document |
| `zapassina_set_document_deadline` | **write** | Set or clear a document deadline |
| `zapassina_move_document` | **write** | Move a document to a folder |
| `zapassina_resend_invitation` | **write** | Resend signing invitations |
| `zapassina_add_signer` | **write** | Add a signer to a document |
| `zapassina_update_signer` | **write** | Update a signer |
| `zapassina_remove_signer` | **write** | Remove a signer |
| `zapassina_create_folder` | **write** | Create a folder |
| `zapassina_usage_status` | meta | Usage status (free-tier meter) |
| `zapassina_request_feature` | meta | Request a missing feature |
| `zapassina_upgrade` | meta | Upgrade to Pro or Pro+ |
| `zapassina_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `zapassina_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `zapassina_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `zapassina_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
