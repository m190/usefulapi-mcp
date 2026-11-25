# Recall.ai MCP by usefulapi

Use your [Recall.ai](https://www.recall.ai) account from Claude, Cursor, or any MCP client. It lists bots, recordings and transcripts, and sends or removes meeting bots. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://recall-ai.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://recall-ai.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http recall-ai https://recall-ai.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=recall-ai&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frecall-ai.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "recall-ai": {
      "url": "https://recall-ai.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Recall.ai credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/recall-ai/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Recall.ai API key** and the **region** where you created it (Developers → API keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `recallai_list_bots` | read | List bots |
| `recallai_get_bot` | read | Get bot |
| `recallai_list_recordings` | read | List recordings |
| `recallai_get_recording` | read | Get recording |
| `recallai_list_transcripts` | read | List transcripts |
| `recallai_get_transcript` | read | Get transcript |
| `recallai_create_bot` | **write** | Create bot |
| `recallai_send_chat_message` | **write** | Send chat message |
| `recallai_leave_call` | **write** | Remove bot from call |
| `recallai_delete_scheduled_bot` | **write** | Delete scheduled bot |
| `recallai_usage_status` | meta | Usage status (free-tier meter) |
| `recallai_request_feature` | meta | Request a missing feature |
| `recallai_upgrade` | meta | Upgrade to Pro or Pro+ |
| `recallai_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `recallai_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `recallai_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `recallai_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
