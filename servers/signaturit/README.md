# Signaturit MCP by usefulapi

Use your [Signaturit](https://www.signaturit.com) account from Claude, Cursor, or any MCP client. Check signature requests and who has not signed, send reminders, cancel requests, and manage contacts and templates. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://signaturit.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://signaturit.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http signaturit https://signaturit.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=signaturit&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsignaturit.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "signaturit": {
      "url": "https://signaturit.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Signaturit credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/signaturit/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Signaturit API access token** from your Signaturit dashboard and the **environment** it belongs to (Production or Sandbox). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `signaturit_count_signatures` | read | Count signature requests |
| `signaturit_list_signatures` | read | List signature requests |
| `signaturit_get_signature` | read | Get a signature request |
| `signaturit_send_reminder` | **write** | Send a signature reminder |
| `signaturit_cancel_signature` | **write** | Cancel a signature request |
| `signaturit_list_contacts` | read | List contacts |
| `signaturit_get_contact` | read | Get a contact |
| `signaturit_create_contact` | **write** | Create a contact |
| `signaturit_update_contact` | **write** | Update a contact |
| `signaturit_delete_contact` | **write** | Delete a contact |
| `signaturit_list_templates` | read | List templates |
| `signaturit_get_credits` | read | Get remaining credits |
| `signaturit_usage_status` | meta | Usage status (free-tier meter) |
| `signaturit_request_feature` | meta | Request a missing feature |
| `signaturit_upgrade` | meta | Upgrade to Pro or Pro+ |
| `signaturit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `signaturit_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `signaturit_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `signaturit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
