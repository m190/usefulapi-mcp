# Anvil MCP by usefulapi

Fill and generate PDFs and run Etch e-signature packets from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Anvil API key.

**Live endpoint:** `https://anvil.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/anvil

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://anvil.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http anvil https://anvil.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=anvil&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fanvil.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "anvil": {
      "url": "https://anvil.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Anvil credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/anvil/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Anvil API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `anvil_current_user` | read | Current Anvil user |
| `anvil_get_organization` | read | Get organization |
| `anvil_get_cast` | read | Get cast (PDF template) |
| `anvil_get_etch_packet` | read | Get Etch e-signature packet |
| `anvil_get_weld` | read | Get weld (workflow) |
| `anvil_get_weld_data` | read | Get weld data (workflow submission) |
| `anvil_fill_pdf` | **write** | Fill a PDF template |
| `anvil_generate_pdf` | **write** | Generate a PDF from HTML or Markdown |
| `anvil_create_etch_packet` | **write** | Create Etch e-signature packet |
| `anvil_generate_etch_sign_url` | **write** | Generate Etch signing URL |
| `anvil_usage_status` | meta | Usage status (free-tier meter) |
| `anvil_request_feature` | meta | Request a missing feature |
| `anvil_upgrade` | meta | Upgrade to Pro (unlimited) |
| `anvil_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `anvil_upgrade` (it returns a Stripe Checkout link). Cancel any time with `anvil_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `anvil_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
