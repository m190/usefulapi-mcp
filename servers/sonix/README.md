# Sonix MCP by usefulapi

Use your [Sonix](https://sonix.ai) account from Claude, Cursor, or any MCP client. It uploads media for transcription, reads transcripts and captions, and starts translations, exports and AI summaries. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sonix.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sonix.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sonix https://sonix.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sonix&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsonix.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sonix": {
      "url": "https://sonix.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sonix credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sonix/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Sonix API key** (from my.sonix.ai/api; the API needs a paid Sonix plan). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sonix_list_media` | read | List media files |
| `sonix_get_media` | read | Get a media file |
| `sonix_list_shares` | read | List shares of a media file |
| `sonix_get_transcript_text` | read | Get transcript text |
| `sonix_get_captions` | read | Get captions (SRT or VTT) |
| `sonix_get_transcript_json` | read | Get transcript as JSON |
| `sonix_list_translations` | read | List translations |
| `sonix_get_translation` | read | Get translation status |
| `sonix_get_export` | read | Get an audio or video export |
| `sonix_get_burn_in` | read | Get a video burn-in status |
| `sonix_get_summarization` | read | Get a summary or answer |
| `sonix_list_folders` | read | List folders |
| `sonix_list_batch_summarizations` | read | List batch summarizations of a folder |
| `sonix_get_batch_summarization` | read | Get a batch summarization |
| `sonix_upload_media` | **write** | Upload media for transcription |
| `sonix_update_media` | **write** | Rename or move a media file |
| `sonix_create_export` | **write** | Create an audio or video export |
| `sonix_create_translation` | **write** | Translate a transcript |
| `sonix_create_summarization` | **write** | Summarize or ask about a transcript |
| `sonix_usage_status` | meta | Usage status (free-tier meter) |
| `sonix_request_feature` | meta | Request a missing feature |
| `sonix_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sonix_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sonix_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sonix_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sonix_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
