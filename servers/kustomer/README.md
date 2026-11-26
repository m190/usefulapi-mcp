# Kustomer MCP by usefulapi

Use your [Kustomer](https://www.kustomer.com) account from Claude, Cursor, or any MCP client. Read customers, conversations, messages and notes from your Kustomer help desk, and add notes or change tags when you ask. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://kustomer.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kustomer.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kustomer https://kustomer.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kustomer&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkustomer.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kustomer": {
      "url": "https://kustomer.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Kustomer credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kustomer/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Kustomer API key** (Settings → Security → API Keys, created by an admin) and your **data region** (us, eu or india). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kustomer_get_current_user` | read | Get the current API user |
| `kustomer_list_users` | read | List users |
| `kustomer_get_customer` | read | Get a customer |
| `kustomer_find_customer_by_email` | read | Find a customer by email |
| `kustomer_find_customer_by_phone` | read | Find a customer by phone |
| `kustomer_find_customer_by_external_id` | read | Find a customer by external id |
| `kustomer_search` | read | Search records |
| `kustomer_list_customer_conversations` | read | List a customer's conversations |
| `kustomer_get_customer_notes` | read | List a customer's notes |
| `kustomer_get_conversation` | read | Get a conversation |
| `kustomer_get_conversation_messages` | read | List conversation messages |
| `kustomer_get_conversation_notes` | read | List conversation notes |
| `kustomer_get_company` | read | Get a company |
| `kustomer_add_conversation_note` | **write** | Add a note to a conversation |
| `kustomer_add_conversation_tags` | **write** | Add tags to a conversation |
| `kustomer_remove_conversation_tags` | **write** | Remove tags from a conversation |
| `kustomer_usage_status` | meta | Usage status (free-tier meter) |
| `kustomer_request_feature` | meta | Request a missing feature |
| `kustomer_upgrade` | meta | Upgrade to Pro or Pro+ |
| `kustomer_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `kustomer_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `kustomer_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `kustomer_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
