# Rasayel MCP by usefulapi

Use your [Rasayel](https://rasayel.io) account from Claude, Cursor, or any MCP client. Read conversations, contacts and teammates, and send text messages to customers. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://rasayel.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rasayel.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rasayel https://rasayel.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rasayel&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frasayel.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rasayel": {
      "url": "https://rasayel.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Rasayel credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rasayel/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Rasayel API key**, the **Basic Auth** value from the Rasayel app's **API Management** tab. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rasayel_get_app` | read | Get Rasayel app |
| `rasayel_list_conversations` | read | List conversations |
| `rasayel_get_conversation` | read | Get conversation |
| `rasayel_list_contacts` | read | List contacts |
| `rasayel_list_teammates` | read | List teammates |
| `rasayel_send_text_message` | **write** | Send text message |
| `rasayel_usage_status` | meta | Usage status (free-tier meter) |
| `rasayel_request_feature` | meta | Request a missing feature |
| `rasayel_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rasayel_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `rasayel_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `rasayel_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `rasayel_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
