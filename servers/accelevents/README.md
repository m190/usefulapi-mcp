# Accelevents MCP by usefulapi

Use your [Accelevents](https://www.accelevents.com) account from Claude, Cursor, or any MCP client. Read attendees, ticket sales, sessions and speakers for one event, and add speakers or remove session bookmarks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://accelevents.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://accelevents.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http accelevents https://accelevents.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=accelevents&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faccelevents.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "accelevents": {
      "url": "https://accelevents.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Accelevents credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/accelevents/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Accelevents enterprise API key** (Edit Enterprise → Integrations → API Key; owners only) and an **event URL** (the last part of the event address, such as my-summit-2027). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `accelevents_list_attendees` | read | List attendees |
| `accelevents_get_ticket_sales` | read | Get ticket sales |
| `accelevents_check_recurring_event` | read | Check recurring event |
| `accelevents_list_sessions` | read | List sessions |
| `accelevents_list_public_sessions` | read | List public sessions |
| `accelevents_get_attendee_sessions` | read | Get an attendee's sessions |
| `accelevents_list_speakers` | read | List speakers |
| `accelevents_create_speaker` | **write** | Create a speaker |
| `accelevents_remove_session_bookmark` | **write** | Remove a session bookmark |
| `accelevents_usage_status` | meta | Usage status (free-tier meter) |
| `accelevents_request_feature` | meta | Request a missing feature |
| `accelevents_upgrade` | meta | Upgrade to Pro or Pro+ |
| `accelevents_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `accelevents_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `accelevents_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `accelevents_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
