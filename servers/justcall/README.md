# JustCall MCP by usefulapi

Use your [JustCall](https://www.justcall.io) account from Claude, Cursor, or any MCP client. Read calls, call analytics, texts, contacts and phone numbers, and send an SMS or create and update contacts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://justcall.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://justcall.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http justcall https://justcall.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=justcall&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjustcall.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "justcall": {
      "url": "https://justcall.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your JustCall credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/justcall/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **JustCall API key** and **JustCall API secret** (profile icon → APIs and Webhooks). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `justcall_list_calls` | read | List calls |
| `justcall_get_call` | read | Get a call |
| `justcall_get_call_journey` | read | Get a call journey |
| `justcall_get_call_voice_agent` | read | Get voice agent data for a call |
| `justcall_get_account_call_analytics` | read | Get account call analytics |
| `justcall_list_contacts` | read | List contacts |
| `justcall_get_contact` | read | Get a contact |
| `justcall_create_contact` | **write** | Create a contact |
| `justcall_update_contact_status` | **write** | Update contact status |
| `justcall_list_texts` | read | List texts |
| `justcall_get_text` | read | Get a text |
| `justcall_list_text_threads` | read | List text threads |
| `justcall_send_sms` | **write** | Send an SMS |
| `justcall_list_phone_numbers` | read | List phone numbers |
| `justcall_usage_status` | meta | Usage status (free-tier meter) |
| `justcall_request_feature` | meta | Request a missing feature |
| `justcall_upgrade` | meta | Upgrade to Pro or Pro+ |
| `justcall_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `justcall_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `justcall_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `justcall_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
