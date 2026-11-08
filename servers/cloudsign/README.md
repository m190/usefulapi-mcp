# CloudSign MCP by usefulapi

Use your [CloudSign](https://www.cloudsign.jp/) account from Claude, Cursor, or any MCP client. Create, send and track e-signature documents, and read their status and files. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://cloudsign.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cloudsign.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cloudsign https://cloudsign.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cloudsign&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcloudsign.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cloudsign": {
      "url": "https://cloudsign.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CloudSign credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cloudsign/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **CloudSign Web API client ID** (CloudSign Web API settings; your team admin issues it). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cloudsign_list_documents` | read | List documents |
| `cloudsign_get_document` | read | Get document |
| `cloudsign_list_cabinets` | read | List cabinets |
| `cloudsign_create_document` | **write** | Create draft document |
| `cloudsign_update_document` | **write** | Update document |
| `cloudsign_add_participant` | **write** | Add participant |
| `cloudsign_add_file` | **write** | Add file |
| `cloudsign_send_document` | **write** | Send document |
| `cloudsign_delete_draft` | **write** | Delete draft document |
| `cloudsign_usage_status` | meta | Usage status (free-tier meter) |
| `cloudsign_request_feature` | meta | Request a missing feature |
| `cloudsign_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cloudsign_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `cloudsign_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `cloudsign_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `cloudsign_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
