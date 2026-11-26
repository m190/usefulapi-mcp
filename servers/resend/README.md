# Resend MCP by usefulapi

Use your [Resend](https://resend.com) account from Claude, Cursor, or any MCP client. Read sent emails, sending domains, contacts, broadcasts and usage, and send or schedule an email. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://resend.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://resend.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http resend https://resend.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=resend&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fresend.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "resend": {
      "url": "https://resend.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Resend credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/resend/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a Resend **API key** with Full access (Resend dashboard, API Keys); sending-only keys are refused. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `resend_list_emails` | read | List sent emails |
| `resend_get_email` | read | Get a sent email |
| `resend_list_domains` | read | List domains |
| `resend_get_domain` | read | Get a domain |
| `resend_list_api_keys` | read | List API keys |
| `resend_get_usage` | read | Get usage and quotas |
| `resend_list_contacts` | read | List contacts |
| `resend_get_contact` | read | Get a contact |
| `resend_list_audiences` | read | List audiences |
| `resend_list_segments` | read | List segments |
| `resend_list_topics` | read | List topics |
| `resend_list_broadcasts` | read | List broadcasts |
| `resend_list_templates` | read | List templates |
| `resend_list_webhooks` | read | List webhooks |
| `resend_list_logs` | read | List API request logs |
| `resend_send_email` | **write** | Send an email |
| `resend_cancel_scheduled_email` | **write** | Cancel a scheduled email |
| `resend_create_contact` | **write** | Create a contact |
| `resend_usage_status` | meta | Usage status (free-tier meter) |
| `resend_request_feature` | meta | Request a missing feature |
| `resend_upgrade` | meta | Upgrade to Pro or Pro+ |
| `resend_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `resend_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `resend_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `resend_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
