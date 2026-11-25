# Pocketlaw MCP by usefulapi

Use your [Pocketlaw](https://www.pocketlaw.com) account from Claude, Cursor, or any MCP client. Read documents, templates and folders, and create or update documents from templates. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://pocketlaw.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pocketlaw.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pocketlaw https://pocketlaw.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pocketlaw&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpocketlaw.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pocketlaw": {
      "url": "https://pocketlaw.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Pocketlaw credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pocketlaw/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Pocketlaw client ID** and **client secret** (Settings → Account → API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pocketlaw_list_documents` | read | List documents |
| `pocketlaw_search_documents` | read | Search documents |
| `pocketlaw_get_document` | read | Get a document |
| `pocketlaw_list_templates` | read | List templates |
| `pocketlaw_get_template` | read | Get a template |
| `pocketlaw_list_folders` | read | List folders |
| `pocketlaw_search_folders` | read | Search folders |
| `pocketlaw_list_users` | read | List users |
| `pocketlaw_list_sign_providers` | read | List signing providers |
| `pocketlaw_create_document` | **write** | Create a document from a template |
| `pocketlaw_update_document` | **write** | Update a document |
| `pocketlaw_usage_status` | meta | Usage status (free-tier meter) |
| `pocketlaw_request_feature` | meta | Request a missing feature |
| `pocketlaw_upgrade` | meta | Upgrade to Pro or Pro+ |
| `pocketlaw_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `pocketlaw_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `pocketlaw_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `pocketlaw_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
