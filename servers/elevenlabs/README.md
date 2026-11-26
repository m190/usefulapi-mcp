# ElevenLabs MCP by usefulapi

Use your [ElevenLabs](https://elevenlabs.io) account from Claude, Cursor, or any MCP client. Read voices, models, plan usage and speech history, and delete a speech history item. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://elevenlabs.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://elevenlabs.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http elevenlabs https://elevenlabs.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=elevenlabs&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Felevenlabs.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "elevenlabs": {
      "url": "https://elevenlabs.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ElevenLabs credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/elevenlabs/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **ElevenLabs API key** (xi-api-key, from Profile). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `elevenlabs_get_user_info` | read | Get account info |
| `elevenlabs_get_subscription` | read | Get subscription and usage |
| `elevenlabs_list_models` | read | List models |
| `elevenlabs_list_voices` | read | List voices |
| `elevenlabs_get_voice` | read | Get a voice |
| `elevenlabs_get_voice_settings` | read | Get voice settings |
| `elevenlabs_search_shared_voices` | read | Search the shared voice library |
| `elevenlabs_list_speech_history` | read | List speech history |
| `elevenlabs_get_speech_history_item` | read | Get a speech history item |
| `elevenlabs_delete_speech_history_item` | **write** | Delete a speech history item |
| `elevenlabs_usage_status` | meta | Usage status (free-tier meter) |
| `elevenlabs_request_feature` | meta | Request a missing feature |
| `elevenlabs_upgrade` | meta | Upgrade to Pro or Pro+ |
| `elevenlabs_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `elevenlabs_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `elevenlabs_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `elevenlabs_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
