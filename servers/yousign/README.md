# Yousign MCP by usefulapi

Use your [Yousign](https://yousign.com) account from Claude, Cursor, or any MCP client. Read signature requests, signers, documents and audit trails, and create, activate or cancel signature requests and send signer reminders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://yousign.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://yousign.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http yousign https://yousign.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=yousign&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fyousign.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "yousign": {
      "url": "https://yousign.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Yousign credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/yousign/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Yousign API key** and choose **sandbox** or **production** to match it (create the key in the Yousign app under **API → API keys**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `yousign_list_signature_requests` | read | List signature requests |
| `yousign_get_signature_request` | read | Get signature request |
| `yousign_list_signers` | read | List signers |
| `yousign_get_signer` | read | Get signer |
| `yousign_list_documents` | read | List documents |
| `yousign_get_signer_audit_trail` | read | Get signer audit trail |
| `yousign_list_templates` | read | List templates |
| `yousign_get_template` | read | Get template |
| `yousign_list_workspaces` | read | List workspaces |
| `yousign_create_signature_request` | **write** | Create signature request (draft) |
| `yousign_add_signer` | **write** | Add signer |
| `yousign_activate_signature_request` | **write** | Activate signature request |
| `yousign_send_signer_reminder` | **write** | Send signer reminder |
| `yousign_cancel_signature_request` | **write** | Cancel signature request |
| `yousign_usage_status` | meta | Usage status (free-tier meter) |
| `yousign_request_feature` | meta | Request a missing feature |
| `yousign_upgrade` | meta | Upgrade to Pro or Pro+ |
| `yousign_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `yousign_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `yousign_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `yousign_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
