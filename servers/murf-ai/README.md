# Murf AI MCP by usefulapi

Use your [Murf AI](https://murf.ai) account from Claude, Cursor, or any MCP client. List voices, generate speech audio, translate text and delete cloned voices; generation spends Murf credits. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://murf-ai.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://murf-ai.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http murf-ai https://murf-ai.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=murf-ai&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmurf-ai.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "murf-ai": {
      "url": "https://murf-ai.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Murf AI credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/murf-ai/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Murf API key** (Murf dashboard at murf.ai/api/dashboard). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `murfai_list_voices` | read | List voices |
| `murfai_list_cloned_voices` | read | List cloned voices |
| `murfai_get_voice_clone_status` | read | Get voice clone status |
| `murfai_generate_speech` | **write** | Generate speech |
| `murfai_translate_text` | **write** | Translate text |
| `murfai_delete_cloned_voice` | **write** | Delete a cloned voice |
| `murfai_usage_status` | meta | Usage status (free-tier meter) |
| `murfai_request_feature` | meta | Request a missing feature |
| `murfai_upgrade` | meta | Upgrade to Pro or Pro+ |
| `murfai_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `murfai_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `murfai_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `murfai_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
