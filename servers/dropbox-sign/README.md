# Dropbox Sign MCP by usefulapi

Manage Dropbox Sign e-signatures — signature requests, templates, and signed documents — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Dropbox Sign API key.

**Live endpoint:** `https://dropbox-sign.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/dropbox-sign

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://dropbox-sign.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http dropbox-sign https://dropbox-sign.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=dropbox-sign&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdropbox-sign.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "dropbox-sign": {
      "url": "https://dropbox-sign.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Dropbox Sign credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/dropbox-sign/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Dropbox Sign API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dropbox_sign_get_account` | read | Get account |
| `dropbox_sign_get_team` | read | Get team |
| `dropbox_sign_list_signature_requests` | read | List signature requests |
| `dropbox_sign_get_signature_request` | read | Get signature request |
| `dropbox_sign_get_signed_files_url` | read | Get signed files URL |
| `dropbox_sign_list_templates` | read | List templates |
| `dropbox_sign_get_template` | read | Get template |
| `dropbox_sign_send_with_template` | **write** | Send signature request from template |
| `dropbox_sign_cancel_signature_request` | **write** | Cancel signature request |
| `dropbox_sign_remind_signature_request` | **write** | Remind signature request |
| `dropbox_sign_usage_status` | meta | Usage status (free-tier meter) |
| `dropbox_sign_request_feature` | meta | Request a missing feature |
| `dropbox_sign_upgrade` | meta | Upgrade to Pro or Pro+ |
| `dropbox_sign_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `dropbox_sign_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `dropbox_sign_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `dropbox_sign_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
