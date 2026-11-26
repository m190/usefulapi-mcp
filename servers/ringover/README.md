# Ringover MCP by usefulapi

Use your [Ringover](https://www.ringover.com) account from Claude, Cursor, or any MCP client. It reads calls, transcripts, AI call summaries, users, numbers and contacts, and it creates contacts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ringover.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ringover.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ringover https://ringover.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ringover&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fringover.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ringover": {
      "url": "https://ringover.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Ringover credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ringover/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Ringover API key** (Developer → API Keys in Ringover) and your **account region** (EU or US). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ringover_list_calls` | read | List calls |
| `ringover_get_call` | read | Get a call |
| `ringover_list_transcriptions` | read | List transcriptions |
| `ringover_get_transcription` | read | Get a transcription |
| `ringover_get_empower_call` | read | Get an Empower call |
| `ringover_get_call_summary` | read | Get an AI call summary |
| `ringover_get_call_moments` | read | Get key moments of a call |
| `ringover_list_users` | read | List users |
| `ringover_get_user` | read | Get a user |
| `ringover_list_teams` | read | List team information |
| `ringover_list_numbers` | read | List phone numbers |
| `ringover_list_ivrs` | read | List IVRs |
| `ringover_list_tags` | read | List call tags |
| `ringover_list_presences` | read | List team presences |
| `ringover_list_contacts` | read | List contacts |
| `ringover_get_contact` | read | Get a contact |
| `ringover_create_contact` | **write** | Create a contact |
| `ringover_list_conversations` | read | List SMS conversations |
| `ringover_list_conversation_messages` | read | List conversation messages |
| `ringover_list_campaigns` | read | List call campaigns |
| `ringover_get_campaign_logs` | read | Get campaign logs |
| `ringover_list_webhooks` | read | List webhooks |
| `ringover_usage_status` | meta | Usage status (free-tier meter) |
| `ringover_request_feature` | meta | Request a missing feature |
| `ringover_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ringover_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ringover_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ringover_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ringover_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
