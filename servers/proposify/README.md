# Proposify MCP by usefulapi

Use your [Proposify](https://www.proposify.com) account from Claude, Cursor, or any MCP client. Read templates, documents, companies, clients and content sections, and create or edit companies, clients and documents. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://proposify.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://proposify.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http proposify https://proposify.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=proposify&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fproposify.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "proposify": {
      "url": "https://proposify.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you enter your own Proposify app's client ID and secret, then sign in with your Proposify account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/proposify/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Proposify and approve access. An account admin must first create the Connect API client (Settings → Connect API in Proposify). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `proposify_list_templates` | read | List templates |
| `proposify_list_users` | read | List users |
| `proposify_list_companies` | read | List companies |
| `proposify_list_clients` | read | List clients |
| `proposify_list_documents` | read | List documents or templates |
| `proposify_get_document` | read | Get a document |
| `proposify_list_sections` | read | List content-library sections |
| `proposify_create_company` | **write** | Create a company |
| `proposify_update_company` | **write** | Update a company |
| `proposify_create_client` | **write** | Create a client |
| `proposify_update_client` | **write** | Update a client |
| `proposify_create_document` | **write** | Create a document |
| `proposify_update_document` | **write** | Update a document |
| `proposify_add_document_section` | **write** | Add a section to a document |
| `proposify_set_document_custom_fields` | **write** | Set a document's custom fields |
| `proposify_archive_document` | **write** | Archive a document |
| `proposify_unarchive_document` | **write** | Unarchive a document |
| `proposify_usage_status` | meta | Usage status (free-tier meter) |
| `proposify_request_feature` | meta | Request a missing feature |
| `proposify_upgrade` | meta | Upgrade to Pro or Pro+ |
| `proposify_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `proposify_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `proposify_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `proposify_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
